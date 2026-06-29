/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { WheelCategory } from '../types';
import { 
  Briefcase, 
  Coins, 
  HeartPulse, 
  Users, 
  Heart, 
  Compass, 
  Smile, 
  Home, 
  Sparkles, 
  HelpCircle,
  TrendingUp,
  Info
} from 'lucide-react';

const INITIAL_CATEGORIES: WheelCategory[] = [
  { id: 'lavoro', name: 'Lavoro & Carriera', icon: 'Briefcase', description: 'Soddisfazione lavorativa, crescita, ambizione, obiettivi di business.', value: 5, color: '#7E1A35' },
  { id: 'finanze', name: 'Finanze & Risparmio', icon: 'Coins', description: 'Stabilità finanziaria, gestione delle spese, investimenti, sicurezza.', value: 5, color: '#C5A199' },
  { id: 'salute', name: 'Salute & Benessere', icon: 'HeartPulse', description: 'Stato di salute fisica e mentale, alimentazione, sonno, sport.', value: 6, color: '#DE7E7B' },
  { id: 'relazioni', name: 'Relazioni & Famiglia', icon: 'Users', description: 'Qualità dei rapporti familiari, amicizie, sostegno reciproco.', value: 6, color: '#20130F' },
  { id: 'amore', name: 'Amore & Coppia', icon: 'Heart', description: 'Sintonia, complicità romantica, espressione dei sentimenti.', value: 5, color: '#DE7E7B' },
  { id: 'crescita', name: 'Crescita Personale', icon: 'Compass', description: 'Apprendimento, spiritualità, consapevolezza di sé, autostima.', value: 7, color: '#7E1A35' },
  { id: 'tempo', name: 'Tempo Libero & Svago', icon: 'Smile', description: 'Hobby, riposo, viaggi, fare ciò che ti ricarica davvero.', value: 5, color: '#C5A199' },
  { id: 'ambiente', name: 'Ambiente & Casa', icon: 'Home', description: 'L\'armonia dello spazio in cui vivi, ordine, comfort, città.', value: 6, color: '#8C5966' },
];

const categoryIcons: { [key: string]: any } = {
  Briefcase,
  Coins,
  HeartPulse,
  Users,
  Heart,
  Compass,
  Smile,
  Home,
};

