import { useState } from 'react'

// Add more images to this array when available
const slides = [
  { src: '/gallery-image.jpg', alt: 'Пловдив спорт 1' },
  { src: '/gallery-image-02-Gaya-Vardeva.jpg', alt: 'Пловдив спорт 2' },
  { src: '/gallery-image-03.jpg', alt: 'Пловдив спорт 3' },
  { src: '/gallery-image-04.jpg', alt: 'Пловдив спорт 4' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)

  return (
    <section className="py-16 flex justify-center px-6">
      <div
        className="relative overflow-hidden w-full"
        style={{
          maxWidth: '75rem',
          maxHeight: '50.00613rem',
          aspectRatio: '1200 / 800.10',
        }}
      >
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ minWidth: '100%' }}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center transition-colors"
          aria-label="Предишна"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#195400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center transition-colors"
          aria-label="Следваща"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#195400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-colors"
              style={{ backgroundColor: i === current ? '#195400' : 'rgba(25,84,0,0.3)' }}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
