'use client'

import type { IconType } from 'react-icons'
import { FaAws } from 'react-icons/fa'
import {
  SiDocker,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiStripe,
  SiTypescript,
} from 'react-icons/si'
import { marqueeSkills } from '@/data/editorial-portfolio'

const marqueeIcons: Record<string, { Icon: IconType; color: string }> = {
  react: { Icon: SiReact, color: '#61DAFB' },
  nextjs: { Icon: SiNextdotjs, color: '#ECE7DE' },
  nestjs: { Icon: SiNestjs, color: '#E0234E' },
  node: { Icon: SiNodedotjs, color: '#339933' },
  typescript: { Icon: SiTypescript, color: '#3178C6' },
  aws: { Icon: FaAws, color: '#FF9900' },
  graphql: { Icon: SiGraphql, color: '#E10098' },
  redis: { Icon: SiRedis, color: '#DC382D' },
  rabbitmq: { Icon: SiRabbitmq, color: '#FF6600' },
  postgresql: { Icon: SiPostgresql, color: '#4169E1' },
  stripe: { Icon: SiStripe, color: '#635BFF' },
  docker: { Icon: SiDocker, color: '#2496ED' },
}

function MarqueeItems() {
  return (
    <>
      {marqueeSkills.map((skill) => {
        const icon = marqueeIcons[skill.icon]
        const Icon = icon?.Icon

        return (
          <span key={skill.text} className="editorial-marq-item">
            {Icon ? (
              <Icon
                className="editorial-marq-icon"
                style={{ color: icon.color }}
                aria-hidden
              />
            ) : null}
            {'bold' in skill && skill.bold ? (
              <b>{skill.text}</b>
            ) : 'gold' in skill && skill.gold ? (
              <span className="g">{skill.text}</span>
            ) : (
              skill.text
            )}
          </span>
        )
      })}
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
