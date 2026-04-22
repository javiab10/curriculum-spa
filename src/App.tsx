import resumeData from "./data";
import Layout from "./components/Layout";
import { Briefcase, Code, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const sectionClass =
    "mb-16 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20 animate-[fadeIn_0.8s_ease-out_forwards]";

function App() {
    const {
        name,
        title,
        about,
        contact,
        technologies,
        languages,
        experience,
        projects,
        education,
    } = resumeData;

    return (
        <Layout>
            <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
                <section id="inicio" className={`${sectionClass} pt-8`}>
                    <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">
                                Currículum profesional
                            </p>
                            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                {name}
                            </h1>
                            <p className="mt-2 text-xl font-medium text-slate-200">
                                {title}
                            </p>
                            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
                                {about}
                            </p>
                        </div>
                        <div className="rounded-3xl bg-slate-950 p-6 text-slate-200 ring-1 ring-white/10 sm:p-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-emerald-400">
                                    <Phone className="h-5 w-5" />
                                    <span>{contact.mobile}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Mail className="h-5 w-5 text-emerald-400" />
                                    <span>{contact.email}</span>
                                </div>
                                <div className="flex items-start gap-3 text-slate-300">
                                    <MapPin className="mt-1 h-5 w-5 text-emerald-400" />
                                    <span>{contact.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sobre-mi" className={sectionClass}>
                    <div className="flex items-center gap-3 text-emerald-400">
                        <Briefcase className="h-5 w-5" />
                        <h2 className="text-2xl font-semibold text-white">
                            Sobre mí
                        </h2>
                    </div>
                    <p className="mt-6 leading-8 text-slate-300">{about}</p>
                </section>

                <section id="tecnologias" className={sectionClass}>
                    <div className="flex items-center gap-3 text-emerald-400">
                        <Code className="h-5 w-5" />
                        <h2 className="text-2xl font-semibold text-white">
                            Tecnologías
                        </h2>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {technologies.map((group) => (
                            <div
                                key={group.category}
                                className="rounded-3xl bg-slate-950/80 p-6"
                            >
                                <h3 className="text-lg font-semibold text-white">
                                    {group.category}
                                </h3>
                                <ul className="mt-4 space-y-2 text-slate-300">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2"
                                        >
                                            <Sparkles className="h-4 w-4 text-emerald-400" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="experiencia" className={sectionClass}>
                    <div className="flex items-center gap-3 text-emerald-400">
                        <Briefcase className="h-5 w-5" />
                        <h2 className="text-2xl font-semibold text-white">
                            Experiencia
                        </h2>
                    </div>
                    <div className="mt-8 space-y-6">
                        {experience.map((item) => (
                            <article
                                key={`${item.company}-${item.role}`}
                                className="rounded-3xl bg-slate-950/80 p-6"
                            >
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {item.role}
                                        </h3>
                                        <p className="text-slate-400">
                                            {item.company}
                                        </p>
                                    </div>
                                    <span className="rounded-full bg-slate-900/90 px-4 py-2 text-sm text-slate-300">
                                        {item.dateRange}
                                    </span>
                                </div>
                                {item.achievements.length > 0 ? (
                                    <ul className="mt-4 space-y-2 text-slate-300">
                                        {item.achievements.map(
                                            (achievement) => (
                                                <li
                                                    key={achievement}
                                                    className="flex items-start gap-2"
                                                >
                                                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                ) : (
                                    <p className="mt-4 text-slate-400">
                                        Posición actual sin detalles
                                        adicionales.
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                <section id="proyectos" className={sectionClass}>
                    <div className="flex items-center gap-3 text-emerald-400">
                        <Sparkles className="h-5 w-5" />
                        <h2 className="text-2xl font-semibold text-white">
                            Proyectos
                        </h2>
                    </div>
                    <div className="mt-8 grid gap-4 lg:grid-cols-2">
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <article
                                    key={project.name}
                                    className="rounded-3xl bg-slate-950/80 p-6"
                                >
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                        <h3 className="text-lg font-semibold text-white">
                                            {project.name}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-slate-300">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-slate-900 px-3 py-1 text-sm text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            className="mt-5 inline-flex items-center gap-2 text-emerald-300 hover:text-white"
                                        >
                                            Ver proyecto
                                        </a>
                                    ) : null}
                                </article>
                            ))
                        ) : (
                            <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300">
                                <p>
                                    No hay proyectos añadidos aún. Puedes
                                    completar esta sección con tus trabajos
                                    recientes.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                <section id="contacto" className={sectionClass}>
                    <div className="flex items-center gap-3 text-emerald-400">
                        <Mail className="h-5 w-5" />
                        <h2 className="text-2xl font-semibold text-white">
                            Contacto
                        </h2>
                    </div>
                    <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                        <div className="space-y-4 text-slate-300">
                            <p>
                                ¿Quieres hablar sobre un proyecto o una
                                oportunidad? Escríbeme y te responderé cuanto
                                antes.
                            </p>
                            <div className="rounded-3xl bg-slate-950/80 p-5">
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                                    Idiomas
                                </p>
                                <ul className="mt-4 space-y-2 text-slate-300">
                                    {languages.map((language) => (
                                        <li key={language}>{language}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-emerald-400" />
                                    <span>{contact.mobile}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-emerald-400" />
                                    <span>{contact.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-emerald-400" />
                                    <span>{contact.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default App;
