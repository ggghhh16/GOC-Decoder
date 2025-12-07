import React, { useState, useEffect } from 'react';
import { caesarDecrypt } from '../utils/cipher';
import { Lock, Unlock, RefreshCw } from 'lucide-react';

interface DecoderModuleProps {
  id: number;
  label: string;
}

const DecoderModule: React.FC<DecoderModuleProps> = ({ id, label }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [shift, setShift] = useState(3); // Default to 3 as requested

  useEffect(() => {
    setOutput(caesarDecrypt(input, shift));
  }, [input, shift]);

  return (
    <div className="flex flex-col h-full bg-white border border-goc-200 shadow-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-goc-400">
      {/* Module Header */}
      <div className="bg-goc-50 border-b border-goc-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-goc-500 animate-pulse"></div>
          <span className="text-xs font-bold tracking-widest text-goc-800 uppercase font-mono">
            {label} :: UNIT-{String(id).padStart(2, '0')}
          </span>
        </div>
        <Lock className="w-4 h-4 text-goc-400" />
      </div>

      {/* Control Panel (Shift/Key) */}
      <div className="px-6 py-4 border-b border-slate-100 bg-white">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Decryption Key (Shift)
          </label>
          <span className="font-mono text-sm font-bold text-goc-600 bg-goc-50 px-2 py-0.5 rounded border border-goc-100">
            {shift}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="25"
          value={shift}
          onChange={(e) => setShift(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-goc-600 focus:outline-none focus:ring-2 focus:ring-goc-300"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
          <span>0</span>
          <span>13</span>
          <span>25</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="flex-1 p-4 flex flex-col space-y-4">
        <div className="flex-1 flex flex-col">
          <label className="text-xs text-slate-400 font-mono mb-1 uppercase flex items-center gap-1">
             Encrypted Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ENTER ENCRYPTED DATA..."
            className="flex-1 w-full p-3 bg-slate-50 border border-slate-200 rounded text-sm font-mono text-slate-700 focus:outline-none focus:border-goc-500 focus:ring-1 focus:ring-goc-500 transition-colors resize-none placeholder:text-slate-300 min-h-[120px]"
          />
        </div>

        {/* Divider/Process Icon */}
        <div className="flex justify-center -my-2 z-10">
            <div className="bg-white p-1 rounded-full border border-goc-100 text-goc-400">
                <RefreshCw className="w-4 h-4" />
            </div>
        </div>

        {/* Output Area */}
        <div className="flex-1 flex flex-col">
          <label className="text-xs text-goc-600 font-mono mb-1 uppercase flex items-center gap-1 font-bold">
            <Unlock className="w-3 h-3" />
            Decoded Payload
          </label>
          <div className="flex-1 w-full p-3 bg-goc-50/50 border border-goc-200 rounded text-sm font-mono text-goc-900 min-h-[120px] overflow-auto whitespace-pre-wrap break-all relative group">
             {output || <span className="text-goc-300/50 italic select-none">WAITING FOR INPUT...</span>}
             {output && (
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="h-1.5 w-1.5 rounded-full bg-goc-500 animate-ping"></div>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecoderModule;