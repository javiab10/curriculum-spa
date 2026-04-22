import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleToggle = () => setMobileOpen((current) => !current);
    const handleClose = () => setMobileOpen(false);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Navbar isOpen={mobileOpen} onToggle={handleToggle} onClose={handleClose} />
            <div className="pt-24">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
