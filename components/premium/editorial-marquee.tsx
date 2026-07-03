'use client'

import { marqueeSkills } from '@/data/editorial-portfolio'

function MarqueeItems() {
  return (
    <>
      {marqueeSkills.map((skill) => (
        <span key={skill.text} className="editorial-marq-item">
          <span className="editorial-marq-word">{skill.text}</span>
          <span className="editorial-marq-sparkle" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </>
  )
}

export function EditorialMarquee() {
  return (
    <div className="editorial-marq editorial-marq--full" aria-label="Tech stack">
      <div id="editorial-marq" className="editorial-marq-track">
        <span className="editorial-marq-group">
          <MarqueeItems />
        </span>
        <span className="editorial-marq-group" aria-hidden="true">
          <MarqueeItems />
        </span>
      </div>
    </div>
  )
}
