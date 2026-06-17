export default function Footer() {
  return (
    <footer className="bg-ecos-darker py-16 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-condensed font-semibold text-sm uppercase tracking-widest text-ecos-bright">Град-кандидат</span>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-white rounded-lg px-4 py-3">
                <img src="/logo-ecos.png" alt="ECOS Пловдив 2028" className="h-14 w-auto object-contain" />
              </div>
              <div className="bg-white rounded-lg px-4 py-3">
                <img src="/logo-aces.png" alt="ACES Europe" className="h-14 w-auto object-contain" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-condensed font-semibold text-sm uppercase tracking-widest text-ecos-bright">Инициира</span>
            <div className="bg-white rounded-lg px-4 py-3 inline-flex">
              <img src="/logo-obshtina.png" alt="Община Пловдив" className="h-14 w-auto object-contain" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-condensed font-semibold text-sm uppercase tracking-widest text-ecos-bright">Партньори</span>
          <div className="flex items-center gap-4 flex-wrap">
            {[
              { src: '/logo-bgba.png', alt: 'БГ Бъди Активен' },
              { src: '/logo-mu.png', alt: 'Медицински Университет Пловдив' },
              { src: '/logo-pl2019.png', alt: 'Пловдив 2019' },
            ].map(logo => (
              <div key={logo.alt} className="bg-white rounded-lg px-4 py-3">
                <img src={logo.src} alt={logo.alt} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        <p className="font-condensed font-semibold text-sm text-white/70 leading-relaxed border-t border-white/10 pt-8">
          Пловдив е официален кандидат за титлата Европейска столица на спорта за 2028 година. Кандидатурата се оценява от ACES Europe, като титлата се припознава от Европейската комисия. Цялото съдържание на кандидатурата, включително планираните събития и инфраструктурни проекти, подлежи на окончателна оценка и одобрение. Официалните резултати се обявяват от ACES Europe. За повече информация посетете официалния уебсайт на ACES Europe.
        </p>

      </div>
    </footer>
  )
}
