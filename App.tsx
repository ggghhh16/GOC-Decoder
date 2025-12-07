import React from 'react';
import { Shield, Globe, Activity, Terminal } from 'lucide-react';
import DecoderModule from './components/DecoderModule';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-goc-200 selection:text-goc-900 pb-20">
      
      {/* Top Navigation Bar / Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-goc-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-goc-50 rounded-lg border border-goc-200">
              <Shield className="w-6 h-6 text-goc-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800 tracking-tight leading-none">
                GOC <span className="text-goc-600">TERMINAL</span>
              </h1>
              <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                Global Occult Coalition
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-goc-500" />
              <span>SYSTEM: ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3 text-goc-500" />
              <span>NET: SECURE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Title Section */}
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goc-50 border border-goc-200 mb-4">
                <Terminal className="w-3 h-3 text-goc-600" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-goc-700">Thaumaturgy Division</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              全球超自然联盟奇术终端解码器
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Advanced linguistic decryption interface for Level 3 personnel. Enter encrypted Caesar cipher text segments below to decrypt thaumaturgic signatures.
            </p>
        </div>

        {/* Decoder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <DecoderModule id={1} label="ALPHA STREAM" />
            <DecoderModule id={2} label="BETA STREAM" />
            <DecoderModule id={3} label="GAMMA STREAM" />
        </div>

        {/* Footer/Status */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-400 font-mono">
                RESTRICTED ACCESS // GOC-TERMINAL-V4.2 // CLEARANCE REQUIRED
            </p>
        </div>
      </main>

    </div>
  );
};

export default App;
