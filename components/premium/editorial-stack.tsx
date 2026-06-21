import { editorialStack } from '@/data/editorial-portfolio'

export function EditorialStack() {
  return (
    <section id="stack" className="editorial-section editorial-section--stack" data-parallax-section>
      <div className="editorial-wrap">
        <div className="editorial-xhead" data-reveal>
          <h2>
            <em>Stack</em>
          </h2>
        </div>

        <div className="editorial-stack-grid">
          {editorialStack.map((group) => (
            <article key={group.title} className="editorial-stack-group" data-reveal>
              <h3>{group.title}</h3>
              <ul className="editorial-stack-chips" aria-label={group.title}>
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className={'highlight' in skill && skill.highlight ? 'hl' : undefined}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
