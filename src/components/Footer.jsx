export default function Footer() {
  return (
    <footer className="bg-ecos-darker py-12 md:py-16 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col">

        {/* Град-кандидат + Инициира */}
        <div className="flex flex-col md:flex-row pb-10 md:pb-12" style={{ gap: '20px' }}>
          {/* Град-кандидат */}
          <div className="flex flex-col gap-6 border-t border-white/20 pt-8 w-full md:w-[590px] md:flex-shrink-0">
            <span className="font-condensed font-semibold text-sm" style={{ color: '#43D300' }}>Град-кандидат</span>
            <div className="flex items-center gap-8 flex-wrap">
              <img src="/logo-ecos.png" alt="ECOS Пловдив 2028" className="h-14 md:h-16 w-auto object-contain" />
              <a href="https://aceseurope.eu/" target="_blank" rel="noopener noreferrer">
                <img src="/logo-aces.png" alt="ACES Europe" className="h-10 md:h-12 w-auto object-contain" />
              </a>
            </div>
          </div>
          {/* Инициира */}
          <div className="flex flex-col gap-6 border-t border-white/20 pt-8 w-full md:w-[590px] md:flex-shrink-0">
            <span className="font-condensed font-semibold text-sm" style={{ color: '#43D300' }}>Инициира</span>
            <div className="flex items-center gap-8 flex-wrap">
              <a href="https://www.plovdiv.bg/" target="_blank" rel="noopener noreferrer">
                <img src="/logo-obshtina.png" alt="Община Пловдив" className="h-12 md:h-14 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Партньори */}
        <div className="flex flex-col gap-6 border-t border-white/20 pt-8 pb-10 md:pb-12">
          <span className="font-condensed font-semibold text-sm" style={{ color: '#43D300' }}>Партньори</span>
          <div className="flex items-center gap-8 md:gap-10 flex-wrap">
            <a href="https://bgbeactive.org/" target="_blank" rel="noopener noreferrer">
              <img src="/logo-bgba.png" alt="БГ Бъди Активен" className="h-10 md:h-12 w-auto object-contain" />
            </a>
            <a href="https://mu-plovdiv.bg/" target="_blank" rel="noopener noreferrer">
              <img src="/logo-mu.png" alt="Медицински Университет Пловдив" className="h-10 md:h-12 w-auto object-contain" />
            </a>
            <a href="https://plovdiv2019.eu/" target="_blank" rel="noopener noreferrer">
              <img src="/logo-pl2019.png" alt="Пловдив 2019" className="h-10 md:h-12 w-auto object-contain" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="font-condensed text-sm leading-relaxed border-t border-white/20 pt-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Пловдив е официален кандидат за титлата Европейска столица на спорта за 2028 година. Кандидатурата се оценява от ACES Europe, като титлата се припознава от Европейската комисия. Цялото съдържание на кандидатурата, включително планираните събития и инфраструктурни проекти, подлежи на окончателна оценка и одобрение. Официалните резултати се обявяват от ACES Europe. За повече информация посетете официалния уебсайт на ACES Europe.
        </p>

      </div>
    </footer>
  )
}
