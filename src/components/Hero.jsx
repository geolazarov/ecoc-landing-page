export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-ecos-bright flex flex-col items-center justify-center gap-0 px-6 py-16">

      {/* Logo — 950px, centered */}
      <div className="w-full flex justify-center">
        <img
          src="/logo-ecos-green.svg"
          alt="ECOS Пловдив 2028"
          className="w-full object-contain"
          style={{ maxWidth: '950px' }}
        />
      </div>

      {/* Gap 112px */}
      <div style={{ height: '7rem' }} />

      {/* Text — centered */}
      <p className="text-ecos-dark font-sans text-xl md:text-2xl text-center leading-relaxed max-w-3xl">
        Официалната кандидатура на Пловдив за Европейска столица на спорта 2028 е подготвена от Община Пловдив в партньорство със сдружение <a href="https://bgbeactive.org/" target="_blank" rel="noopener noreferrer" className="underline">БГ Бъди Активен</a>
      </p>

      {/* Arrow — centered below text */}
      <a href="#candidacy" className="mt-8" aria-label="Надолу">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 8.33331V31.6666M8.33331 20L20 31.6666L31.6666 20" stroke="#164900" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

    </section>
  )
}
