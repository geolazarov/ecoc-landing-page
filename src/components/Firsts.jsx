import { useState } from 'react'

const items = [
  {
    num: '01',
    summary: 'Пловдив е първият град в България, който обвързва кандидатурата за столица на спорта със здравето на гражданите като управленска политика:',
    bullets: [
      'Партньорство с Медицински университет – Пловдив за научно измерване на здравните показатели преди и след намесите;',
      'Програма „Спорт по предписание" за интегриране на физическата активност в клиничната практика;',
      'Официално припознаване на рамката „Здрави градове" на СЗО, която въвежда принципа „Здраве във всички политики".',
    ],
  },
  {
    num: '02',
    summary: 'Пловдив е първият град в България, който вплита две европейски титли в единен градски наратив.',
    body: 'Пловдив ще бъде първият и единствен град в България, в който приемствеността между двете престижни европейски градски титли - Европейска столица на културата (2019) и Европейска столица на спорта (2028), е не само символична, а програмна. Инициативата MoveWeek, проведена под ЕСК 2019, бе първата такава под Столица на културата в историята на формата. Девет години по-късно Фондация „Пловдив 2019" е структурен партньор в спортната кандидатура, а предложеният критерий „Движение за здраве" в отворените покани на Фондацията превръща тази приемственост в институционален механизъм.',
  },
  {
    num: '03',
    summary: 'Пловдив е първият град в България, чиято кандидатура за столица на спорта е проектирана около хората и общностите, не само около неговите шампиони.',
    body: 'Пловдив е първият град в България, чиято спортна програма поставя в центъра не шампиона, а гражданина, за когото спортната инфраструктура никога досега не е проектирана: жените, момичетата и хората над 70 години. Десет нови активни точки са проектирани от нулата за тях, т.е. не като добавени елементи, а самостоятелна, нова инфраструктура.',
  },
  {
    num: '04',
    summary: 'Пловдив е първият град в България с програма за научно измерване на дългосрочния ефект от инвестициите в масов спорт.',
    body: 'Пловдив ще бъде първият град в България, в който инвестицията в масов спорт ще бъде измерена и доказана с медицински данни. В партньорство с Медицинския университет, програмата ще проследи промените в здравните показатели на гражданите преди, по време и след 2028 г. Тази посока акцентира не върху самия здравен фокус, а върху доказуемостта - нещо, което липсва системно в цялата история на подобни кандидатури в страната.',
  },
]

function AccordionItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)

  return (
    <div className="border-b border-ecos-bright/30">
      <button
        className="w-full flex items-start gap-12 py-8 text-left"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {/* Number — italic, no background */}
        <span
          className="font-condensed font-bold italic flex-shrink-0 w-20 leading-none pt-1"
          style={{ fontSize: '4.625rem', color: '#4BED07' }}
        >
          {item.num}
        </span>

        {/* Summary */}
        <p className="font-condensed font-bold italic text-xl md:text-2xl text-ecos-dark leading-snug flex-1 pt-3">
          {item.summary}
        </p>

        {/* Toggle — no background, light green dash */}
        <span
          className="flex-shrink-0 text-2xl font-light leading-none mt-3 select-none"
          style={{ color: '#4BED07' }}
        >
          {open ? '—' : '+'}
        </span>
      </button>

      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div>
          <div className="pb-8 pr-12 pl-[8rem]">
            {item.bullets ? (
              <ul className="flex flex-col gap-3">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-ecos-lime font-condensed font-semibold text-xl flex-shrink-0">→</span>
                    <span className="font-sans text-lg text-ecos-dark leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-sans text-lg text-ecos-dark leading-relaxed">{item.body}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Firsts() {
  return (
    <section id="firsts" className="bg-ecos-bg py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <img src="/logo-ecos.png" alt="" className="h-16 w-auto object-contain" />
          <h2
            className="font-condensed font-bold italic"
            style={{ fontSize: '3.625rem', lineHeight: '110%', color: '#4BED07' }}
          >
            Четири „първи" места за България
          </h2>
        </div>
        <div>
          {items.map((item, i) => (
            <AccordionItem key={item.num} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
