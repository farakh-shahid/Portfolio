import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/classic', label: 'Classic' },
]

export function PrimaryNav() {
  return (
    <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="transition hover:text-white">
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
