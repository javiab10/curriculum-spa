function Footer() {
    return (
        <footer className="border-t border-slate-800/80 bg-slate-950/95 px-6 py-8 text-sm text-slate-500 sm:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between">
                <p>Diseñado con React, Vite y Tailwind CSS.</p>
                <p>© {new Date().getFullYear()} Currículum Profesional. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
