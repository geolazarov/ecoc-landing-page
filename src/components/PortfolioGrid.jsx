const projects = [
  {
    id: 1,
    title: 'Btan Tchobanov',
    subtitle: 'Art Director & Graphic Design Studio, Sofia',
    url: '#',
    bg: '#1a1a1a',
    textColor: '#fff',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
    size: 'tall',
  },
  {
    id: 2,
    title: 'Brand the City',
    subtitle: 'Annual Graphic Design event at South-Western uni...',
    url: '#',
    bg: '#f5f5f0',
    textColor: '#111',
    accent: '#c8f000',
    label: '25 FEB — 01 MAR',
    size: 'normal',
  },
  {
    id: 3,
    title: 'An Offer Making',
    subtitle: 'Identity & real estate project for an urban...',
    url: '#',
    bg: '#2a2a2a',
    textColor: '#fff',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    size: 'normal',
  },
  {
    id: 4,
    title: 'Real Estate',
    subtitle: '"Trakiya" is a public urban area in Plovdiv, Bulgaria with lots of...',
    url: '#',
    bg: '#f0ece8',
    textColor: '#111',
    size: 'normal',
  },
  {
    id: 5,
    title: 'Urban Storytelling School',
    subtitle: 'Urban Storytelling School, Sofia, Bulgaria',
    url: '#',
    bg: '#111',
    textColor: '#fff',
    accent: '#e040fb',
    size: 'tall',
  },
  {
    id: 6,
    title: 'National Sport Event Poster 2022',
    subtitle: 'National sport event poster 2022',
    url: '#',
    bg: '#e8e0d8',
    textColor: '#111',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80',
    size: 'normal',
  },
  {
    id: 7,
    title: 'Плакат за Градски Стани',
    subtitle: 'Digital branding and visual identity for a Project',
    url: '#',
    bg: '#1c1c1c',
    textColor: '#fff',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
    size: 'normal',
  },
  {
    id: 8,
    title: 'RESM',
    subtitle: 'BMS Branding/Printing in a Project',
    url: '#',
    bg: '#f5f200',
    textColor: '#111',
    size: 'normal',
  },
]

function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      className="group block relative overflow-hidden"
      style={{ backgroundColor: project.bg }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover absolute inset-0 opacity-60 group-hover:opacity-50 transition-opacity"
        />
      )}

      {project.label && (
        <div
          className="absolute top-6 right-6 px-3 py-1 text-xs font-bold tracking-wider"
          style={{ backgroundColor: project.accent || '#c8f000', color: '#111' }}
        >
          {project.label}
        </div>
      )}

      <div
        className="relative z-10 p-6 flex flex-col justify-end"
        style={{ minHeight: project.size === 'tall' ? '400px' : '260px' }}
      >
        {project.title === 'Urban Storytelling School' && (
          <div className="mb-4">
            <p
              className="text-4xl font-black leading-tight uppercase"
              style={{ color: project.textColor }}
            >
              Urban<br />Story<br />Telling<br />School
            </p>
            {project.accent && (
              <div
                className="inline-block px-3 py-1 text-xs font-bold mt-2"
                style={{ backgroundColor: project.accent, color: '#fff' }}
              >
                USoS
              </div>
            )}
          </div>
        )}

        {project.title === 'Brand the City' && (
          <div className="mb-4">
            <p className="text-2xl font-black uppercase leading-tight" style={{ color: project.textColor }}>
              Brand<br />the City
            </p>
            <p className="text-sm font-bold mt-2" style={{ color: project.accent || '#111' }}>
              {project.label}
            </p>
          </div>
        )}

        {project.title === 'RESM' && (
          <div className="flex items-end justify-between w-full">
            <div />
            <p className="text-7xl font-black" style={{ color: project.textColor }}>
              RESM
            </p>
          </div>
        )}

        <div className="mt-auto">
          <p
            className="text-xs font-semibold tracking-wider uppercase mb-1"
            style={{ color: project.textColor, opacity: 0.5 }}
          >
            {project.title === 'Urban Storytelling School'
              ? ''
              : project.title === 'Brand the City'
              ? ''
              : project.title === 'RESM'
              ? ''
              : project.title}
          </p>
          <p
            className="text-xs leading-snug"
            style={{ color: project.textColor, opacity: 0.6 }}
          >
            {project.subtitle}
          </p>
        </div>
      </div>
    </a>
  )
}

export default function PortfolioGrid() {
  return (
    <section id="work" className="w-full">
      <div className="grid grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
