export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-ecos-bright flex flex-col">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex-1 flex flex-col justify-between py-16">
        <div className="flex-1 flex items-center justify-center">
          <img src="/logo-ecos-green.svg" alt="ECOS Пловдив 2028" className="w-full max-w-[650px] object-contain" />
        </div>
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mt-16">
          <p className="text-ecos-dark font-sans text-xl md:text-2xl text-center leading-relaxed">
            Официалната кандидатура на Пловдив за Европейска столица на спорта 2028 е подготвена от Община Пловдив в партньорство със сдружение БГ Бъди Активен
          </p>
          <a href="#candidacy" className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4v16M5 14l7 7 7-7" stroke="#195400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
