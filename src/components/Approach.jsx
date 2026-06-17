export default function Approach() {
  return (
    <section id="approach" className="bg-ecos-bg py-24 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16">

        {/* Left column */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <span className="font-condensed font-semibold text-sm uppercase tracking-widest text-ecos-dark">Подход</span>
          <h2
            className="font-condensed font-bold italic uppercase text-ecos-dark leading-tight"
            style={{ fontSize: '3.625rem', lineHeight: '110%' }}
          >
            <span style={{ color: '#4BED07' }}>Активен Пловдив</span> не е просто слоган, а подход
          </h2>
        </div>

        {/* Right column */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <p className="font-condensed font-semibold italic text-2xl md:text-3xl text-ecos-dark leading-snug">
            Водещата идея и мото на кандидатурата е{' '}
            <span className="text-ecos-bright font-bold">Активен Пловдив</span>{' '}
            – покана към всеки гражданин, независимо от възраст, физическа форма или квартал, в който живее.
          </p>
          <p className="font-sans text-lg md:text-xl text-ecos-dark leading-relaxed">
            Кандидатурата за Европейска столица на спорта 2028 не е празно обещание, тя е ускорител, който превръща шампионска инфраструктура в активни квартали, така че спортът и движението да са достъпни за всеки пловдивчанин. Едновременно признаваме гордостта от спортната инфраструктура на Пловдив и поставяме акцент върху масовия спорт в кварталите – там, където е дефицитът и където титлата ще направи разлика.
          </p>
        </div>

      </div>
    </section>
  )
}
