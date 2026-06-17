const services = [
  {
    title: 'Digital Design',
    items: ['UX/UI Design', 'Web Design', 'Product Design', 'Prototyping'],
  },
  {
    title: 'Development',
    items: ['Website Development', 'WordPress', 'Framer', 'Web Applications'],
  },
  {
    title: 'Brand Design',
    items: ['Logo Design', 'Visual Identity', 'Brand Strategy', 'Art Direction'],
  },
]

export default function Services() {
  return (
    <section className="px-8 py-20 border-b border-white/10">
      <h2 className="text-white text-5xl md:text-7xl font-medium tracking-tight mb-16">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service) => (
          <div key={service.title}>
            <h3 className="text-white text-xl font-medium mb-6">{service.title}</h3>
            <ul className="space-y-3">
              {service.items.map((item) => (
                <li key={item} className="text-white/50 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
