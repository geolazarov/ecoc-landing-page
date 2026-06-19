const items = [
  'Осигурява европейска подотчетност за изпълнението на вече заложените в ПИРО 2021–2027 инвестиции в спортна инфраструктура (над 40 млн. евро)',
  'Ускорява здравната трансформация на града в рамките на „Здравната стратегия на Пловдив - 2021-2030", ПИРО 2021-2027 и с подкрепата на рамката „Здрави градове" на Световната Здравна Организация',
  'Изгражда дълготрайно наследство чрез програми, които ще функционират след 2028 г., като „Спорт по предписание", „Отворени училищни дворове", „Лига на кварталите", „Отворени улици" и др.',
]

export default function Mechanism() {
  return (
    <section className="bg-ecos-bg py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row" style={{ gap: '20px' }}>
        {/* Left column */}
        <div className="w-full md:w-[590px] md:flex-shrink-0">
          <p className="font-condensed font-semibold text-xl md:text-3xl text-ecos-dark leading-snug md:max-w-[332px]">
            Кандидатурата не е самоцел, а механизъм, чрез който Пловдив:
          </p>
        </div>
        {/* Right column */}
        <ul className="flex flex-col w-full md:w-[590px] md:flex-shrink-0">
          {items.map((text, i) => (
            <li key={i} className="flex items-start" style={{ gap: '8px', paddingTop: '32px', paddingBottom: '32px', borderBottom: '2px solid #D5EEC9' }}>
              <span className="font-condensed flex-shrink-0" style={{ width: '32px', color: '#4BED07', fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}>→</span>
              <p className="font-condensed text-base md:text-[24px]" style={{ flex: '1 1 0', color: '#195400', fontWeight: 400, lineHeight: '1.4' }}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
