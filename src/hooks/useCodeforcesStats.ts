import { useEffect, useState } from 'react'
import type { CodeforcesStats, CodeforcesSubmission, CodeforcesUserInfo, FetchStatus } from '../types'

const CODEFORCES_API_BASE = 'https://codeforces.com/api'

/**
 * Fetches live rating/rank/solved-count from the public Codeforces API
 * (no API key required — https://codeforces.com/apiHelp).
 *
 * - user.info gives rating, maxRating, rank.
 * - user.status gives the submission history, which we reduce down to a
 *   count of *unique* problems solved (a problem can be submitted many
 *   times, so we dedupe by contestId+index).
 *
 * Falls back to `fallback` (last-known static values) if the network
 * request fails, so the UI never shows a broken state — just slightly
 * stale numbers with a small "live" indicator turned off.
 */
export function useCodeforcesStats(handle: string, fallback: CodeforcesStats) {
  const [stats, setStats] = useState<CodeforcesStats>(fallback)
  const [status, setStatus] = useState<FetchStatus>('idle')
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function fetchStats() {
      setStatus('loading')
      try {
        const [infoRes, statusRes] = await Promise.all([
          fetch(`${CODEFORCES_API_BASE}/user.info?handles=${encodeURIComponent(handle)}`),
          fetch(`${CODEFORCES_API_BASE}/user.status?handle=${encodeURIComponent(handle)}`),
        ])

        if (!infoRes.ok || !statusRes.ok) {
          throw new Error('Codeforces API request failed')
        }

        const infoJson = await infoRes.json()
        const statusJson = await statusRes.json()

        if (infoJson.status !== 'OK' || statusJson.status !== 'OK') {
          throw new Error('Codeforces API returned an error status')
        }

        const user: CodeforcesUserInfo = infoJson.result[0]
        const submissions: CodeforcesSubmission[] = statusJson.result

        const solvedSet = new Set<string>()
        for (const sub of submissions) {
          if (sub.verdict === 'OK') {
            solvedSet.add(`${sub.problem.contestId ?? 'na'}-${sub.problem.index}`)
          }
        }

        if (!cancelled) {
          setStats({
            rating: user.rating ?? null,
            maxRating: user.maxRating ?? null,
            rank: user.rank ?? null,
            solvedCount: solvedSet.size,
          })
          setIsLive(true)
          setStatus('success')
        }
      } catch {
        // Network blocked, rate-limited, or handle changed — keep showing
        // the fallback values instead of an error state.
        if (!cancelled) {
          setStatus('error')
          setIsLive(false)
        }
      }
    }

    fetchStats()
    return () => {
      cancelled = true
    }
  }, [handle])

  return { stats, status, isLive }
}
