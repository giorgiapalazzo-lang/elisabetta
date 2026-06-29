/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Contacts() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contatti" className="bg-femine-berry text-femine-coral-light/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-femine-coral flex items-center justify-center text-white font-serif italic text-base font-semibold">
                EM
              </div>
              <div>
                <span className="text-lg font-serif italic tracking-tight text-white block">
                  Elisabetta Melucci
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-femine-clay block">
                  Life & Business Coach
                </span>
              </div>
            </div>

            <p className="text-xs text-femine-coral-light/90 leading-relaxed max-w-sm mt-3">
              Un percorso pratico, guidato dall'ascolto privo di giudizi e focalizzato sull'ottenimento di risultati concreti sia nella sfera privata che in quella professionale. Accompagno persone e imprese verso la loro migliore direzione.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-femine-coral hover:text-white flex items-center justify-center transition-all text-femine-coral-light"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-femine-coral hover:text-white flex items-center justify-center transition-all text-femine-coral-light"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-femine-coral hover:text-white flex items-center justify-center transition-all text-femine-coral-light"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold text-femine-clay uppercase tracking-widest font-mono">
              Sezioni Sito
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Inizio pagina
                </a>
              </li>
              <li>
                <a href="#percorso" className="hover:text-white transition-colors">
                  Il Percorso Coaching
                </a>
              </li>
              <li>
                <a href="#giochino" className="hover:text-white transition-colors">
                  La Ruota della Vita (Gioco)
                </a>
              </li>
              <li>
                <a href="#prenota" className="hover:text-white transition-colors">
                  Prenota sessione
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-bold text-femine-clay uppercase tracking-widest font-mono">
              Contatti Rapidi
            </h4>
            
            <div className="space-y-3.5 text-sm font-medium">
              <a 
                href="tel:+393288278142" 
                className="flex items-start gap-3 hover:text-white transition-colors text-xs"
              >
                <Phone className="w-4 h-4 text-femine-coral shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white text-[9px] font-bold font-mono tracking-wider">TELEFONO</span>
                  <span className="text-femine-coral-light">+39 328 82 78 142</span>
                </div>
              </a>

              <a 
                href="mailto:mylifecoach@emelucci.com" 
                className="flex items-start gap-3 hover:text-white transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-femine-coral shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white text-[9px] font-bold font-mono tracking-wider">EMAIL</span>
                  <span className="text-femine-coral-light break-all">mylifecoach@emelucci.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-xs">
                <MapPin className="w-4 h-4 text-femine-coral shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white text-[9px] font-bold font-mono tracking-wider">STUDIO</span>
                  <span className="text-femine-coral-light/90">Via Saint Denis, Sesto San Giovanni (MI)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Studio maps banner / visual item */}
        <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <HeartPulse className="w-4 h-4 text-femine-coral shrink-0" />
            <p className="text-femine-coral-light/90 leading-normal text-xs">
              <strong>Sesto San Giovanni:</strong> Lo studio accoglie in spazi luminosi, igienizzati e sicuri. Parcheggio dedicato e a soli 5 min. dalla fermata metropolitana M1 Rondò.
            </p>
          </div>
          <span className="text-[9px] font-mono tracking-wider font-bold bg-white/10 text-femine-coral-light border border-white/10 py-1 px-2.5 rounded shrink-0">
            SOLO SU APPUNTAMENTO
          </span>
        </div>

        {/* Footer legal credits */}
        <div className="mt-12 text-center text-[10px] text-neutral-500 space-y-2">
          <p>
            &copy; {currentYear} Elisabetta Melucci. Tutti i diritti riservati. P.IVA 12345678901
          </p>
          <p className="font-medium tracking-wide">
            Sito professionale responsive pronto per l'uso. Ruota della Vita integrata e prenotazioni sincronizzate con Cal.com.
          </p>
        </div>

      </div>
    </footer>
  );
}
