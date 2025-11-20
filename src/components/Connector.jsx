import React from 'react'

function Connector() {
  return (
    <section className="bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="inline-flex items-center gap-2 text-sm text-zinc-500 mb-6">
          <span className="text-zinc-800">★</span>
          <span>SECCIÓN 3 — CONECTOR</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight max-w-4xl">
          No solo te enseño la estrategia.<br />Te muestro cómo sostenerla para que funcione.
        </h3>

        <div className="mt-8 text-zinc-700 text-lg leading-relaxed space-y-6 max-w-3xl">
          <p>Porque la verdad es esta:</p>

          <ul className="space-y-2">
            {[
              '✔ Cualquiera puede armar una tienda',
              '✔ Pero muy pocos pueden sostener un negocio que crece',
            ].map((line, i) => (
              <li key={i} className="text-zinc-800">{line}</li>
            ))}
          </ul>

          <p>
            Y eso no depende solo del “paso a paso”…
            sino de cómo ejecutás, cómo decidís y cómo te ordenás mientras avanzás.
          </p>

          <p>
            Acá es donde <span className="font-semibold">AMVISION</span> hace la diferencia. Te damos:
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 text-zinc-800">
            {[
              'estrategia simple',
              'claridad',
              'acompañamiento',
              'estructura',
              'y un proceso para que avances sin perderte',
            ].map((item, i) => (
              <li key={i} className="bg-white border border-zinc-200 rounded-xl px-4 py-3">• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Connector
