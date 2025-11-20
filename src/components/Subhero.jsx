import React from 'react'

function Subhero() {
  return (
    <section className="bg-white border-t border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="inline-flex items-center gap-2 text-sm text-zinc-500 mb-6">
          <span className="text-zinc-800">★</span>
          <span>SECCIÓN 2 — SUBHERO</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight max-w-4xl">
          La razón real por la que la mayoría no logra vivir del e-commerce (no es la que te imaginas)
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
          <p className="text-zinc-600 text-lg leading-relaxed">
            Miles de personas intentan crear una tienda online todos los meses…
            <br /><br />
            pero el 90% se queda trabado en:
          </p>

          <ul className="space-y-3">
            {[
              'elegir el producto',
              'armar la tienda',
              'crear anuncios',
              'tomar decisiones sin claridad',
              'avanzar sin acompañamiento',
              'abandonar cuando algo no sale',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-700">
                <span className="text-red-600">❌</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-zinc-700 text-lg leading-relaxed max-w-4xl">
          <p>Y no es porque el e-commerce sea difícil.<br />Es porque nadie les da un sistema simple, probado y acompañado
          que los haga avanzar SIN quedar desbordados.</p>
          <p className="mt-6">En este video te voy a mostrar cómo funcionan las tiendas que llegan a 10K USD/mes,
          y cómo podés empezar hoy mismo aunque nunca hayas vendido nada online.</p>
        </div>
      </div>
    </section>
  )
}

export default Subhero
