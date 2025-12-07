import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';

// --- Types ---
interface DataPoint {
  x: number;
  y: number;
  cluster?: number;
}

// --- Growth Chart ---
const growthData = [
  { year: '2016', capabilities: 10, compute: 15 },
  { year: '2017', capabilities: 18, compute: 25 },
  { year: '2018', capabilities: 25, compute: 45 },
  { year: '2019', capabilities: 35, compute: 80 },
  { year: '2020', capabilities: 55, compute: 150 },
  { year: '2021', capabilities: 85, compute: 300 },
  { year: '2022', capabilities: 140, compute: 600 },
  { year: '2023', capabilities: 210, compute: 1500 },
  { year: '2024', capabilities: 320, compute: 5000 },
];

export const ExponentialGrowthChart: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-2xl h-full">
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
        The Compute Explosion
      </h3>
      <p className="text-slate-400 text-xs mb-6">
        Correlation between training compute (FLOPS) and model capabilities (MMLU benchmark proxy). 
        Note the exponential curve post-2020.
      </p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={growthData}>
            <defs>
              <linearGradient id="colorCompute" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
            <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', color: '#f8fafc', borderRadius: '8px' }}
            />
            <Area type="monotone" dataKey="compute" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorCompute)" name="Training Compute" />
            <Area type="monotone" dataKey="capabilities" stroke="#06b6d4" fillOpacity={1} fill="url(#colorCap)" name="Model Capabilities" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Neural Network Animation ---
