import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Mic2, 
  Play, 
  Pause, 
  Settings, 
  Users, 
  MessageSquare, 
  Clock, 
  Info,
  ChevronDown,
  ExternalLink,
  Zap,
  Target,
  ShieldCheck,
  Leaf
} from 'lucide-react';
import { TRANSCRIPT, SPEAKERS, TranscriptEntry } from './transcriptData';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'transcript' | 'production'>('transcript');
  const [searchQuery, setSearchQuery] = useState('');
  const transcriptRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const speak = (index: number) => {
    if (!synth || index >= TRANSCRIPT.length) {
      setIsPlaying(false);
      setCurrentLineIndex(null);
      return;
    }

    const line = TRANSCRIPT[index];
    const speaker = SPEAKERS[line.speaker];
    const utterance = new SpeechSynthesisUtterance(line.text);
    
    // Attempt to match the "Audio Profile"
    // Rapid Fire = higher rate
    // Vocal Smile = slightly higher pitch
    utterance.rate = speaker?.pace === "Rapid Fire" ? 1.25 : 1.1;
    utterance.pitch = speaker?.style.includes("Vocal Smile") ? 1.15 : 1.0;
    
    // Try to vary voices slightly if multiple are available
    const voices = synth.getVoices();
    if (voices.length > 0) {
      // Very crude simulation of different speakers
      if (line.speaker === "Speaker 1") utterance.voice = voices.find(v => v.name.includes("Male")) || voices[0];
      if (line.speaker === "Speaker 2") utterance.voice = voices.find(v => v.name.includes("Female")) || voices[1] || voices[0];
    }

    utterance.onend = () => {
      if (isPlaying) {
        setCurrentLineIndex(index + 1);
      }
    };

    synth.cancel(); // Stop current speech
    synth.speak(utterance);
  };

  useEffect(() => {
    if (isPlaying && currentLineIndex !== null) {
      speak(currentLineIndex);
    } else if (!isPlaying) {
      synth?.cancel();
    }
  }, [isPlaying, currentLineIndex]);

  const togglePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      if (currentLineIndex === null) setCurrentLineIndex(0);
    } else {
      setIsPlaying(false);
    }
  };

  const filteredTranscript = TRANSCRIPT.filter(line => 
    line.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
    SPEAKERS[line.speaker]?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header / Hero */}
      <header className="relative pt-24 pb-16 px-6 lg:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:block"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="https://picsum.photos/seed/qa-unscripted/800/800" 
                alt="QA Unscripted Cover Art"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-cyan-500 text-black flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                </button>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-cyan-400 font-mono text-sm tracking-widest uppercase"
            >
              <Mic2 size={16} />
              Season 4 • Episode 12
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight leading-none"
            >
              The AI Shift: <br />
              <span className="text-white/40">Rewriting Quality Assurance</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl leading-relaxed"
            >
              How Artificial Intelligence is completely rewriting the job description for QA professionals—from test writers to quality strategists.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button 
                onClick={togglePlay}
                className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-cyan-500 transition-colors"
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                {isPlaying ? 'Pause Episode' : 'Listen Now'}
              </button>
              <div className="flex -space-x-3 items-center">
                {Object.values(SPEAKERS).map((s, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center text-xs font-bold ring-1 ring-white/10"
                    title={s.name}
                  >
                    {s.name.charAt(0)}
                  </div>
                ))}
                <span className="pl-6 text-sm text-gray-500 font-medium">5 voices featured</span>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Controls Bar */}
        <div className="sticky top-4 z-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 shadow-2xl">
          <div className="flex p-1 bg-black/40 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab('transcript')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'transcript' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Transcript
            </button>
            <button
              onClick={() => setActiveTab('production')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'production' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Panel Specs
            </button>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input 
                type="text" 
                placeholder="Search transcript..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder:text-gray-600"
              />
              <MessageSquare size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <button className="p-2 rounded-xl bg-black/40 border border-white/5 text-gray-400 hover:text-white transition-colors">
              <Settings size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content Area */}
          <div ref={transcriptRef} className="space-y-1">
            <AnimatePresence mode="popLayout">
              {activeTab === 'transcript' ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {filteredTranscript.map((entry, index) => {
                    const speaker = SPEAKERS[entry.speaker] || SPEAKERS["Speaker 1"];
                    const isActive = currentLineIndex === index;
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        onClick={() => {
                          setCurrentLineIndex(index);
                          setIsPlaying(true);
                        }}
                        className={`group relative pl-0 sm:pl-32 pb-4 transition-all cursor-pointer rounded-xl p-4 -ml-4 ${isActive ? 'bg-cyan-500/5' : ''}`}
                      >
                        {/* Speaker Indicator (Mobile/Small) */}
                        <div className="flex sm:hidden items-center gap-2 mb-2">
                           <div className={`w-2 h-2 rounded-full bg-${speaker.color}-500`} />
                           <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-cyan-400' : 'text-gray-400'}`}>{speaker.name}</span>
                        </div>

                        {/* Speaker Metadata (Desktop) */}
                        <div className="hidden sm:block absolute left-0 top-6 w-28 text-right pr-6">
                           <div className={`text-xs font-bold uppercase tracking-tighter mb-1 transition-colors ${isActive ? 'text-cyan-400' : `text-${speaker.color}-500`}`}>
                             {speaker.name.split(' ')[1] || speaker.name}
                           </div>
                           <div className={`text-[10px] leading-tight font-mono italic transition-colors ${isActive ? 'text-cyan-600' : 'text-gray-600'}`}>
                             {entry.note}
                           </div>
                        </div>

                        {/* Dialogue Line */}
                        <div className="relative">
                          <div className={`absolute left-[-16px] top-0 bottom-0 w-[1px] hidden sm:block transition-all duration-500 ${isActive ? `bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] h-full` : 'bg-white/5 group-hover:bg-white/20 h-full'}`} />
                          <p className={`text-xl lg:text-2xl leading-relaxed transition-all duration-500 ${isActive ? 'text-white scale-[1.01]' : 'text-gray-300 group-hover:text-white'}`}>
                            {entry.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(SPEAKERS).map(([key, s], i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-${s.color}-500/20 flex items-center justify-center text-${s.color}-400 font-bold text-xl`}>
                            {s.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-lg">{s.name}</h3>
                            <p className="text-sm text-gray-500">{key} • {s.role}</p>
                          </div>
                        </div>
                        <div className="space-y-3 pt-4 border-t border-white/5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500 uppercase font-bold tracking-widest flex items-center gap-2"><Clock size={12}/> Pace</span>
                            <span className="font-mono text-gray-300">{s.pace}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500 uppercase font-bold tracking-widest flex items-center gap-2"><Target size={12}/> Style</span>
                            <span className="font-mono text-gray-300">{s.style}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500 uppercase font-bold tracking-widest flex items-center gap-2"><Users size={12}/> Accent</span>
                            <span className="font-mono text-gray-300">{s.accent}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8 mt-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <ExternalLink size={120} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <Zap className="text-indigo-400" />
                      Director's Note
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-300">
                      <div>
                        <p className="font-bold text-indigo-400 uppercase tracking-widest text-[10px] mb-2">Technical Vibe</p>
                        <p>High-quality recording studio environment. Dynamic microphones with slight room tone. Warm, energetic, and professional pacing.</p>
                      </div>
                      <div>
                        <p className="font-bold text-indigo-400 uppercase tracking-widest text-[10px] mb-2">Interaction Note</p>
                        <p>Rapid-fire news anchor pacing for Speakers 1 & 2. Slightly overlapping dialogue expected in transitions. Enthusiastic tone with "Vocal Smile".</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar / Widgets */}
          <aside className="space-y-8 h-fit lg:sticky lg:top-28">
            {/* Highlights Widget */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Target size={14} className="text-cyan-500" />
                Key Themes
              </h4>
              <div className="space-y-3">
                <ThemeItem icon={<Leaf size={14} className="text-emerald-500" />} label="Sustainability" value="QA goes Green" />
                <ThemeItem icon={<ShieldCheck size={14} className="text-amber-500" />} label="Ethics" value="Bias Audits" />
                <ThemeItem icon={<Zap size={14} className="text-indigo-500" />} label="Efficiency" value="AI Orchestration" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
               <SidebarLink icon={<Clock />} label="Chapter 1: The AI Explosion" time="02:14" />
               <SidebarLink icon={<Clock />} label="Chapter 2: The Human Loop" time="12:45" />
               <SidebarLink icon={<Clock />} label="Chapter 3: Future Roadmap" time="45:20" />
            </div>

            {/* Quote of the Day */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-white/10 italic text-gray-400 relative group overflow-hidden">
              <span className="text-6xl font-serif absolute -top-4 -left-2 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">"</span>
              <p className="relative z-10 text-sm leading-relaxed">
                "The machines are ready to test at scale. The only question left is: Are we ready to teach them what truly matters?"
              </p>
              <footer className="mt-4 text-xs font-bold uppercase tracking-widest text-white/40">— Jamal Reed</footer>
            </div>
          </aside>
        </div>
      </main>

      <footer className="mt-24 border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 opacity-50">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
            QA Unscripted © 2026
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">RSS Feed</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ThemeItem({ icon, label, value }: { icon: ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
      <div className="p-2 rounded-lg bg-black/40">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="text-xs font-medium text-gray-300">{value}</p>
      </div>
    </div>
  );
}

function SidebarLink({ icon, label, time }: { icon: ReactNode, label: string, time: string }) {
  return (
    <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group text-left cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="text-gray-600 group-hover:text-cyan-500 transition-colors">
          {icon}
        </div>
        <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">{label}</span>
      </div>
      <span className="text-[10px] font-mono text-gray-700 group-hover:text-gray-500">{time}</span>
    </button>
  );
}

