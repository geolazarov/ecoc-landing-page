export default function Candidacy() {
  return (
    <section id="candidacy" className="bg-ecos-darker py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <span className="font-condensed font-semibold text-sm uppercase tracking-widest text-ecos-lime mb-4 block">За кандидатурата</span>
          <h2
            className="font-condensed font-bold italic uppercase max-w-3xl"
            style={{ fontSize: '3.625rem', lineHeight: '110%', color: '#4BED07', fontFeatureSettings: "'ss14' on" }}
          >
            Успешната кандидатура не се представя на гражданите, а се{' '}
            <span style={{ color: '#FFF' }}>създава заедно</span>{' '}
            с тях.
          </h2>
        </div>
        <p className="text-ecos-lime font-sans text-xl md:text-2xl leading-relaxed max-w-3xl mb-16 opacity-90">
          Титлата Европейска столица на спорта се присъжда от ACES Europe, независима асоциация, партньор на Европейската комисия и на ЮНЕСКО. Тя не е еднократно спортно събитие, а признание за цялостна градска политика за масов спорт, здраве и социално включване. Носителите на титлата се оценяват по 11 критерия, сред които достъпност на инфраструктурата, здравни политики, екологична устойчивост, честна игра, гражданско участие и др.
          <br /><br />
          Предишни носители на титлата са Талин (2025), Генуа (2024), Глазгоу (2023), Хага (2022), Лисабон (2021), Малага (2020), Будапеща (2019), а за България – София (2018).
          <br /><br />
          Пловдив кандидатства за 2028 г. в категорията градове с над 500 000 жители функционална зона. Градът разполага с 82 спортни обекта, 152 регистрирани клуба в 36 дисциплини.
        </p>

        <div className="flex flex-col md:flex-row bg-ecos-bright overflow-hidden">
          <div className="md:w-[37%] min-h-[320px]">
            <img src="/highlight-image.jpg" alt="Кандидатура" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-[63%] p-10 md:p-14 flex flex-col justify-center gap-6">
            <span className="font-condensed font-semibold text-8xl text-ecos-dark leading-none">&ldquo;</span>
            <p className="font-condensed font-semibold italic text-2xl md:text-3xl text-ecos-dark leading-snug">
              Пловдив не кандидатства за Европейска столица на спорта, защото ни трябва признание.
            </p>
            <p className="font-sans italic text-lg md:text-xl text-ecos-dark leading-relaxed">
              Кандидатстваме, защото вече инвестираме над 40 милиона евро в спортна инфраструктура и тази титла ни дава европейска рамка и отговорност да изпълним тези инвестиции с конкретни резултати и пряк ефект върху качеството на живот на всеки гражданин в Пловдив.
            </p>
            <p className="font-condensed font-semibold not-italic text-base text-ecos-dark">Костадин Димитров, кмет на Пловдив</p>
          </div>
        </div>
      </div>
    </section>
  )
}
