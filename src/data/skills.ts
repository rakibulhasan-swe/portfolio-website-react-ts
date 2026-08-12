import type { SkillCategoryData } from '../types'

export const skillCategories: SkillCategoryData[] = [
  { id: 'languages', title: 'Languages', items: ['JavaScript', 'TypeScript', 'C++'] },
  { id: 'frontend', title: 'Frontend', items: ['React', 'Next', 'Tailwind'] },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  { id: 'database', title: 'Database', items: ['MongoDB', 'SQL', 'Database Design'] },
  { id: 'ai-tools', title: 'AI & Tools', items: ['AI Integration', 'Git', 'GitHub'] },
  {
    id: 'cs-fundamentals',
    title: 'CS Fundamentals',
    items: ['DSA', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
]
