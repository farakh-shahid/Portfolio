'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { editorialCaseStudies } from '@/data/editorial-portfolio'

function CaseHtml({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export function EditorialCaseStudies() {
  const [openId, setOpenId] = useState<string>(editorialCaseStudies[0].id)
  const bodyRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const syncHeights = useCallback(() => {
    editorialCaseStudies.forEach((study) => {
      const body = bodyRefs.current[study.id]
      if (!body) return
      body.style.maxHeight = openId === study.id ? `${body.scrollHeight}px` : '0px'
    })
  }, [openId])

  useEffect(() => {
    syncHeights()
    window.addEventListener('resize', syncHeights)
    return () => window.removeEventListener('resize', syncHeights)
  }, [syncHeights])

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? '' : id))
  }

  return (
    <div className="editorial-cases">
      {editorialCaseStudies.map((study) => {
        const isOpen = openId === study.id

        return (
          <article
            key={study.id}
            className={`editorial-case${isOpen ? ' open' : ''}`}
            data-reveal
          >
            <button
              type="button"
              className="editorial-case-head"
              aria-expanded={isOpen}
              onClick={() => toggle(study.id)}
            >
              <span className="cn">{study.id}</span>
              <span className="editorial-case-title">
                <h3>{study.title}</h3>
                <span className="res">{study.result}</span>
              </span>
              <span className="tog" aria-hidden>
                +
              </span>
            </button>
            <div
              ref={(el) => {
                bodyRefs.current[study.id] = el
              }}
              className="editorial-case-body"
            >
              <div className="editorial-case-inner">
                <p className="editorial-case-problem">{study.problem}</p>
                <div className="editorial-cgrid">
                  <div className="editorial-cblock">
                    <h4>How I approach it</h4>
                    <ul>
                      {study.approach.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="editorial-cblock editorial-cblock-res">
                    <h4>Outcomes</h4>
                    <ul>
                      {study.outcomes.map((item) => (
                        <li key={item}>
                          <CaseHtml html={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="editorial-ctech">
                  {study.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                  <span className="proof">Proof details on request</span>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
