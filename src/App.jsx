import Layout from './components/Layout';

function App() {
    return (
        <Layout>
            <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
                <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30 sm:p-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/20">
                                Frontend Developer
                            </span>
                            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Diseño y desarrollo de experiencias web profesionales.
                            </h1>
                            <p className="mt-4 max-w-2xl text-slate-300">
                                SPA moderna construida con React, Vite y Tailwind CSS para presentar tu currículum profesional con estilo, rendimiento y adaptación móvil.
                            </p>
                        </div>
                        <div className="rounded-3xl bg-slate-950 p-6 text-slate-400 ring-1 ring-white/10 sm:p-8">
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Próximo paso</p>
                            <p className="mt-4 text-3xl font-semibold text-white">Impulsa tu perfil</p>
                            <p className="mt-3 text-sm leading-6 text-slate-400">
                                Añade tu experiencia laboral, habilidades clave y proyectos destacados en un sitio rápido y atractivo.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default App;
