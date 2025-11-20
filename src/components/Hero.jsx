import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-100" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <span className="text-zinc-800">★</span>
            <span>SECCIÓN 1 — HERO</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Crea Tu Tienda Desde Cero y Llévala a 10K USD/mes en 90 Días
            <span className="block text-zinc-700">Con un Método Simple, Probado y desde Argentina.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl">
            Aunque aún no sepas que vender, no tengas experiencia previa. Te doy el paso a paso.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#video"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-900 text-white font-semibold shadow-sm hover:bg-zinc-800 transition-colors"
            >
              Quiero ver el video gratuito
            </a>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Más de <span className="font-semibold text-zinc-800">[X]</span> alumnos avanzando cada semana con nuestro sistema.
          </p>
        </div>
      </div>

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
    </section>
  )
}

export default Hero
