/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { Calendar, CheckCircle2, Copy, Edit2, Sparkles, ExternalLink, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface CalBookingProps {
  importedWheelData?: { category: string; value: number }[];
}

export default function CalBooking({ importedWheelData }: CalBookingProps) {
  // Cal.com Link - editable so they can instantly try different accounts
  const [calUsername, setCalUsername] = useState(() => {
    return localStorage.getItem('cal_username') || 'elisabetta-melucci/consulenza-60min';
  });
  const [isEditingCalUrl, setIsEditingCalUrl] = useState(false);
  const [tempCalUsername, setTempCalUsername] = useState(calUsername);
  
  // Traditional booking backup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    modality: 'Online su Google Meet',
    message: ''
  });
  const [bookingType, setBookingType] = useState<'cal' | 'classic'>('cal');
  const [classicSubmitted, setClassicSubmitted] = useState(false);

  useEffect(() => {
    if (importedWheelData && importedWheelData.length > 0) {
      // Formatting Wheel of life values to add to message
      const wheelText = importedWheelData.map(d => `${d.category}: ${d.value}/10`).join('\n');
      setFormData(prev => ({
        ...prev,
        message: `Ho completato la Ruota della Vita sul tuo sito!\nEcco i miei risultati:\n${wheelText}\n\nVorrei approfondire questi aspetti.`
      }));
    }
  }, [importedWheelData]);

  const saveCalUsername = () => {
    const cleaned = tempCalUsername.trim().replace(/^https?:\/\/(www\.)?cal\.com\//, '');
    setCalUsername(cleaned);
    localStorage.setItem('cal_username', cleaned);
    setIsEditingCalUrl(false);
  };

  const handleClassicSubmit = (e: FormEvent) => {
    e.preventDefault();
    setClassicSubmitted(true);
    setTimeout(() => {
      setClassicSubmitted(false);
    }, 6000);
  };

  return (
    <section id="prenota" className="py-20 lg:py-28 bg-femine-bg border-b border-femine-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-femine-coral bg-femine-dark-bg border border-femine-border-dark px-3 py-1 rounded-full uppercase inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Agenda degli incontri
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-femine-heading tracking-tight mt-4 mb-4">
            Prenota la tua <span className="font-serif italic text-femine-coral">consulenza</span>
          </h2>
          <p className="text-sm leading-relaxed text-femine-text opacity-85">
            Scegli il metodo che preferisci. Puoi prenotare autonomamente usando il sistema Cal.com oppure inviarmi una richiesta classica.
          </p>
        </div>

        {/* Wheel Data Notification if imported */}
        {importedWheelData && importedWheelData.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-femine-coral-light border border-femine-border-dark text-femine-text rounded-2xl flex items-center gap-3 max-w-3xl mx-auto shadow-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-femine-coral shrink-0" />
            <span className="text-xs font-semibold">
              <strong>Ruota della Vita importata!</strong> I tuoi punteggi autovalutativi sono stati formattati e pronti per essere condivisi durante la consulenza con Elisabetta. Copia il testo o usa la prenotazione classica.
            </span>
          </motion.div>
        )}

        {/* Booking Tabs Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-femine-dark-bg rounded-full border border-femine-border">
            <button
              onClick={() => setBookingType('cal')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                bookingType === 'cal'
                  ? 'bg-femine-coral text-white shadow-sm'
                  : 'text-femine-text hover:text-femine-coral'
              }`}
            >
              🚀 Calendario Cal.com
            </button>
            <button
              onClick={() => setBookingType('classic')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                bookingType === 'classic'
                  ? 'bg-femine-coral text-white shadow-sm'
                  : 'text-femine-text hover:text-femine-coral'
              }`}
            >
              📝 Richiesta Classica
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="max-w-5xl mx-auto">
          {bookingType === 'cal' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Sidebar: Details/Config */}
              <div className="lg:col-span-4 flex flex-col justify-between p-6 bg-white rounded-3xl border border-femine-border shadow-xs">
                <div>
                  <h3 className="text-base font-bold text-femine-heading flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-femine-coral" /> Consulenza Online 60 min
                  </h3>
                  
                  <div className="space-y-4 text-xs font-medium text-femine-text/80">
                    <p className="leading-relaxed">
                      Scegli giorno e orario direttamente dall'agenda interattiva. L'appuntamento verrà registrato automaticamente e riceverai i dettagli per email e WhatsApp.
                    </p>
                    <div className="flex items-center gap-2.5 p-2.5 bg-femine-bg rounded-xl border border-femine-border">
                      <Mail className="w-4 h-4 text-femine-coral" />
                      <span>Conferma immediata via Mail</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 bg-femine-bg rounded-xl border border-femine-border">
                      <MapPin className="w-4 h-4 text-femine-coral" />
                      <span>Google Meet o in Studio</span>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-femine-border pt-6">
                    <h4 className="text-[10px] font-bold tracking-wider text-femine-text/40 uppercase font-mono mb-2 flex items-center gap-1">
                      Tariffa Consulenza
                    </h4>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold text-[#1D1E2C]">€60</span>
                      <span className="text-xs text-femine-text/40 font-semibold">/ sessione</span>
                    </div>
                    <p className="text-[9px] text-femine-text/40 italic mt-1.5">
                      Primo incontro conoscitivo di valutazione sempre gratuito (30 min).
                    </p>
                  </div>
                </div>

                {/* Cal.com URL configuration tool (extremely useful for end-user on deploy) */}
                <div className="mt-8 border-t border-femine-border pt-6 bg-femine-bg p-4 rounded-2xl border border-femine-border-dark/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-femine-text/50 uppercase font-mono">
                      Integrazione Cal.com
                    </span>
                    <button 
                      onClick={() => {
                        setTempCalUsername(calUsername);
                        setIsEditingCalUrl(!isEditingCalUrl);
                      }}
                      className="text-femine-coral hover:text-femine-coral/80 flex items-center gap-1 text-[11px] font-bold"
                    >
                      <Edit2 className="w-3 h-3" /> Modifica
                    </button>
                  </div>

                  {isEditingCalUrl ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={tempCalUsername}
                        onChange={(e) => setTempCalUsername(e.target.value)}
                        placeholder="nome/consulenza-60"
                        className="w-full text-xs p-2 rounded-lg border border-femine-border bg-white focus:outline-none"
                      />
                      <div className="flex gap-2">
                        <button 
                          onClick={saveCalUsername}
                          className="bg-femine-coral text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-femine-coral/90"
                        >
                          Salva
                        </button>
                        <button 
                          onClick={() => setIsEditingCalUrl(false)}
                          className="bg-femine-dark-bg text-femine-text text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-femine-border-dark/30"
                        >
                          Annulla
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <code className="block text-[10px] font-mono bg-white text-femine-text p-1.5 rounded break-all border border-femine-border">
                        cal.com/{calUsername}
                      </code>
                      <p className="text-[9px] text-femine-text/50 font-medium mt-1 leading-normal">
                        Sostituisci questo link inserendo il tuo profilo reale Cal.com per pubblicarlo funzionante!
                      </p>
                    </div>
                  )}
                </div>

              </div>

              {/* Real Cal.com Embedded Widget / Iframe area */}
              <div className="lg:col-span-8 bg-white rounded-3xl border border-femine-border shadow-xs overflow-hidden min-h-[500px] flex flex-col">
                <div className="bg-femine-coral px-4 py-2.5 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Connessione Sicura cal.com attiva
                  </span>
                  <a 
                    href={`https://cal.com/${calUsername}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1 font-bold text-[11px]"
                  >
                    Apri a schermo intero <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                {/* Embed container */}
                <div className="relative flex-grow min-h-[460px] bg-neutral-50">
                  <iframe
                    src={`https://cal.com/${calUsername}?embed=true`}
                    title="Elisabetta Melucci Cal.com Scheduler"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', minHeight: '460px' }}
                    className="absolute inset-0"
                  />
                </div>
              </div>

            </div>
          ) : (
            // Classic Form Fallback (Simulated Checkout)
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-femine-border shadow-xs max-w-3xl mx-auto">
              <h3 className="text-xl font-light text-femine-heading font-serif italic mb-2">
                Compila la richiesta di prenotazione
              </h3>
              <p className="text-xs text-femine-text opacity-80 mb-8">
                Lasciami i tuoi dati, la modalità che preferisci e scrivi brevemente di cosa desideri parlare. Ti ricontatterò entro 24 ore per accordare giorno e ora.
              </p>

              {classicSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-8 rounded-2xl bg-femine-dark-bg border border-femine-border-dark text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-femine-coral mx-auto mb-4" />
                  <h4 className="text-base font-bold text-femine-heading mb-2">Procediamo al pagamento simulato</h4>
                  <p className="text-xs text-femine-text opacity-90 leading-relaxed max-w-md mx-auto">
                    Invia la tua richiesta a Elisabetta! I tuoi dati sono pronti: se configuri Stripe, SumUp o PayPal questo tasto aprirà la pagina di checkout. Riceverai una mail automatica di conferma.
                  </p>
                  <button 
                    onClick={() => setClassicSubmitted(false)}
                    className="mt-6 text-xs text-femine-coral hover:text-femine-coral/80 font-bold underline block mx-auto cursor-pointer"
                  >
                    Torna al modulo di contatto
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleClassicSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-femine-clay uppercase tracking-wider">Nome e cognome</label>
                      <input
                        type="text"
                        required
                        placeholder="Elisabetta Rossi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-xl border border-femine-border bg-femine-bg focus:bg-white focus:outline-none focus:ring-1 focus:ring-femine-coral/20 focus:border-femine-coral"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-femine-clay uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="nome@indirizzo.it"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-xl border border-femine-border bg-femine-bg focus:bg-white focus:outline-none focus:ring-1 focus:ring-femine-coral/20 focus:border-femine-coral"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-femine-clay uppercase tracking-wider">Telefono</label>
                      <input
                        type="tel"
                        placeholder="+39 328 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-xl border border-femine-border bg-femine-bg focus:bg-white focus:outline-none focus:ring-1 focus:ring-femine-coral/20 focus:border-femine-coral"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-femine-clay uppercase tracking-wider">Modalità preferita</label>
                      <select
                        value={formData.modality}
                        onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-xl border border-femine-border bg-femine-bg focus:bg-white focus:outline-none focus:ring-1 focus:ring-femine-coral/20 focus:border-femine-coral"
                      >
                        <option>Online su Google Meet</option>
                        <option>In studio - Via Saint Denis, Sesto San Giovanni</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold text-femine-clay uppercase tracking-wider">Di cosa vuoi parlare?</label>
                      {importedWheelData && importedWheelData.length > 0 && (
                        <span className="text-[9px] font-bold text-femine-coral bg-femine-coral-light border border-femine-border-dark px-2.5 py-0.5 rounded">
                          ✓ Ruota della vita allegata
                        </span>
                      )}
                    </div>
                    <textarea
                      rows={5}
                      required
                      placeholder="Scrivi qui due righe raccontandomi di te e delle tue mete..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs p-3.5 rounded-xl border border-femine-border bg-femine-bg focus:bg-white focus:outline-none focus:ring-1 focus:ring-femine-coral/20 focus:border-femine-coral font-sans"
                    />
                  </div>

                  <div className="p-4 bg-femine-bg rounded-2xl border border-femine-border flex items-center justify-between font-bold text-xs text-femine-text">
                    <span>Consulenza online (60 min)</span>
                    <span className="text-femine-coral">€60</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-sm font-semibold uppercase tracking-widest text-white bg-femine-coral hover:bg-femine-coral/95 active:scale-95 transition-all text-center shadow-xs cursor-pointer"
                  >
                    Procedi alla richiesta
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
