/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Check, Heart, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhoIsItFor() {
  const situations = [
    "Blocco personale o indecisione lavorativa",
    "Bisogno di fare chiarezza sul proprio futuro",
    "Migliorare l'autostima e la fiducia in sé",
    "Gestione dello stress e del burnout"
  ];

  return (
    <section id="percorso" className="py-16 lg:py-24 bg-femine-bg border-b border-femine-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Staggered Badges vs Elegant Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Staggered Aesthetic Badges from the mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Soft decorative background shape */}
            <div className="absolute inset-0 bg-femine-dark-bg/40 rounded-[3.5rem] -z-10 rotate-[-2deg] scale-105" />
            
            <div className="space-y-6 w-full max-w-[320px] py-10 px-6">
              
              {/* Badge 1: Experience */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-femine-coral text-white p-5 rounded-[2rem] shadow-sm transform -rotate-2 flex items-center gap-4"
              >
                <div className="text-4xl font-serif font-bold italic">10+</div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80 font-mono">Anni di</div>
                  <div className="text-xs font-bold font-sans">Esperienza Reale</div>
                </div>
              </motion.div>

              {/* Badge 2: Mentored */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-femine-dark-bg text-femine-heading p-5 rounded-[2rem] shadow-xs transform rotate-3 flex items-center gap-4 border border-femine-border-dark/40"
              >
                <div className="text-4xl font-serif font-bold italic text-femine-berry">150+</div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-femine-clay font-mono">Persone</div>
                  <div className="text-xs font-bold font-sans text-femine-text">Guidate con Successo</div>
                </div>
              </motion.div>

              {/* Badge 3: Su Misura */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white text-femine-heading p-5 rounded-[2rem] shadow-xs transform -rotate-1 flex items-center gap-4 border border-femine-border"
              >
                <div className="text-4xl font-serif font-bold italic text-femine-coral">100%</div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-femine-clay font-mono">Approccio</div>
                  <div className="text-xs font-bold font-sans text-femine-text">Senza Formula Standard</div>
                </div>
              </motion.div>

            </div>

            {/* Little vintage sparkle */}
            <div className="absolute -bottom-4 -right-2 text-femine-coral text-3xl animate-pulse-soft">✦</div>
          </div>

          {/* Right Column: Extremely streamlined text, "la gente non legge" */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-femine-clay uppercase inline-flex items-center gap-1.5 mb-3 bg-femine-dark-bg px-3 py-1 rounded-full border border-femine-border-dark/40">
                <Sparkles className="w-3 h-3 text-femine-coral" /> Benvenuto nel mio spazio
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-femine-heading tracking-tight leading-tight">
                Pochi concetti chiave, <br />
                <span className="font-serif italic text-femine-coral">massima efficacia.</span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-femine-text/90 max-w-xl">
              Niente teorie astruse o manuali da centinaia di pagine. Lavoro al tuo fianco per sbloccare ciò che frena la tua evoluzione personale o la crescita del tuo business.
            </p>

            {/* Two Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-3xl bg-white border border-femine-border hover:border-femine-coral/40 transition-colors">
                <div className="w-9 h-9 rounded-full bg-femine-coral-light flex items-center justify-center text-femine-coral mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-femine-heading mb-1">Life Coaching</h3>
                <p className="text-[11px] leading-relaxed text-femine-text/80">
                  Per ritrovare autostima, imparare a gestire le emozioni e ridisegnare un equilibrio quotidiano su misura per te.
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-white border border-femine-border hover:border-femine-coral/40 transition-colors">
                <div className="w-9 h-9 rounded-full bg-femine-berry-light flex items-center justify-center text-femine-berry mb-3">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-femine-heading mb-1">Business Coaching</h3>
                <p className="text-[11px] leading-relaxed text-femine-text/80">
                  Per professionisti e freelance che desiderano pianificare passi di carriera concreti e ottimizzare la propria leadership.
                </p>
              </div>
            </div>

            {/* Quick Scenario Checkmarks */}
            <div className="pt-4 border-t border-femine-border">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-femine-clay font-mono mb-4">
                Ti trovi in una di queste situazioni?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {situations.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-femine-coral/10 flex items-center justify-center text-femine-coral shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-[11px] font-medium text-femine-text/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
