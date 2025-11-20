import React from 'react'
import Hero from './components/Hero'
import Subhero from './components/Subhero'
import Connector from './components/Connector'
import Scroll3D from './components/Scroll3D'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-xl">AMVISION</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#scroll-3d" className="hover:text-zinc-900">Experiencia 3D</a>
            <a href="#video" className="hover:text-zinc-900">Video</a>
            <a href="#metodo" className="hover:text-zinc-900">Método</a>
            <a href="#contacto" className="hover:text-zinc-900">Contacto</a>
          </nav>
          <a href="#video" className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800">Ver video</a>
        </div>
      </header>

      <main>
        <Hero />
        <Subhero />

        {/* Sección interactiva 3D con scroll */}
        <Scroll3D />

        <Connector />

        {/* Placeholder section for video anchor */}
        <section id="video" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="aspect-video w-full rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-500">
              Aquí va tu video gratuito
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-zinc-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} AMVISION. Todos los derechos reservados.</span>
          <a href="/test" className="hover:text-zinc-900">Status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
