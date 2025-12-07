import React from 'react';
import { 
  BrainCircuit, 
  Cpu, 
  Globe2, 
  ShieldAlert, 
  Sparkles,
  Network,
  Binary,
  GitBranch,
  Microscope,
  Briefcase
} from 'lucide-react';
import { SectionContent, AiDomain } from './types';
import { 
  ExponentialGrowthChart, 
  NeuralNetworkVisual, 
  ConvolutionVisual, 
  ConfusionMatrix,
  ClusteringVisual
} from './components/Visuals';

export const SECTIONS: SectionContent[] = [
  {
    id: 'foundations',
    title: 'Foundations of AI',
    subtitle: 'From Turing Machines to Neural Networks',
    icon: BrainCircuit,
    color: 'from-cyan-500 to-blue-600',
    content: (
      <div className="space-y-12">
        {/* Intro Hero */}
        <div className="relative p-8 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">What is Artificial Intelligence?</h2>
            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl">
              Artificial Intelligence (AI) is a branch of computer science focused on building smart machines capable of performing tasks that typically need human intelligence. These tasks include seeing, recognizing speech, making decisions, and translating languages.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
        </div>

        {/* The 3 Levels */}
        <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GitBranch className="text-blue-400" /> The 3 Levels of AI
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl hover:border-blue-500/50 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20">
                        <span className="text-blue-400 font-bold">ANI</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Artificial Narrow Intelligence</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        <strong>Specific AI.</strong> It is designed to do one specific thing very well, like playing Chess or recognizing faces. This is the only type of AI that exists today. It cannot do tasks it wasn't programmed for.
                    </p>
                </div>
                <div className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20">
                        <span className="text-purple-400 font-bold">AGI</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Artificial General Intelligence</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        <strong>Human-level AI.</strong> A theoretical system that can learn, understand, and apply knowledge to <em>any</em> task, just like a human. It would be able to think creatively and adapt to new situations.
                    </p>
                </div>
                <div className="glass-card p-6 rounded-xl hover:border-pink-500/50 transition-colors group">
                     <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20">
                        <span className="text-pink-400 font-bold">ASI</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Artificial Super Intelligence</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        <strong>Super-human AI.</strong> An intellect that is much smarter than the best human brains in every field, including scientific creativity, wisdom, and social skills.
                    </p>
                </div>
            </div>
        </div>

        {/* Visualization of Growth */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">How Computers Learn</h3>
                <p className="text-slate-300">
                    Old computer programs followed strict lists of rules: <code className="bg-slate-800 px-1 py-0.5 rounded text-yellow-300">if This then That</code>.
                </p>
                <p className="text-slate-300">
                    Modern AI uses <strong>Machine Learning</strong>. Instead of giving the computer the rules, we give it the data (questions and answers), and the computer figures out the rules by itself.
                </p>
                <ul className="space-y-3 mt-4">
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <strong>Machine Learning:</strong> Methods that let computers improve at tasks through experience.
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <strong>Deep Learning:</strong> A type of machine learning inspired by the human brain, capable of learning from messy data like images and text.
                    </li>
                </ul>
            </div>
            <div className="h-80">
                <ExponentialGrowthChart />
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'algorithms',
    title: 'Algorithms & Architecture',
    subtitle: 'The Math Behind the Magic',
    icon: Binary,
    color: 'from-violet-500 to-purple-600',
    content: (
      <div className="space-y-12">
        
        {/* Intro to NNs */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold text-white mb-4">The Neural Network</h2>
                 <p className="text-slate-300 mb-6 leading-relaxed">
                    Think of a Neural Network like a digital brain. It is made up of tiny units called <strong>Neurons</strong> (or Perceptrons). 
                 </p>
                 <p className="text-slate-300 mb-6 leading-relaxed">
                    Each neuron receives information, decides how important it is (assigns a <strong>Weight</strong>), and if the signal is strong enough, it passes it to the next neuron.
                 </p>
                 <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-violet-500 mb-6">
                    <code className="text-sm font-mono text-violet-300">Output = Is the Signal Strong Enough? ( Input × Importance )</code>
                 </div>
                 <p className="text-sm text-slate-400">
                    "Learning" happens when the network makes a mistake and then goes back to adjust the "Importance" (Weights) so it doesn't make the same mistake again. This correction process is called <strong>Backpropagation</strong>.
                 </p>
            </div>
            <div className="w-full">
                <NeuralNetworkVisual />
            </div>
        </div>

        {/* Types of Learning */}
        <div>
            <h3 className="text-2xl font-bold text-white mb-6">How AI Learns</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {/* Supervised */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3 mb-4 text-emerald-400">
                        <Network size={24} />
                        <h4 className="font-bold text-lg">Supervised Learning</h4>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 h-20">
                        <strong>Like learning with a teacher.</strong> The AI is given data with the correct answers (labels). It learns to connect the input to the answer.
                    </p>
                    <div className="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
                        Example: Teaching an AI to spot cats by showing it labeled photos of cats.
                    </div>
                </div>

                {/* Unsupervised */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3 mb-4 text-amber-400">
                        <Sparkles size={24} />
                        <h4 className="font-bold text-lg">Unsupervised Learning</h4>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 h-20">
                        <strong>Like learning by self-discovery.</strong> The AI looks at data without any answers and tries to find patterns or groups on its own.
                    </p>
                    <div className="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
                        Example: Grouping customers who buy similar things.
                    </div>
                </div>

                {/* Reinforcement */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3 mb-4 text-rose-400">
                        <Cpu size={24} />
                        <h4 className="font-bold text-lg">Reinforcement Learning</h4>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 h-20">
                        <strong>Like learning by trial and error.</strong> The AI tries different actions and gets a reward for good results or a penalty for bad ones.
                    </p>
                    <div className="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
                        Example: Teaching a robot to walk or an AI to play video games.
                    </div>
                </div>
            </div>
        </div>

        {/* Visual Deep Dive */}
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                 <h3 className="text-xl font-bold text-white">Example: Clustering</h3>
                 <p className="text-sm text-slate-400">
                    This is an example of Unsupervised Learning. The AI groups data points together based on how similar they are, without being told what the groups are.
                 </p>
                 <ClusteringVisual />
            </div>
            <div className="space-y-4">
                 <h3 className="text-xl font-bold text-white">Did the AI get it right?</h3>
                 <p className="text-sm text-slate-400">
                    We use a "Confusion Matrix" to check performance. It shows us when the AI was right, and exactly <em>how</em> it was wrong (e.g., did it miss a cancer diagnosis, or did it say a healthy person was sick?).
                 </p>
                 <ConfusionMatrix />
            </div>
        </div>

      </div>
    )
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    subtitle: 'How Machines "See"',
    icon: Microscope,
    color: 'from-amber-500 to-orange-600',
    content: (
      <div className="space-y-10">
         <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">Seeing with Math</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
                To a computer, a picture is just a giant grid of numbers (pixels). To understand what is in the picture, AI uses a tool called a <strong>Convolutional Neural Network (CNN)</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed">
                Instead of looking at every single pixel one by one, the AI uses small <strong>Filters</strong> to scan the image. These filters look for specific patterns like straight lines, corners, or circles.
            </p>
         </div>

         <ConvolutionVisual />

         <div className="grid md:grid-cols-3 gap-6 mt-8">
             <div className="glass-card p-5 rounded-lg border-l-2 border-orange-500">
                 <h4 className="font-bold text-white mb-2">1. Convolution (Scanning)</h4>
                 <p className="text-sm text-slate-400">The AI scans the image to find features. Early layers find edges; later layers find eyes, ears, or tires.</p>
             </div>
             <div className="glass-card p-5 rounded-lg border-l-2 border-orange-500">
                 <h4 className="font-bold text-white mb-2">2. Pooling (Simplifying)</h4>
                 <p className="text-sm text-slate-400">The AI shrinks the image information down to keep only the most important parts. This saves processing power.</p>
             </div>
             <div className="glass-card p-5 rounded-lg border-l-2 border-orange-500">
                 <h4 className="font-bold text-white mb-2">3. Classification (Deciding)</h4>
                 <p className="text-sm text-slate-400">The AI takes all the features it found and makes a final decision: "This is a cat."</p>
             </div>
         </div>
      </div>
    )
  },
  {
    id: 'applications',
    title: 'Real World Applications',
    subtitle: 'AI in Daily Life',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-600',
    content: (
       <div className="space-y-10">
          <p className="text-xl text-slate-300">
            AI is no longer just a science experiment; it is now a part of our daily lives and industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
                {
                    title: 'Smart Healthcare',
                    desc: 'AI analyzes DNA to predict diseases. It also scans medical images (like X-Rays) to find problems such as tumors faster and sometimes more accurately than doctors.',
                    tags: ['Health', 'Genomics']
                },
                {
                    title: 'Smart Finance',
                    desc: 'Super-fast computer programs buy and sell stocks in milliseconds based on tiny market changes. AI also reads news articles to guess if stock prices will go up or down.',
                    tags: ['Money', 'Trading']
                },
                {
                    title: 'Generative Design',
                    desc: 'Engineers tell the AI what they need (e.g., a lightweight car part), and the AI draws thousands of options. The results often look alien/organic but are stronger and lighter.',
                    tags: ['Engineering', 'Design']
                },
                {
                    title: 'Language & Chatbots',
                    desc: 'Advanced systems (like ChatGPT or Gemini) can translate languages instantly, write code, or act as smart assistants that can pass difficult exams.',
                    tags: ['Language', 'Communication']
                }
            ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 hover:bg-slate-800/80 transition-all p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/50 group">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {item.desc}
                    </p>
                    <div className="flex gap-2">
                        {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-slate-800 text-slate-500 border border-slate-700">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
          </div>
       </div>
    )
  },
  {
    id: 'ethics',
    title: 'Ethics & Safety',
    subtitle: 'Important Questions',
    icon: ShieldAlert,
    color: 'from-rose-500 to-red-600',
    content: (
      <div className="space-y-8">
         <div className="bg-rose-950/30 border border-rose-500/30 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-rose-200 mb-4">The "Black Box" Problem</h3>
            <p className="text-rose-100/80 max-w-2xl leading-relaxed">
                Modern AI is often like a "Black Box." This means that sometimes, even the creators don't know exactly <em>why</em> the AI made a specific decision. In important areas like law or medicine, we need to know the "why," not just the answer.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-rose-400 font-bold">1</div>
                <h4 className="text-lg font-bold text-white">Bias & Fairness</h4>
                <p className="text-sm text-slate-400">
                    If an AI learns from old data that contains bias (e.g., hiring data that favors men), the AI will repeat that discrimination. It can make unfairness faster and more widespread.
                </p>
            </div>
            <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-rose-400 font-bold">2</div>
                <h4 className="text-lg font-bold text-white">Fake Information</h4>
                <p className="text-sm text-slate-400">
                    AI makes it very cheap to create fake news, fake images (Deepfakes), and spam. This makes it harder for people to know what is true.
                </p>
            </div>
            <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-rose-400 font-bold">3</div>
                <h4 className="text-lg font-bold text-white">Alignment</h4>
                <p className="text-sm text-slate-400">
                    We must ensure AI goals match human values. If we tell a super-smart AI to "fix cancer" at all costs, we need to make sure it doesn't do something harmful to achieve that goal.
                </p>
            </div>
         </div>
      </div>
    )
  }
];