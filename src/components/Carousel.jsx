import { useEffect, useState } from 'react'
import './Carousel.css'

export default function Carousel({ images, alt = '', interval = 2000 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [images, interval])

  if (!images || images.length === 0) return null

  return (
    <div className="carousel">
      <div className="carousel__track">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className={`carousel__img ${i === index ? 'is-active' : ''}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="carousel__dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para imagem ${i + 1}`}
              className={`carousel__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
