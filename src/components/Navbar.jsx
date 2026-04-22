import { Menu, X, Briefcase, Mail, Home, Sparkles } from 'lucide-react';

const links = [
    { label: 'Inicio', href: '#inicio', icon: Home },
    { label: 'Experiencia', href: '#experiencia', icon: Briefcase },
    { label: 'Proyectos', href: '#proyectos', icon: Sparkles },
    { label: 'Contacto', href: '#contacto', icon: Mail },
];

function Navbar({ isOpen, onToggle, onClose }) {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
                <a href="#inicio" className="flex items-center gap-3 text-white">
                    <Briefcase className="h-6 w-6 text-emerald-400" />
                    <span className="text-lg font-semibold">Mi Currículum</span>
                </a>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 transition hover:border-slate-600 hover:text-white sm:hidden"
                    onClick={onToggle}
                    aria-label="Abrir menú"
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

                <nav className="hidden items-center gap-1 sm:flex">
                    {links.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>

            {isOpen && (
                <div className="border-t border-slate-800/80 bg-slate-950/95 sm:hidden">
                    <div className="flex flex-col gap-1 px-6 py-4">
                        {links.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={onClose}
                                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-slate-800"
                            >
                                <Icon className="h-4 w-4 text-emerald-400" />
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
