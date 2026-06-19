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
    <div className="py-8 md:py-[56px]" style={{ borderBottom: '2px solid #D5EEC9' }}>
      <div className="flex items-start justify-between gap-3 md:gap-0">
        {/* Number */}
        <span
          className="font-condensed font-bold italic flex-shrink-0 w-[56px] md:w-[100px] text-[44px] md:text-[74px] leading-none"
          style={{ color: '#43D300' }}
        >
          {item.num}
        </span>

        {/* Content — flex-1 on mobile, fixed on desktop */}
        <div className="flex-1 min-w-0 md:w-[900px] md:flex-none flex flex-col" style={{ gap: '16px' }}>
          <p className="font-condensed text-[18px] md:text-[30px]" style={{ color: '#195400', fontWeight: 600, lineHeight: '1.35' }}>
            {item.summary}
          </p>

          <div className={`accordion-body ${open ? 'open' : ''}`}>
            <div>
              {item.bullets ? (
                <ul className="flex flex-col" style={{ gap: '12px' }}>
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-start" style={{ gap: '12px' }}>
                      <span className="font-condensed flex-shrink-0 text-base md:text-[24px]" style={{ width: '28px', color: '#4BED07', fontWeight: 500, lineHeight: '1.4' }}>→</span>
                      <span className="font-condensed text-base md:text-[24px]" style={{ flex: '1 1 0', color: '#195400', fontWeight: 400, lineHeight: '1.4' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-condensed text-base md:text-[24px]" style={{ color: '#195400', fontWeight: 400, lineHeight: '1.4' }}>{item.body}</p>
              )}
            </div>
          </div>
        </div>

        {/* Toggle */}
        <button
          className="flex-shrink-0 select-none font-condensed ml-2 md:ml-0"
          style={{ width: '32px', color: '#43D300', fontSize: '22px', fontWeight: 500, textAlign: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          {open ? '—' : '+'}
        </button>
      </div>
    </div>
  )
}

export default function Firsts() {
  return (
    <section id="firsts" className="bg-ecos-bg py-16 md:py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16">
          <img src="/pictogram-heart.svg" alt="" className="object-contain w-[80px] md:w-[145px]" />
          <h2
            className="font-condensed font-bold italic uppercase text-[36px] md:text-[58px]"
            style={{ color: '#43D300', lineHeight: '63.80px', maxWidth: '708px' }}
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
