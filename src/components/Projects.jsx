const projects = [
  {
    id: '01',
    title: 'Nine Elephants',
    services: 'Visual Identity, UX/UI, Illustration',
    url: 'https://www.weareoutline.com',
  },
  {
    id: '02',
    title: 'Mir Building',
    services: 'Website design, Wordpress implementation',
    url: 'https://mirbuilding.bg',
  },
  {
    id: '03',
    title: 'RESM',
    services: 'Logo, Visual Identity, Template design, Website design',
    url: '#',
  },
  {
    id: '04',
    title: 'Urban Storytelling School',
    services: 'Visual Identity, UX/UI',
    url: '#',
  },
  {
    id: '05',
    title: 'Easy Quizzy',
    services: 'Logo, Visual Identity, UX / UI Design',
    url: '#',
  },
]

export default function Projects() {
  return (
    <section id="work" className="w-full">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target={project.url.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="group flex items-baseline justify-between px-8 py-8 border-b border-white/10 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-baseline gap-8">
            <span className="text-white/30 text-sm font-mono w-8 shrink-0">
              {project.id}
            </span>
            <span className="text-white text-2xl md:text-4xl font-medium tracking-tight">
              {project.title}
            </span>
          </div>
          <span className="text-white/40 text-sm text-right hidden md:block">
            {project.services}
          </span>
        </a>
      ))}
    </section>
  )
}
