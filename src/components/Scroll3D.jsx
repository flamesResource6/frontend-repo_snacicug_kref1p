import React, { useEffect, useRef, useState } from 'react'

// Simple scroll-driven 3D-like section (no external deps)
// Mechanics:
// - A tall container (300vh) with a sticky viewport scene
// - As the user scrolls through the container, we compute progress 0 → 1
// - We map progress to scale, rotate and depth to emulate Apple-like product reveal

function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = null

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const total = el.offsetHeight - vh
        const passed = Math.min(Math.max(-rect.top, 0), total)
        const p = total > 0 ? passed / total : 0
        setProgress(Number.isFinite(p) ? Math.min(Math.max(p, 0), 1) : 0)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])

  return progress
}

function ProductMock({ progress }) {
  // Map progress → transforms
  // Start a bit smaller, flat; end larger, slight tilt and depth
  const scale = 0.8 + progress * 0.7 // 0.8 → 1.5
  const rotateX = (1 - progress) * 6 // subtle entry tilt
  const rotateY = progress * 10 // gentle sweep
  const translateZ = progress * 160 // move towards viewer
  const shadowOpacity = 0.15 + progress * 0.25

  const style = {
    transform: `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
    boxShadow: `0 20px 60px rgba(0,0,0,${shadowOpacity})`
  }

  return (
    <div className="relative w-[74vw] max-w-[1040px] aspect-[10/7] rounded-[28px] bg-zinc-950 text-white overflow-hidden border border-zinc-800/60" style={style}>
      {/* Bezel */}
      <div className="absolute inset-0 rounded-[28px] pointer-events-none" style={{ boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.06)'}} />

      {/* Status bar */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-between px-6 text-xs text-zinc-300">
        <span>AMVISION</span>
        <span>{new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 grid md:grid-cols-2">
        <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
          <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">Diseño 3D fluido al hacer scroll</h3>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
            Interacciones de alto impacto inspiradas en Apple. A medida que bajas, el producto cobra vida: escala, profundidad y una ligera rotación que añade realismo.
          </p>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="inline-flex h-6 items-center rounded-full border border-zinc-800/80 px-3">Sin librerías externas</span>
            <span className="inline-flex h-6 items-center rounded-full border border-zinc-800/80 px-3">Performante</span>
            <span className="inline-flex h-6 items-center rounded-full border border-zinc-800/80 px-3">Scroll-driven</span>
          </div>
        </div>
        <div className="relative">
          {/* Simple layers to fake parallax/3D */}
          <div className="absolute inset-0">
            <div className="absolute left-8 right-8 top-10 h-40 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <div className="absolute left-10 right-12 top-20 h-40 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900/70" style={{ transform: `translateY(${(1-progress)*8}px)`}} />
            <div className="absolute left-20 right-20 bottom-14 h-28 rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur">
              <div className="h-full w-full grid grid-cols-3 divide-x divide-white/5">
                {Array.from({length: 3}).map((_, i) => (
                  <div key={i} className="p-4 flex flex-col justify-center gap-1">
                    <div className="h-3 w-16 bg-white/20 rounded" />
                    <div className="h-3 w-10 bg-white/10 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Simulated screen gloss */}
          <div className="absolute inset-0 pointer-events-none rounded-[28px]" style={{
            background: 'linear-gradient(110deg, rgba(255,255,255,0.18), rgba(255,255,255,0) 28%)',
            mixBlendMode: 'screen'
          }} />
        </div>
      </div>
    </div>
  )
}

export default function Scroll3D() {
  const containerRef = useRef(null)
  const progress = useScrollProgress(containerRef)

  // Map progress to UI accents
  const bgShade = Math.round(255 - progress * 40) // slight darkening

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: '300vh' }} id="scroll-3d">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center" style={{ perspective: 1400, backgroundColor: `rgb(${bgShade},${bgShade},${bgShade})` }}>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center select-none">
          <p className="text-xs uppercase tracking-widest text-zinc-500">Scroll para explorar</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">Producto en 3D que responde al scroll</h2>
        </div>

        <ProductMock progress={progress} />

        {/* Progress indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48">
          <div className="h-1 rounded-full bg-zinc-200 overflow-hidden">
            <div className="h-full bg-zinc-900" style={{ width: `${progress * 100}%` }} />
          </div>
          <div className="mt-2 text-center text-xs text-zinc-500">{Math.round(progress * 100)}%</div>
        </div>
      </div>
    </section>
  )
}
