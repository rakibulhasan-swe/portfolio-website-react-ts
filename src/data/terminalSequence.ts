export interface TerminalLine {
  type: 'cmd' | 'out'
  text: string
}

export const terminalSequence: TerminalLine[] = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Software Engineer' },
  { type: 'cmd', text: 'current focus.txt' },
  {
    type: 'out',
    text: 'System design • Backend • AI Integration',
  },
  { type: 'cmd', text: 'ls projects/' },
  { type: 'out', text: 'flagship-app/  ai-product/  micro-saas/' },
  { type: 'cmd', text: 'open to' },
  { type: 'out', text: 'Frontend / Full Stack Roles' },
]
