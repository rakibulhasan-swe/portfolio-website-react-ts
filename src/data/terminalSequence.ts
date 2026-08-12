export interface TerminalLine {
  type: 'cmd' | 'out'
  text: string
}

export const terminalSequence: TerminalLine[] = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Md. Rakibul Hasan — Software Engineer\nSoutheast University · Bangladesh' },
  { type: 'cmd', text: 'cat focus.txt' },
  {
    type: 'out',
    text: 'Full-stack JavaScript (MERN)\nData Structures & Algorithms (C++)\nPractical AI integration',
  },
  { type: 'cmd', text: 'ls projects/' },
  { type: 'out', text: 'flagship-app/  ai-product/  micro-saas/  realtime-app/' },
]