export default function WheelOfLifeGame({ onApplyResults }: { onApplyResults: (values: { category: string, value: number }[]) => void }) {
  const [categories, setCategories] = useState<WheelCategory[]>(INITIAL_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState<string>('lavoro');
  const [showTutorial, setShowTutorial] = useState(true);

  const handleValueChange = (id: string, newValue: number) => {
    setCategories(prev => prev.map(cat => cat.id === id ? { ...cat, value: Math.max(1, Math.min(10, newValue)) } : cat));
  };

  const activeCategory = useMemo(() => {
    return categories.find(c => c.id === selectedCategory) || categories[0];
  }, [categories, selectedCategory]);

  // Compute stats for dynamic coaching assessment
  const stats = useMemo(() => {
    let sorted = [...categories].sort((a, b) => a.value - b.value);
    const lowest = sorted[0];
    const highest = sorted[categories.length - 1];
    const average = parseFloat((categories.reduce((acc, curr) => acc + curr.value, 0) / categories.length).toFixed(1));
    
    // Unbalance measurement (standard deviation or simple stretch)
    const stretch = highest.value - lowest.value;
    
    return { lowest, highest, average, stretch };
  }, [categories]);

  // Generate customized coaching insight in modern Italian
  const coachingInsight = useMemo(() => {
    const { lowest, highest, average, stretch } = stats;
    let title = "";
    let mainBody = "";
    let actionTip = "";

    if (average >= 8) {
      title = "Ottimo livello complessivo, ma non abbassare la guardia!";
      mainBody = "La tua ruota è eccezionalmente ampia e bilanciata. Percepisci un profondo senso di realizzazione. Il pericolo sottile in questo scenario è la stasi auto-compiacente o il sovraccarico invisibile per mantenere standard così alti ovunque.";
      actionTip = "Nelle sessioni con me, esploreremo come blindare questi equilibri e prevenire il calo d'energia indotto dal perfezionismo.";
    } else if (stretch > 4) {
      title = `Sintonia asimmetrica: Focus su "${lowest.name}"`;
      mainBody = `Notiamo una forte differenza (ben ${stretch} punti di scarto) tra l'area in cui brilli ("${highest.name}", voto ${highest.value}) e l'area di maggiore sofferenza ("${lowest.name}", voto ${lowest.value}). Questa asimmetria rende la marcia difficoltosa: far rotolare una ruota sbilanciata richiede il triplo dello sforzo interno.`;
      actionTip = `Un percorso mirato partirà dall'onorare le tue risorse in ${highest.name} per estrarre formule d'azione pratiche da applicare a ${lowest.name}.`;
    } else {
      title = `Un quadro bilanciato, pronto per l'espansione`;
      mainBody = `Le tue aree di vita gravitano armoniosamente attorno a un livello medio di ${average}/10. Non ci sono crisi vistose o abissi critici, ma c'è una diffusa sensazione di "galleggiamento" o mancanza di una spinta vitale nitida. Le aree mantengono un andamento parallelo, forse per un eccesso di cautela o per la paura di osare.`;
      actionTip = `Lavoreremo su come scardinare questa zona di comfort discreta, individuando l'area leva per alzare lo standard complessivo con coraggio.`;
    }

    // Specific focus based on the lowest area
    let specificFeedback = "";
    switch (lowest.id) {
      case 'lavoro':
        specificFeedback = "Il lavoro si trova in una fase di transizione o pesante insoddisfazione. Quando la carriera è in blocco, toglie sicurezza anche alle scelte private.";
        break;
      case 'finanze':
        specificFeedback = "La percezione sulle finanze riflette instabilità o un rapporto d'ansia con il denaro. Liberare questa tensione dona chiarezza mentale.";
        break;
      case 'salute':
        specificFeedback = "Salute e vitalità sono la batteria del tuo motore. Se non curi i tuoi confini emotivi e i tuoi ritmi fisici, crollerà anche la produttività.";
        break;
      case 'relazioni':
        specificFeedback = "Rapporti tesi o solitudine emotiva assorbono enormi risorse neuro-cognitive. Trovare armonia sociale riattiva l'autostima.";
        break;
      case 'amore':
        specificFeedback = "Amare ed essere amati in modo nutriente è vitale. Se qui c'è insoddisfazione o solitudine repressa, la motivazione ne risente pesantemente.";
        break;
      case 'crescita':
        specificFeedback = "La crescita personale è la radice della fiducia in sé. Se non impari nulla di nuovo e la mente si sente sterile, un senso di vuoto prende il sopravvento.";
        break;
      case 'tempo':
        specificFeedback = "La privazione programmata del riposo e del divertimento è l'anticamera del burnout. Il gioco e lo svago sono doveri produttivi reali!";
        break;
      case 'ambiente':
        specificFeedback = "L'ambiente circostante impatta costantemente la nostra attenzione. Una casa disordinata o uno spazio opprimente amplificano la fatica interiore.";
        break;
    }

    return { title, mainBody, specificFeedback, actionTip };
  }, [stats]);

  // Trigonometric drawing of the SVG Wheel
  const svgElements = useMemo(() => {
    const size = 320;
    const center = size / 2;
    const maxRadius = size / 2 - 20;
    const totalSegments = categories.length;
    const angleStep = (2 * Math.PI) / totalSegments;
    const offsetRotation = -Math.PI / 2; // start from top

    // Background circle borders (guides for 2, 4, 6, 8, 10 levels)
    const backgroundRings = [2, 4, 6, 8, 10].map(level => {
      const radius = (level / 10) * maxRadius;
      return (
        <circle
          key={level}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#e5e5e1"
          strokeWidth={1}
          strokeDasharray={level < 10 ? "2,3" : "none"}
        />
      );
    });

    // Radial axis lines
    const axisLines = categories.map((cat, idx) => {
      const angle = idx * angleStep + offsetRotation;
      const x = center + maxRadius * Math.cos(angle);
      const y = center + maxRadius * Math.sin(angle);
      return (
        <line
          key={`axis-${cat.id}`}
          x1={center}
          y1={center}
          x2={x}
          y2={y}
          stroke="#e5e5e1"
          strokeWidth={1.5}
        />
      );
    });

    // Dynamic Fill Path of the Wheel
    const points: string[] = [];
    categories.forEach((cat, idx) => {
      const angle = idx * angleStep + offsetRotation;
      const currentRadius = (cat.value / 10) * maxRadius;
      const x = center + currentRadius * Math.cos(angle);
      const y = center + currentRadius * Math.sin(angle);
      points.push(`${x},${y}`);
    });

    const polygonPoints = points.join(' ');

    // Render category visual anchors/dots
    const activeIndicators = categories.map((cat, idx) => {
      const angle = idx * angleStep + offsetRotation;
      const currentRadius = (cat.value / 10) * maxRadius;
      const x = center + currentRadius * Math.cos(angle);
      const y = center + currentRadius * Math.sin(angle);
      const isSelected = cat.id === selectedCategory;

      return (
        <g 
          key={`indicator-${cat.id}`}
          className="cursor-pointer"
          onClick={() => setSelectedCategory(cat.id)}
        >
          <circle
            cx={x}
            cy={y}
            r={isSelected ? 7 : 5}
            fill={cat.color}
            stroke="#ffffff"
            strokeWidth={1.5}
            className="transition-all duration-300 hover:scale-125 hover:stroke-pink-100"
          />
          {isSelected && (
            <circle
              cx={x}
              cy={y}
              r={12}
              fill="none"
              stroke={cat.color}
              strokeWidth={1.5}
              className="animate-ping"
              style={{ strokeOpacity: 0.4 }}
            />
          )}
        </g>
      );
    });

    // Labels positioned slightly beyond max radius
    const labels = categories.map((cat, idx) => {
      const angle = idx * angleStep + offsetRotation;
      const labelRadius = maxRadius + 18;
      const x = center + labelRadius * Math.cos(angle);
      const y = center + labelRadius * Math.sin(angle);
      const isSelected = cat.id === selectedCategory;

      // Adjust text anchoring based on coordinates
      let textAnchor = "middle";
      if (Math.abs(Math.cos(angle)) > 0.1) {
        textAnchor = Math.cos(angle) > 0 ? "start" : "end";
      }

      return (
        <text
          key={`label-${cat.id}`}
          x={x}
          y={y + 4} // small vertical correction
          textAnchor={textAnchor}
          fill={isSelected ? '#DE7E7B' : '#423835'}
          className="text-[10px] font-bold tracking-tight select-none cursor-pointer transition-colors"
          style={{ 
            fontFamily: 'Plus Jakarta Sans', 
            fontWeight: isSelected ? 800 : 500,
          }}
          onClick={() => setSelectedCategory(cat.id)}
        >
          {cat.name.split(' & ')[0]} ({cat.value})
        </text>
      );
    });

    return { backgroundRings, axisLines, polygonPoints, activeIndicators, labels, center };
  }, [categories, selectedCategory]);

  const handleApplyClick = () => {
    // Collect data and run up to main state
    const payload = categories.map(c => ({ category: c.name, value: c.value }));
    onApplyResults(payload);
    
    // Smooth scroll down to the prenotazione cal.com section
    const bookingSection = document.getElementById('prenota');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ActiveIcon = categoryIcons[activeCategory.icon];

  return (
    <section id="giochino" className="py-20 lg:py-24 bg-femine-bg border-y border-femine-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-femine-coral bg-femine-coral-light border border-femine-border-dark px-3 py-1 rounded-full uppercase inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> Test Autovalutativo e Gioco
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-femine-heading tracking-tight mt-4 mb-4">
            Trova il tuo Equilibrio: <span className="font-serif italic text-femine-coral">La Ruota della Vita</span>
          </h2>
          <p className="text-sm leading-relaxed text-femine-text/80">
            Gioca e misura quanto sono allineate le tue aree vitali. Usa gli slider per impostare il tuo voto da 1 a 10 per ciascuna area e scopri l'andamento del tuo veicolo esistenziale.
          </p>
        </div>

        {/* Tutorial Badge */}
        {showTutorial && (
          <div className="bg-femine-dark-bg border border-femine-border-dark rounded-2xl p-4 mb-8 flex items-start gap-3 max-w-2xl mx-auto">
            <Info className="w-5 h-5 text-femine-coral shrink-0 mt-0.5" />
            <div className="text-xs text-femine-text opacity-95 leading-normal">
              <strong>Come funziona il gioco:</strong> Seleziona una voce dall'elenco o clicca sul grafico. Usa la barra di scorrimento per votare il tuo livello attuale di soddisfazione. Al termine, l'algoritmo calcolerà i tuoi squilibri ed Elisabetta sarà pronta a commentarli nel tuo primo incontro!
              <button onClick={() => setShowTutorial(false)} className="block mt-2 font-bold underline text-femine-coral hover:text-femine-coral/80">
                Nascondi questo avviso
              </button>
            </div>
          </div>
        )}

        {/* Game Main Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Interactive Wheel Graphic Area */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-femine-border shadow-xs flex flex-col items-center justify-center">
            <h3 className="text-xs font-bold tracking-wider text-femine-text/40 uppercase font-mono mb-4 text-center">
              Il Tuo Grafico Dinamico
            </h3>
            
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              <svg 
                viewBox="0 0 320 320" 
                className="w-full h-full text-femine-coral overflow-visible"
              >
                {/* Radial sectors outlines */}
                {svgElements.backgroundRings}
                {svgElements.axisLines}
                
                {/* Dynamic Polygon area */}
                <polygon
                  points={svgElements.polygonPoints}
                  fill="rgba(222, 126, 123, 0.15)"
                  stroke="#DE7E7B"
                  strokeWidth={2}
                  className="transition-all duration-300"
                />
                
                {/* Indicators dots */}
                {svgElements.activeIndicators}

                {/* Level Labels */}
                {svgElements.labels}
              </svg>
            </div>

            {/* Scale guide */}
            <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-[10px] font-bold text-femine-text/50 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A199]" /> 1-4 INSODDISFATTO
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DE7E7B]" /> 5-7 NEUTRO/BUONO
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7E1A35]" /> 8-10 ECCELLENTE
              </span>
            </div>
          </div>

          {/* Interactive sliders & Category Info */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Horizontal tab selector for quick tapping */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
              {categories.map((cat) => {
                const CatIcon = categoryIcons[cat.icon];
                const isSelected = cat.id === selectedCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex flex-col items-center gap-1 p-2 rounded-xl border text-center transition-all ${
                      isSelected 
                        ? 'bg-femine-berry text-white border-transparent shadow-xs' 
                        : 'bg-white text-femine-text hover:text-femine-coral border-femine-border hover:bg-femine-dark-bg/50'
                    }`}
                  >
                    <CatIcon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-femine-text/60'}`} />
                    <span className="text-[9px] font-extrabold truncate w-full tracking-tighter">
                      {cat.name.split(' & ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Slider Panel Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-femine-border shadow-xs">
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="p-3 rounded-2xl text-white shrink-0 shadow-xs"
                  style={{ backgroundColor: activeCategory.color }}
                >
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-femine-heading leading-tight">
                    {activeCategory.name}
                  </h4>
                  <p className="text-xs text-femine-text/60 font-semibold mt-0.5">
                    Selezionato • Livello di soddisfazione: {activeCategory.value}/10
                  </p>
                </div>
              </div>

              <p className="text-xs text-femine-text/80 leading-relaxed min-h-[48px] mb-6">
                {activeCategory.description}
              </p>

              {/* Slider Control */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-femine-text/40">
                  <span>1 - Molto basso</span>
                  <span 
                    className="text-sm px-3 py-1 rounded-full text-white font-sans" 
                    style={{ backgroundColor: activeCategory.color }}
                  >
                    {activeCategory.value}
                  </span>
                  <span>10 - Massimo</span>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={activeCategory.value}
                  onChange={(e) => handleValueChange(activeCategory.id, parseInt(e.target.value))}
                  className="w-full h-2.5 rounded-full appearance-none cursor-pointer border border-[#fff] focus:outline-none accent-femine-coral"
                  style={{
                    background: `linear-gradient(to right, ${activeCategory.color} 0%, ${activeCategory.color} ${((activeCategory.value - 1) / 9) * 100}%, #f3f4f6 ${((activeCategory.value - 1) / 9) * 100}%, #f3f4f6 100%)`
                  }}
                />
              </div>
            </div>

            {/* Real-time Dynamic Diagnostic Box */}
            <div className="bg-femine-berry text-white rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
              <div className="absolute top-1/2 -right-10 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-femine-coral text-white">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase font-mono text-femine-coral-light">
                    Analisi della Ruota (Real-time Live)
                  </span>
                </div>

                <div className="border-b border-white/15 pb-4">
                  <h4 className="text-base sm:text-lg font-light font-serif italic text-white tracking-tight mb-2">
                    {coachingInsight.title}
                  </h4>
                  <p className="text-xs text-[#FAF9F6] opacity-90 leading-relaxed">
                    {coachingInsight.mainBody}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-femine-clay font-bold uppercase tracking-wider block text-[9px] font-mono mb-1">
                      Punto di Attenzione
                    </span>
                    <p className="text-[#FAF9F6]/95 leading-relaxed text-xs">
                      {coachingInsight.specificFeedback}
                    </p>
                  </div>
                  <div>
                    <span className="text-femine-clay font-bold uppercase tracking-wider block text-[9px] font-mono mb-1">
                      Consiglio del Coach
                    </span>
                    <p className="text-[#FAF9F6]/95 leading-relaxed text-xs">
                      {coachingInsight.actionTip}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono text-femine-clay font-bold">
                    Voto Medio: {stats.average}/10 • Grado asimmetria: {stats.stretch}pt
                  </span>
                  
                  <button
                    onClick={handleApplyClick}
                    className="sm:ml-auto w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-femine-coral hover:bg-femine-coral/90 border border-transparent hover:shadow-md active:scale-95 transition-all text-center max-w-[280px] cursor-pointer"
                  >
                    Usa questa Ruota
                    <Sparkles className="w-3.5 h-3.5 ml-1.5 text-white animate-pulse" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
