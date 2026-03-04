import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show navbar when at top
            if (currentScrollY < 50) {
                setVisible(true);
                setScrolled(false);
            } else {
                setScrolled(true);
                // Show on scroll up, hide on scroll down
                if (currentScrollY < lastScrollY) {
                    setVisible(true);
                } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setVisible(false);
                }
            }
            
            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = (e) => {
            // Show navbar when mouse is near top (within 100px)
            if (e.clientY < 100) {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lastScrollY]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <motion.nav 
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-pink-500/15 via-fuchsia-500/10 to-violet-500/15 backdrop-blur-md border-b border-pink-300/20 py-4' : 'bg-transparent py-6'}`}
            initial={{ y: 0 }}
            animate={{ y: visible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-white font-bold text-2xl font-display tracking-tighter">
                    Juli<span className="text-pink-400">Kyada</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-sm text-neutral-300 hover:text-pink-300 transition-colors font-medium">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/juliKyada" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-pink-300 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/juli-kyada-8979b7287" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-violet-300 transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-violet-500/20 backdrop-blur-md border border-pink-300/20 mt-2 p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg text-neutral-300 hover:text-pink-300 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
