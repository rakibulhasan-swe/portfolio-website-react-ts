import { AISection } from './components/AISection/AISection'
import { Contact } from './components/Contact/Contact'
import { CustomCursor } from './components/CustomCursor/CustomCursor'
import { Experience } from './components/Experience/Experience'
import { Focus } from './components/Focus/Focus'
import { Foundations } from './components/Foundations/Foundations'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { IdentityChips } from './components/IdentityChips/IdentityChips'
import { ProblemSolving } from './components/ProblemSolving/ProblemSolving'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main id="top">
        <Hero />
        <IdentityChips />
        <Focus />
        <Experience />
        <Skills />
        <Projects />
        <ProblemSolving />
        <Foundations />
        <AISection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
