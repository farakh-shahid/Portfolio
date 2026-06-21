import { ContactForm } from '@/components/contact/contact-form'
import { ContactProofPoints } from '@/components/contact/contact-proof-points'
import { SectionShell } from '@/components/layout/section-shell'

export default function ContactPage() {
  return (
    <main>
      <SectionShell title="Contact" description="Let’s discuss architecture, scaling, or senior engineering opportunities.">
        <div className="grid gap-4 md:grid-cols-2">
          <ContactForm />
          <ContactProofPoints />
        </div>
      </SectionShell>
    </main>
  )
}
