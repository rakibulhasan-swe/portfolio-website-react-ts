import { codechefProfileUrl, codeforcesHandle, codeforcesProfileUrl } from '../../data/navigation'
import { problemSolvingJourney } from '../../data/foundations'
import { useCodeforcesStats } from '../../hooks/useCodeforcesStats'
import { Reveal } from '../Reveal/Reveal'


const CODEFORCES_FALLBACK = {
  rating: 1225,
  maxRating: 1225,
  rank: 'pupil',
  solvedCount: 465,
}

const CODECHEF_STATS = {
  rating: 1518,
  maxRating: 1591,
  stars: '2★',
  league: 'Bronze League',
  solvedCount: 206,
}

function formatRank(rank: string | null) {
  if (!rank) return null
  return rank
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function ProblemSolving() {
  const { stats, isLive } = useCodeforcesStats(codeforcesHandle, CODEFORCES_FALLBACK)

  return (
    <section id="problem-solving">
      <div className="wrap">
        <div className="eyebrow">Problem Solving</div>
        <Reveal as="h2" className="section-title">
          Building the fundamentals in C++
        </Reveal>
        <Reveal as="p" className="section-intro">
          Practicing data structures and algorithms on Codeforces, CodeChef, and LeetCode — an
          engineering learning path, not a scoreboard.
        </Reveal>

        <Reveal className="journey">
          {problemSolvingJourney.map((step, i) => (
            <span key={step}>
              <span className="journey-step">{step}</span>
              {i < problemSolvingJourney.length - 1 && <span className="journey-arrow">→</span>}
            </span>
          ))}
        </Reveal>

        <Reveal className="ps-grid">
          <div className="ps-card">
            <div className="ps-card-head">
              <span className="name">
                Codeforces
                {isLive && (
                  <span
                    title="Live data from the Codeforces API"
                    style={{
                      display: 'inline-block',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--accent2)',
                      marginLeft: 8,
                    }}
                  />
                )}
              </span>
              <span className="ps-badge">{formatRank(stats.rank) ?? 'Pupil'}</span>
            </div>
            <div className="ps-stats">
              <div className="ps-stat">
                <div className="num">{stats.rating ?? '—'}</div>
                <div className="lbl">
                  Rating <span className="sub">(max {stats.maxRating ?? '—'})</span>
                </div>
              </div>
              <div className="ps-stat">
                <div className="num">{stats.solvedCount ?? '—'}</div>
                <div className="lbl">Problems Solved</div>
              </div>
            </div>
            <a href={codeforcesProfileUrl} target="_blank" rel="noopener noreferrer" className="stat">
              View profile ↗
            </a>
          </div>

          <div className="ps-card">
            <div className="ps-card-head">
              <span className="name">CodeChef</span>
              <span className="ps-badge">
                {CODECHEF_STATS.stars} {CODECHEF_STATS.league}
              </span>
            </div>
            <div className="ps-stats">
              <div className="ps-stat">
                <div className="num">{CODECHEF_STATS.rating}</div>
                <div className="lbl">
                  Rating <span className="sub">(max {CODECHEF_STATS.maxRating})</span>
                </div>
              </div>
              <div className="ps-stat">
                <div className="num">{CODECHEF_STATS.solvedCount}</div>
                <div className="lbl">Problems Solved</div>
              </div>
            </div>
            <a href={codechefProfileUrl} target="_blank" rel="noopener noreferrer" className="stat">
              View profile ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
