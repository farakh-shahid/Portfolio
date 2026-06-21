import { skills } from '@/data/skills'
import { Card } from '@/components/ui/card'
import { Tag } from '@/components/ui/tag'

export function SkillsMap() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {skills.map((group) => (
        <Card key={group.group}>
          <h3 className="text-lg font-semibold text-[var(--text-strong)]">{group.group}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Tag key={item} label={item} />
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
