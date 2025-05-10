"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"

// Estrutura de dados dos slides com URLs e conteúdo mobile
const slidesData = [
  {
    desktopUrl: "/images/banner-02.webp",
    mobileUrl: "/images/vertical-00.webp",
    mobileTitle: "Não importa o <span class=\"text-accent\">segmento</span>.",
    mobileSubtitle: "a gente tem o que sua empresa precisa para dar o proximo passo."
  },
  {
    desktopUrl: "/images/banner-00.webp",
    mobileUrl: "/images/vertical-01.webp",
    mobileTitle: "<span class=\"text-accent\">Netwise</span> Empresas",
    mobileSubtitle: "Para o seu negócio avançar com a gente."
  },
  {
    desktopUrl: "/images/banner-01.webp",
    mobileUrl: "/images/vertical-02.webp",
    mobileTitle: "<span class=\"text-accent\">Soluções</span> de T.I e Telecom",
    mobileSubtitle: "personalizadaspara a sua empresa." // Subtítulo opcional, pode ser deixado vazio
  }
]

export function ServicesHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind md breakpoint
    }
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      loop: true,
      slides: {
        perView: 1,
        spacing: 0,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <section className="relative h-screen">
      <div ref={sliderRef} className="keen-slider h-full">
        {slidesData.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide relative h-full"
          >
            <div 
              className="absolute inset-0 bg-cover bg-[center_center] sm:bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${isMobile ? slide.mobileUrl : slide.desktopUrl})`
              }}
            >
              <div className={`absolute inset-0 ${isMobile ? 'bg-black/50' : 'bg-black/1'}`} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
              {isMobile ? (
                <motion.div
                  key={currentSlide} // Para re-animar quando o slide atual (e seu texto) muda
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center text-white max-w-xs sm:max-w-sm"
                >
                  <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3 sm:mb-4" dangerouslySetInnerHTML={{ __html: slide.mobileTitle }} />
                  {slide.mobileSubtitle && (
                    <p className="text-md sm:text-lg text-white/80">
                      {slide.mobileSubtitle}
                    </p>
                  )}
                </motion.div>
              ) : (
                // Para desktop, mantemos a estrutura que pode ser usada para outros elementos ou deixada vazia
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  {/* Conteúdo para desktop, se houver, iria aqui. Atualmente vazio. */}
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="absolute bottom-5 left-0 right-0 z-20">
          <div className="flex justify-center gap-2">
            {[...Array(slidesData.length)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 transition-all ${
                  currentSlide === idx 
                    ? "w-8 bg-secondary" 
                    : "w-2 bg-white/50 hover:bg-white/80"
                } rounded-full`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}