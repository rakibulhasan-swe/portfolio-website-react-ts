import { projects } from '../../data/projects'
import { Reveal } from '../Reveal/Reveal'

export function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="eyebrow">Work</div>
        <Reveal as="h2" className="section-title">
          Projects
        </Reveal>
        <Reveal as="p" className="section-intro">
          Case studies, not just cards — the problem, the build, and what it took to ship it.{' '}
          <strong style={{ color: 'var(--text-dim)' }}>These slots are placeholders</strong> — swap
          in your real projects with their actual stack, features, and challenges.
        </Reveal>

        {projects.map((project) => (
          <Reveal
            key={project.id}
            className={`project-card ${project.isPlaceholder ? 'placeholder' : ''}`}
          >
            {project.isPlaceholder && <span className="todo-badge">Add your project</span>}
            <div className="project-top">
              <div>
                <div className="project-cat">{project.category}</div>
                <h3>{project.name}</h3>
                <p className="tagline">{project.tagline}</p>
              </div>
              <div className="project-links">
                <a href={project.codeUrl ?? '#'}>Code</a>
                <a href={project.demoUrl ?? '#'}>Live Demo</a>
              </div>
            </div>
            <div className="case-grid">
              {project.fields.map((field) => (
                <div className="case-block" key={field.label}>
                  <div className="k">{field.label}</div>
                  <div className="v">{field.value}</div>
                </div>
              ))}
            </div>
            <div className="stack-row">
              {project.stack.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
