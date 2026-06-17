import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'За кандидатурата', href: '#candidacy' },
    { label: 'Подход', href: '#approach' },
    { label: 'Отличимост', href: '#firsts' },
    { label: 'Партньорства', href: '#partners' },
  ]

  return (
    <nav className="relative bg-ecos-bright">
      <div className="w-full h-[8.9375rem] flex items-center justify-center">
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="font-condensed font-semibold text-base text-ecos-darker hover:text-ecos-bright transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li><a href="#" className="font-condensed font-semibold text-base text-ecos-darker hover:text-ecos-bright transition-colors">EN</a></li>
        </ul>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(o => !o)} aria-label="Меню">
          <span className={`block w-6 h-0.5 bg-ecos-darker transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ecos-darker transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ecos-darker transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-ecos-bg border-t border-ecos-bright/20 px-6 py-4 flex flex-col gap-4">
          {[...links, { label: 'EN', href: '#' }].map(l => (
            <a key={l.href} href={l.href} className="font-condensed font-semibold text-lg text-ecos-darker" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
