/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Sparkles, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Il Percorso', href: '#percorso' },
    { name: 'Ruota della Vita', href: '#giochino' },
    { name: 'In Studio & Online', href: '#contatti' },
  ];

  return (
    <header id="navbar-header" className="sticky top-0 bg-femine-bg/92 backdrop-blur-md z-50 border-b border-femine-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo - Styled beautifully with Serif font and a small Sparkle */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-femine-berry flex items-center justify-center text-white font-serif italic text-base font-bold shadow-xs">
              EM
            </div>
            <div>
              <span className="text-base font-serif italic font-medium tracking-tight text-femine-heading block">
                Elisabetta Melucci
              </span>
              <span className="block text-[8px] uppercase tracking-[0.25em] font-bold text-femine-clay">
                Life & Business Coach
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-femine-text hover:text-femine-coral hover:underline hover:underline-offset-8 hover:decoration-femine-coral transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#prenota"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-femine-coral hover:bg-femine-coral/95 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Prenota ora
            </a>
          </nav>

          {/* Mobile menu button with berry accent */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-femine-text hover:text-femine-coral hover:bg-femine-dark-bg transition-colors focus:outline-none"
              aria-label="Apri menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-femine-border bg-femine-bg"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-femine-text hover:text-femine-coral hover:bg-femine-dark-bg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#prenota"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-femine-coral hover:bg-femine-coral/95 shadow-xs"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Prenota ora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
