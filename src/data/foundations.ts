import type { AiNodeData, FoundationItemData } from '../types'

export const foundationItems: FoundationItemData[] = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Problem solving in C++, from arrays to graph algorithms.',
  },
  {
    id: 'dbms',
    title: 'Database Systems',
    description: 'Schema design, normalization, and query performance.',
  },
  {
    id: 'os',
    title: 'Operating Systems',
    description: 'Processes, memory, and concurrency fundamentals.',
  },
  {
    id: 'networks',
    title: 'Computer Networks',
    description: 'How data actually moves between the systems I build.',
  },
]

export const aiFlowNodes: AiNodeData[] = [
  { id: 'llm-apis', label: 'LLM APIs', status: 'active' },
  { id: 'structured-outputs', label: 'Structured Outputs', status: 'active' },
  { id: 'rag', label: 'RAG', status: 'future' },
  { id: 'embeddings', label: 'Embeddings', status: 'future' },
  { id: 'ai-agents', label: 'AI Agents', status: 'future' },
  { id: 'production', label: 'Production Applications', status: 'future' },
]

export const problemSolvingJourney = [
  'Arrays',
  'Strings',
  'Searching',
  'Sorting',
  'Recursion',
  'Data Structures',
  'Algorithms',
]
