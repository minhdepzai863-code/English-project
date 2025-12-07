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
              Artificial Intelligence (AI) is a multidisciplinary branch of computer science dedicated to creating systems capable of performing tasks that typically require human intelligence. These tasks include visual perception, speech recognition, decision-making, and translation between languages.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
        </div>

        {/* The 3 Levels */}
        <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GitBranch className="text-blue-400" /> The Taxonomy of Intelligence
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl hover:border-blue-500/50 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20">
                        <span className="text-blue-400 font-bold">ANI</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Artificial Narrow Intelligence</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        <strong>Goal-oriented</strong>, designed to solve a specific problem (e.g., Chess, Facial Recognition). This represents 100% of current AI technology. It cannot transfer learning to new, unrelated domains.
                    </p>
                </div>
                <div className="glass-card p-6 rounded-xl hover:border-purple-500/50 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20">
                        <span className="text-purple-400 font-bold">AGI</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Artificial General Intelligence</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        A theoretical system with the capacity to understand, learn, and apply knowledge across a wide variety of tasks, indistinguishable from a human mind. It implies <strong>consciousness</strong> and adaptability.
                    </p>
                </div>
                <div className="glass-card p-6 rounded-xl hover:border-pink-500/50 transition-colors group">
                     <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20">
                        <span className="text-pink-400 font-bold">ASI</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Artificial Super Intelligence</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Intellect that is much smarter than the best human brains in practically every field, including scientific creativity, general wisdom and social skills.
                    </p>
                </div>
            </div>
        </div>

        {/* Visualization of Growth */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">The Modern Paradigm Shift</h3>
                <p className="text-slate-300">
                    Traditional programming (Symbolic AI) relied on explicit rules: <code className="bg-slate-800 px-1 py-0.5 rounded text-yellow-300">if X then Y</code>.
                </p>
                <p className="text-slate-300">
                    Modern Machine Learning relies on <strong>Data-Driven Inference</strong>. We provide the inputs and the desired outputs, and the algorithm figures out the "rules" (the function) that maps them.
                </p>
                <ul className="space-y-3 mt-4">
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <strong>Machine Learning:</strong> Statistical techniques to enable machines to improve at tasks with experience.
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <strong>Deep Learning:</strong> A subset of ML based on artificial neural networks, capable of learning unstructured data.
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
    subtitle: 'The Mathematics of Learning',
    icon: Binary,
    color: 'from-violet-500 to-purple-600',
    content: (
      <div className="space-y-12">
        
        {/* Intro to NNs */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold text-white mb-4">The Neural Network</h2>
                 <p className="text-slate-300 mb-6 leading-relaxed">
                    Inspired by biological neurons, the <strong>Perceptron</strong> is the fundamental building block. It takes inputs, applies <strong>Weights</strong> (importance) and a <strong>Bias</strong> (activation threshold), sums them up, and passes the result through an <strong>Activation Function</strong> (like ReLU or Sigmoid) to introduce non-linearity.
                 </p>
                 <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-violet-500 mb-6">
                    <code className="text-sm font-mono text-violet-300">Output = Activation( Σ (Input × Weight) + Bias )</code>
                 </div>
                 <p className="text-sm text-slate-400">
                    Deep Learning occurs when we stack many of these layers ("Hidden Layers"). The "Learning" is essentially the process of adjusting these Weights using an algorithm called <strong>Backpropagation</strong> to minimize error.
                 </p>
            </div>
            <div className="w-full">
                <NeuralNetworkVisual />
            </div>
        </div>

        {/* Types of Learning */}
        <div>
            <h3 className="text-2xl font-bold text-white mb-6">Core Methodologies</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {/* Supervised */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3 mb-4 text-emerald-400">
                        <Network size={24} />
                        <h4 className="font-bold text-lg">Supervised Learning</h4>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 h-20">
                        The model trains on labeled data (Input + Correct Answer). It learns to map inputs to outputs.
                    </p>
                    <div className="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
                        Examples: Spam Filters, Medical Diagnosis, Image Classification.
                    </div>
                </div>

                {/* Unsupervised */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3 mb-4 text-amber-400">
                        <Sparkles size={24} />
                        <h4 className="font-bold text-lg">Unsupervised Learning</h4>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 h-20">
                        The model finds hidden patterns or intrinsic structures in input data without labeled responses.
                    </p>
                    <div className="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
                        Examples: Customer Segmentation, Anomaly Detection, DNA Clustering.
                    </div>
                </div>

                {/* Reinforcement */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3 mb-4 text-rose-400">
                        <Cpu size={24} />
                        <h4 className="font-bold text-lg">Reinforcement Learning</h4>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 h-20">
                        An agent learns to make decisions by performing actions in an environment and receiving rewards or penalties.
                    </p>
                    <div className="text-xs font-mono text-slate-500 border-t border-slate-800 pt-3">
                        Examples: Robotics, AlphaGo, Self-driving car navigation.
                    </div>
                </div>
            </div>
        </div>

        {/* Visual Deep Dive */}
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                 <h3 className="text-xl font-bold text-white">Example: Clustering (Unsupervised)</h3>
                 <p className="text-sm text-slate-400">
                    Algorithms like K-Means organize data points into groups based on similarity (distance).
                 </p>
                 <ClusteringVisual />
            </div>
            <div className="space-y-4">
                 <h3 className="text-xl font-bold text-white">Evaluating Performance</h3>
                 <p className="text-sm text-slate-400">
                    How do we know if an AI works? We look at metrics like Precision and Recall using a Confusion Matrix.
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
            <h2 className="text-3xl font-bold text-white mb-4">Convolutional Neural Networks (CNNs)</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
                Images are just grids of numbers (pixel values) to a computer. To understand content, AI uses a specialized architecture called a CNN.
                Instead of processing every pixel individually, it uses <strong>Filters (Kernels)</strong> that slide across the image to detect features like vertical lines, curves, or textures.
            </p>
         </div>

         <ConvolutionVisual />

         <div className="grid md:grid-cols-3 gap-6 mt-8">
             <div className="glass-card p-5 rounded-lg border-l-2 border-orange-500">
                 <h4 className="font-bold text-white mb-2">1. Convolution</h4>
                 <p className="text-sm text-slate-400">Extracts features using filters. Early layers see edges; later layers see eyes, ears, or wheels.</p>
             </div>
             <div className="glass-card p-5 rounded-lg border-l-2 border-orange-500">
                 <h4 className="font-bold text-white mb-2">2. Pooling</h4>
                 <p className="text-sm text-slate-400">Downsamples the image to reduce computation and prevent overfitting, keeping only important features.</p>
             </div>
             <div className="glass-card p-5 rounded-lg border-l-2 border-orange-500">
                 <h4 className="font-bold text-white mb-2">3. Fully Connected</h4>
                 <p className="text-sm text-slate-400">Flattens the feature map into a list and uses a standard neural network to classify the object.</p>
             </div>
         </div>
      </div>
    )
  },
  {
    id: 'applications',
    title: 'Real World Applications',
    subtitle: 'Industry 4.0 Transformation',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-600',
    content: (
       <div className="space-y-10">
          <p className="text-xl text-slate-300">
            AI has moved beyond academic research into the fabric of daily life and critical infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
                {
                    title: 'Precision Medicine',
                    desc: 'AI models analyze genomic data to predict disease susceptibility and tailor treatments. Deep learning algorithms scan radiology images (X-Rays, CTs) to detect tumors earlier than human radiologists.',
                    tags: ['Healthcare', 'Genomics']
                },
                {
                    title: 'Algorithmic Trading',
                    desc: 'High-frequency trading bots execute millions of orders in milliseconds based on micro-fluctuations in the market. Sentiment analysis scans news to predict stock movements.',
                    tags: ['Finance', 'Fintech']
                },
                {
                    title: 'Generative Design',
                    desc: 'Engineers input constraints (weight, material, cost) and AI generates thousands of CAD options, often resulting in organic, alien-like structures that are lighter and stronger.',
                    tags: ['Engineering', 'Manufacturing']
                },
                {
                    title: 'Natural Language Processing',
                    desc: 'Transformers (like GPT and Gemini) power real-time translation, code generation, and complex reasoning agents that can pass the Bar Exam or write poetry.',
                    tags: ['NLP', 'Communication']
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
    subtitle: 'The Alignment Problem',
    icon: ShieldAlert,
    color: 'from-rose-500 to-red-600',
    content: (
      <div className="space-y-8">
         <div className="bg-rose-950/30 border border-rose-500/30 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-rose-200 mb-4">The Black Box Problem</h3>
            <p className="text-rose-100/80 max-w-2xl leading-relaxed">
                Modern Deep Learning models are often opaque; even their creators cannot fully explain <em>why</em> a model made a specific decision. In high-stakes fields like criminal justice or healthcare, this lack of explainability (Interpretability) is a critical ethical hurdle.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-rose-400 font-bold">1</div>
                <h4 className="text-lg font-bold text-white">Bias & Fairness</h4>
                <p className="text-sm text-slate-400">
                    If training data contains historical biases (e.g., hiring data favoring men), the AI will codify and scale that discrimination, often subtly.
                </p>
            </div>
            <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-rose-400 font-bold">2</div>
                <h4 className="text-lg font-bold text-white">Disinformation</h4>
                <p className="text-sm text-slate-400">
                    Generative AI reduces the cost of creating fake news and deepfakes to near zero, threatening democratic processes and truth verification.
                </p>
            </div>
            <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-rose-400 font-bold">3</div>
                <h4 className="text-lg font-bold text-white">Value Alignment</h4>
                <p className="text-sm text-slate-400">
                    Ensuring an AGI's goals match human values. A superintelligent system optimized for "paperclips" could theoretically consume all earth's resources to make them.
                </p>
            </div>
         </div>
      </div>
    )
  }
];
