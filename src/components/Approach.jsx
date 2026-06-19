export default function Approach() {
  return (
    <section id="approach" className="bg-ecos-bg py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row" style={{ gap: '20px' }}>

        {/* Left column */}
        <div className="flex flex-col gap-6 w-full md:w-[590px] md:flex-shrink-0">
          <span className="font-condensed font-semibold block" style={{ color: '#195400', fontSize: '18px', lineHeight: '26px' }}>Подход</span>
          <h2
            className="font-condensed font-bold italic uppercase text-ecos-dark text-[36px] md:text-[58px]"
            style={{ lineHeight: '110%', maxWidth: '500px' }}
          >
            <span style={{ color: '#4BED07' }}>Активен Пловдив</span> не е просто слоган, а подход
          </h2>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 w-full md:w-[590px] md:flex-shrink-0">
          <p className="font-condensed leading-snug text-[22px] md:text-[30px]" style={{ color: '#195400', fontWeight: 500 }}>
            Водещата идея и мото на кандидатурата е{' '}
            <span className="italic uppercase" style={{ color: '#43D300', fontWeight: 700 }}>Активен Пловдив</span>
            {' '}– покана към всеки гражданин, независимо от възраст, физическа форма или квартал, в който живее.
          </p>
          <p className="font-sans text-base md:text-xl text-ecos-dark leading-relaxed">
            Кандидатурата за Европейска столица на спорта 2028 не е празно обещание, тя е ускорител, който превръща шампионска инфраструктура в активни квартали, така че спортът и движението да са достъпни за всеки пловдивчанин. Едновременно признаваме гордостта от спортната инфраструктура на Пловдив и поставяме акцент върху масовия спорт в кварталите – там, където е дефицитът и където титлата ще направи разлика.
          </p>
        </div>

      </div>
    </section>
  )
}
