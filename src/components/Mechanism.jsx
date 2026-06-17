const items = [
  'Осигурява европейска подотчетност за изпълнението на вече заложените в ПИРО 2021–2027 инвестиции в спортна инфраструктура (над 40 млн. евро)',
  'Ускорява здравната трансформация на града в рамките на „Здравната стратегия на Пловдив - 2021-2030", ПИРО 2021-2027 и с подкрепата на рамката „Здрави градове" на Световната Здравна Организация',
  'Изгражда дълготрайно наследство чрез програми, които ще функционират след 2028 г., като „Спорт по предписание", „Отворени училищни дворове", „Лига на кварталите", „Отворени улици" и др.',
]

export default function Mechanism() {
  return (
    <section className="bg-ecos-bg py-24 px-6 border-t border-ecos-bright/30">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <p className="font-condensed font-semibold text-2xl md:text-3xl text-ecos-dark leading-snug">
            Кандидатурата не е самоцел, а механизъм, чрез който Пловдив:
          </p>
        </div>
        <ul className="md:w-1/2 flex flex-col gap-8">
          {items.map((text, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-condensed font-semibold text-2xl text-ecos-lime flex-shrink-0 leading-relaxed">→</span>
              <p className="font-sans text-lg md:text-xl text-ecos-dark leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
