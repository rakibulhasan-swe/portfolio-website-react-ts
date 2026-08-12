import type { ProjectData } from '../types'

/**
 * These are intentionally placeholders. Swap in real projects with their
 * actual stack, features, and challenges — set `isPlaceholder: false` once
 * a project's details are real so the "Add your project" badge disappears.
 */
export const projects: ProjectData[] = [
  {
    id: 'flagship',
    category: 'Flagship Full-Stack Product',
    name: '[Project Name]',
    tagline: "One line: what it does and who it's for.",
    fields: [
      { label: 'Problem', value: 'What real problem does this solve?' },
      { label: 'User', value: 'Who would actually use it?' },
      { label: 'Solution', value: 'How does the app solve it?' },
      { label: 'Challenge', value: 'What was the hardest part to build?' },
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Auth'],
    isPlaceholder: true,
  },
  {
    id: 'ai-product',
    category: 'AI-Powered Product',
    name: '[Project Name]',
    tagline: 'One line: what it does and why AI is actually necessary here.',
    fields: [
      { label: 'Problem', value: "What problem does AI solve here that plain code couldn't?" },
      { label: 'Approach', value: 'LLM API, prompt design, streaming, structured output?' },
      { label: 'Architecture', value: 'How is the AI layer wired into the backend?' },
      { label: 'Outcome', value: 'What did you learn shipping it?' },
    ],
    stack: ['React', 'Node.js', 'LLM API', 'Streaming'],
    isPlaceholder: true,
  },
  {
    id: 'micro-saas',
    category: 'Developer Tool / Micro SaaS',
    name: '[Project Name]',
    tagline: 'Small, genuinely useful — product thinking over complexity.',
    fields: [
      { label: 'Problem', value: 'What annoyance or gap does this fix?' },
      { label: 'Solution', value: "What's the smallest version that's actually useful?" },
    ],
    stack: ['React', 'Node.js'],
    isPlaceholder: true,
  },
]
