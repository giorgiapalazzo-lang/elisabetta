/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import coachImg from '../assets/images/coach_elisabetta_1781968496890.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative py-12 lg:py-20 overflow-hidden bg-femine-bg">
      {/* Curved background or decorative blobs reminiscent of the mockup */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[800px] bg-femine-dark-bg rounded-bl-[12rem] -z-10 opacity-70" />
      <div className="absolute -top-12 left-10 w-40 h-40 bg-femine-coral-light/30 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Streamlined Copy & Star Accents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Elegant Retro Stars */}
            <div className="flex items-center gap-1.5 text-femine-coral mb-4">
              <span className="text-xl">✦</span>
              <span className="text-sm">✦</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-femine-clay ml-1">
                Elisabetta Melucci • Coaching Pratico
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-femine-heading tracking-tight leading-[1.1] mb-6">
              La tua personalità <br />
              è ciò che ti dà <br />
              <span className="font-serif italic text-femine-coral font-normal">
                carattere.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-femine-text/90 font-normal leading-relaxed max-w-lg mb-8">
              Riscopri direzione, chiarezza e fiducia. Un percorso di coaching concreto, senza fuffa: andiamo dritti ai tuoi veri obiettivi con strumenti reali.
            </p>

            {/* Buttons styled like the soft terracotta-coral pills */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#prenota"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-femine-coral hover:bg-femine-coral/90 transition-all text-center shadow-md shadow-femine-coral/15 active:scale-95"
              >
                Inizia Ora
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </a>
              <a
                href="https://wa.me/393288278142"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-femine-text bg-white border border-femine-border-dark/60 hover:bg-femine-dark-bg transition-all text-center shadow-sm active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-2 text-emerald-600 fill-emerald-100" />
                WhatsApp
              </a>
            </div>

            {/* Micro details for credibility without clutter */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] text-femine-clay font-bold tracking-wider uppercase font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-femine-coral" />
                Online & In Studio
              </span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span>Sesto San Giovanni</span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span className="text-femine-berry bg-femine-berry-light px-2.5 py-0.5 rounded-full font-sans tracking-wide">
                1° Incontro Gratuito
              </span>
            </div>
          </motion.div>

          {/* Right Column: Stunning Femine-Styled Photo Frame with tape & circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            {/* The main decorative pink container shape from the mockup */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[4/5] bg-femine-coral-light rounded-[3.5rem] flex items-center justify-center p-5 shadow-sm">
              
              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white shadow-md">
                <img
                  src={coachImg}
                  alt="Elisabetta Melucci Life & Business Coach"
                  className="w-full h-full object-cover select-none object-top hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vintage Tape Overlay on bottom center */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-5 py-1 bg-white/40 backdrop-blur-xs text-[10px] font-mono tracking-wider text-femine-text/80 uppercase shadow-xs rotate-[-1deg] border border-white/20">
                  Elisabetta Melucci
                </div>

                {/* Overlapping small glass text pill at bottom */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-femine-border shadow-xs">
                  <p className="text-[11px] leading-relaxed text-femine-text font-serif italic text-center">
                    "Abita il tuo cambiamento con coraggio"
                  </p>
                </div>
              </div>

              {/* Sparkle decorative element on the upper-left */}
              <div className="absolute -top-4 -left-4 text-femine-coral flex gap-1 select-none animate-pulse-soft">
                <span className="text-2xl font-serif">✦</span>
                <span className="text-lg font-serif">✦</span>
              </div>

              {/* Three decorative circular page-indicator dots on the right, exactly as in the mockup */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-femine-coral/40" />
                <div className="w-3.5 h-3.5 rounded-full bg-femine-coral" />
                <div className="w-3.5 h-3.5 rounded-full bg-femine-berry" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