export const NeuralNetworkVisual: React.FC = () => {
    return (
        <div className="relative h-72 w-full bg-slate-950/50 rounded-2xl overflow-hidden border border-white/5 shadow-inner flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.15),_transparent_70%)]"></div>
            
            {/* Network Structure */}
            <div className="flex justify-between w-full max-w-lg z-10 relative">
                
                {/* Input Layer */}
                <div className="flex flex-col gap-6 justify-center">
                    {['x₁', 'x₂', 'x₃'].map((label, i) => (
                        <div key={i} className="group relative">
                            <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center text-xs font-mono text-cyan-200 z-20 relative transition-transform hover:scale-110">
                                {label}
                            </div>
                            <div className="absolute top-1/2 -right-4 w-4 h-0.5 bg-cyan-500/50"></div>
                        </div>
                    ))}
                    <div className="absolute -bottom-8 left-2 text-xs font-bold text-cyan-500 uppercase tracking-widest">Input</div>
                </div>

                {/* Hidden Layers */}
                <div className="flex flex-col gap-3 justify-center">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-900 border-2 border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] animate-pulse-slow relative z-20"></div>
                    ))}
                     <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-violet-500 uppercase tracking-widest whitespace-nowrap">Hidden Layer</div>
                </div>

                {/* Output Layer */}
                <div className="flex flex-col gap-8 justify-center">
                    {['y₁', 'y₂'].map((label, i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-slate-900 border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] flex items-center justify-center text-xs font-mono text-pink-200 z-20 relative transition-transform hover:scale-110">
                           {label}
                        </div>
                    ))}
                     <div className="absolute -bottom-8 right-2 text-xs font-bold text-pink-500 uppercase tracking-widest">Output</div>
                </div>
            </div>

            {/* SVG Connections with Animated Data Flow */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.2}} />
                        <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0.2}} />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                
                {/* Simulated connections - simplified for visual impact */}
                {[20, 50, 80].map((y1, i) => (
                    [25, 42, 58, 75].map((y2, j) => (
                        <line key={`${i}-${j}`} x1="18%" y1={`${y1}%`} x2="50%" y2={`${y2}%`} stroke="url(#grad1)" strokeWidth="1" />
                    ))
                ))}
                 {[25, 42, 58, 75].map((y1, i) => (
                    [35, 65].map((y2, j) => (
                        <line key={`h-${i}-${j}`} x1="50%" y1={`${y1}%`} x2="82%" y2={`${y2}%`} stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1" />
                    ))
                ))}

                {/* Data Packets Animation */}
                {[0, 1, 2].map(i => (
                    <circle key={i} r="3" fill="#fff" filter="url(#glow)">
                        <animateMotion 
                            dur={`${1.5 + i * 0.5}s`} 
                            repeatCount="indefinite"
                            path="M 100 70 L 300 100 L 500 80" /* Simplified path approximation for demo */
                            calcMode="linear"
                        />
                         <animate attributeName="opacity" values="0;1;0" dur={`${1.5 + i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                ))}
            </svg>
        </div>
    )
}

// --- Convolution Visualizer ---
export const ConvolutionVisual: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row gap-8 items-center justify-center">
      
      {/* Input Matrix */}
      <div className="flex flex-col items-center">
        <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase">Input Image (Pixels)</h4>
        <div className="grid grid-cols-5 gap-1 p-2 bg-slate-900 rounded-lg border border-slate-700 relative">
           {/* The scanning window */}
           <div className="absolute w-[3.2rem] h-[3.2rem] border-2 border-yellow-400 rounded-md shadow-[0_0_10px_rgba(250,204,21,0.5)] animate-[scan_4s_ease-in-out_infinite] z-10 pointer-events-none top-1 left-1"></div>
           
           {Array.from({length: 25}).map((_, i) => (
             <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-[8px] font-mono 
               ${[0,1,2,5,6,7,10,11,12].includes(i) ? 'bg-cyan-900/40 text-cyan-300' : 'bg-slate-800 text-slate-600'}
             `}>
               {Math.floor(Math.random() * 9)}
             </div>
           ))}
        </div>
      </div>

      <div className="text-2xl text-slate-500">→</div>

      {/* Filter / Kernel */}
      <div className="flex flex-col items-center">
        <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase">Kernel / Filter</h4>
        <div className="grid grid-cols-3 gap-1 p-2 bg-slate-900 rounded-lg border border-yellow-500/30">
           {[1,0,1,0,1,0,1,0,1].map((v, i) => (
             <div key={i} className="w-6 h-6 bg-yellow-900/20 text-yellow-500 border border-yellow-500/20 rounded flex items-center justify-center text-[8px] font-bold">
               {v}
             </div>
           ))}
        </div>
        <div className="mt-2 text-[10px] text-slate-400 max-w-[100px] text-center">Detects Edges/Features</div>
      </div>

      <div className="text-2xl text-slate-500">=</div>

      {/* Feature Map */}
      <div className="flex flex-col items-center">
        <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase">Feature Map</h4>
        <div className="grid grid-cols-3 gap-1 p-2 bg-slate-900 rounded-lg border border-slate-700">
           {Array.from({length: 9}).map((_, i) => (
             <div key={i} className="w-8 h-8 bg-indigo-900/30 border border-indigo-500/30 rounded flex items-center justify-center text-[10px] text-indigo-300 animate-pulse">
                {Math.floor(Math.random() * 5)}
             </div>
           ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(2rem, 0); }
          50% { transform: translate(0, 2rem); }
          75% { transform: translate(2rem, 2rem); }
        }
      `}</style>
    </div>
  )
}

// --- Confusion Matrix Visual ---
export const ConfusionMatrix: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-2xl w-full">
      <h3 className="text-lg font-bold text-white mb-4">The Confusion Matrix</h3>
      <div className="grid grid-cols-[auto_1fr_1fr] gap-4">
        
        <div className="flex flex-col justify-center gap-12 font-bold text-slate-400 text-xs -rotate-90">
           <span>ACTUAL FALSE</span>
           <span>ACTUAL TRUE</span>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-4">
           {/* Header */}
           <div className="text-center text-xs font-bold text-slate-400 uppercase">Predicted True</div>
           <div className="text-center text-xs font-bold text-slate-400 uppercase">Predicted False</div>

           {/* TP */}
           <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-lg flex flex-col items-center justify-center h-24">
              <span className="text-2xl font-bold text-green-400">TP</span>
              <span className="text-[10px] text-green-200">True Positive</span>
              <span className="text-xs mt-1">AI was Correct</span>
           </div>

           {/* FN */}
           <div className="bg-red-500/20 border border-red-500/50 p-4 rounded-lg flex flex-col items-center justify-center h-24">
              <span className="text-2xl font-bold text-red-400">FN</span>
              <span className="text-[10px] text-red-200">False Negative</span>
              <span className="text-xs mt-1">Missed Detection</span>
           </div>

           {/* FP */}
           <div className="bg-orange-500/20 border border-orange-500/50 p-4 rounded-lg flex flex-col items-center justify-center h-24">
              <span className="text-2xl font-bold text-orange-400">FP</span>
              <span className="text-[10px] text-orange-200">False Positive</span>
              <span className="text-xs mt-1">False Alarm</span>
           </div>

           {/* TN */}
           <div className="bg-blue-500/20 border border-blue-500/50 p-4 rounded-lg flex flex-col items-center justify-center h-24">
              <span className="text-2xl font-bold text-blue-400">TN</span>
              <span className="text-[10px] text-blue-200">True Negative</span>
              <span className="text-xs mt-1">Correct Rejection</span>
           </div>
        </div>
      </div>
    </div>
  )
}

// --- Interactive Scatter Plot (Clustering) ---
export const ClusteringVisual: React.FC = () => {
    const data1 = Array.from({length: 20}, (_, i) => ({ x: Math.random() * 40, y: Math.random() * 40 + 60, z: 10 }));
    const data2 = Array.from({length: 20}, (_, i) => ({ x: Math.random() * 40 + 60, y: Math.random() * 40, z: 10 }));
    const data3 = Array.from({length: 20}, (_, i) => ({ x: Math.random() * 40 + 50, y: Math.random() * 40 + 50, z: 10 }));

    return (
        <div className="glass-card p-6 rounded-2xl h-80">
            <h3 className="text-lg font-bold text-white mb-2">Unsupervised Learning: Clustering</h3>
            <p className="text-xs text-slate-400 mb-4">Algorithms like K-Means identify hidden groupings in unlabeled data.</p>
            <ResponsiveContainer width="100%" height="80%">
                <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                    <XAxis type="number" dataKey="x" name="Feature A" stroke="#64748b" hide />
                    <YAxis type="number" dataKey="y" name="Feature B" stroke="#64748b" hide />
                    <ZAxis type="number" dataKey="z" range={[50, 400]} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                    <Scatter name="Cluster A" data={data1} fill="#f472b6" />
                    <Scatter name="Cluster B" data={data2} fill="#38bdf8" />
                    <Scatter name="Cluster C" data={data3} fill="#a78bfa" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}
