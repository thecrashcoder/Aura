import { useState } from 'react';
import { motion, Variants } from 'motion/react';
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  Layers,
  LayoutDashboard,
  PenTool,
  Scale,
  Sun,
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-10%' }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const TopNavBar = () => {
  const [active, setActive] = useState('Home');
  const links = ['Home', 'Services', 'About', 'Portfolio'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out">
      <div className="flex justify-between items-center w-full px-8 md:px-12 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="text-base font-light tracking-[0.25em] uppercase text-white flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            <div className="w-6 h-6 border border-white/60 rounded-full mix-blend-overlay"></div>
            <div className="w-6 h-6 border border-white/60 rounded-full mix-blend-overlay"></div>
          </div>
          <span className="mt-0.5">AURA</span>
        </motion.div>

        <div className="hidden md:flex items-center bg-white/10 border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.1)] backdrop-blur-md p-1.5 rounded-full">
           {links.map((link) => (
             <a
               key={link}
               href={`#${link.toLowerCase()}`}
               onClick={() => setActive(link)}
               className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                 active === link ? 'text-[#1a1a1a]' : 'text-white/80 hover:text-white'
               }`}
             >
               {active === link && (
                 <motion.div
                   layoutId="activePill"
                   className="absolute inset-0 bg-white rounded-full shadow-sm"
                   transition={{ type: "spring", stiffness: 400, damping: 30 }}
                 />
               )}
               <span className="relative z-10">{link}</span>
             </a>
           ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white text-[#1a1a1a] px-6 py-2.5 rounded-full font-medium text-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-gray-100 transition-colors"
        >
          Get Started
        </motion.button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <header id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 px-8 overflow-hidden bg-[#e8e4db]">
    <motion.img
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      alt="Futuristic modern house"
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="/futuristic-house.jpg.png"
    />
    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-[1]"></div>
    
    <div className="relative z-10 w-full max-w-7xl mx-auto text-center flex flex-col items-center">
      <FadeIn delay={0.2}>
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white font-semibold text-xs md:text-sm tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm border border-white/20">
          Aetherial Living
        </span>
      </FadeIn>
      <FadeIn delay={0.4}>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white max-w-4xl mx-auto mb-8 leading-tight tracking-tight drop-shadow-md">
          Crafting Spaces That Breathe With Light & Clarity
        </h1>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
          We design sanctuaries of serene luxury. Every detail curated to elevate the everyday into an effortless experience of calm.
        </p>
      </FadeIn>
      <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <button className="bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:-translate-y-1 hover:bg-gray-100 transition-all shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex items-center gap-2">
          View Portfolio <ArrowRight size={18} />
        </button>
        <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-2">
          Discover Our Process
        </button>
      </FadeIn>
    </div>
  </header>
);

const Services = () => {
  const services = [
    { icon: <PenTool size={24} className="text-secondary" />, title: "Concept Design", desc: "Translating your vision into a cohesive aesthetic direction, establishing the mood, tone, and foundational elements of your space." },
    { icon: <LayoutDashboard size={24} className="text-secondary" />, title: "Spatial Planning", desc: "Optimizing flow and functionality through intuitive layouts that maximize natural light and architectural potential." },
    { icon: <Layers size={24} className="text-secondary" />, title: "Material Sourcing", desc: "Curating bespoke finishes, textiles, and furnishings that bring tactile richness and enduring quality to every surface." },
    { icon: <ClipboardCheck size={24} className="text-secondary" />, title: "Project Management", desc: "Overseeing the entire execution process with meticulous attention to detail, ensuring seamless delivery from concept to completion." }
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-8 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="font-semibold text-sm text-secondary tracking-widest uppercase block mb-4">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl text-on-secondary-fixed">Elevating spaces through meticulous design</h2>
        </FadeIn>

        <motion.div 
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((svc, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-white/60 backdrop-blur-2xl p-10 rounded-[2rem] shadow-[0_8px_30px_rgba(14,165,233,0.05)] border border-white/50 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center mb-6">
                {svc.icon}
              </div>
              <h3 className="font-serif text-2xl text-on-secondary-fixed mb-3">{svc.title}</h3>
              <p className="font-sans text-base text-on-surface-variant font-light mb-6 leading-relaxed">
                {svc.desc}
              </p>
              <a href="#" className="font-semibold text-sm tracking-wider uppercase text-[#b88c22] hover:text-[#a07a1c] transition-colors inline-flex items-center gap-1">
                Learn more <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-8 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(14,165,233,0.05)] border border-primary-container relative">
              <img 
                alt="Bright, airy living room" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container rounded-full blur-3xl opacity-60 -z-10"></div>
          </motion.div>

          <FadeIn className="lg:col-span-7 pl-0 lg:pl-12">
            <span className="font-semibold text-sm text-secondary tracking-widest uppercase block mb-4">Our Philosophy</span>
            <h2 className="font-serif text-3xl md:text-5xl text-on-secondary-fixed mb-8 leading-snug">
              Designing sanctuaries <br/>for the modern soul.
            </h2>
            <div className="space-y-6 font-sans text-lg text-on-surface-variant font-light leading-relaxed">
              <p>
                At Aura Design, we believe that true luxury lies in simplicity and the quality of light. Our mission is to create spaces that feel like a breath of fresh air—environments that calm the mind and uplift the spirit through meticulous restraint and elegant materiality.
              </p>
              <p>
                We envision a world where every home is a personal sanctuary, stripped of visual noise, allowing the beauty of everyday life to take center stage. Our approach marries soft minimalism with intuitive function, ensuring that every room is not only beautiful but effortlessly livable.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-container">
              <h3 className="font-serif text-2xl text-on-secondary-fixed mb-4">Letter from the Founder</h3>
              <p className="font-sans text-base text-on-surface-variant italic mb-6 max-w-lg leading-relaxed">
                "We don't just design rooms; we curate the atmosphere. A home should be your quietest, most beautiful retreat."
              </p>
              <div 
                className="text-3xl text-secondary opacity-80" 
                style={{ fontFamily: "'Brush Script MT', cursive, sans-serif" }}
              >
                Elena Vance
              </div>
              <span className="font-semibold text-xs text-outline tracking-widest uppercase mt-2 block">Founder & Principal Designer</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="text-center mb-16">
          <span className="font-semibold text-sm text-secondary tracking-widest uppercase block mb-4">Our Values</span>
          <h3 className="font-serif text-3xl md:text-4xl text-on-secondary-fixed">The Pillars of Aura</h3>
        </FadeIn>

        <motion.div 
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <Sun size={32} className="text-secondary" />, title: "Clarity", desc: "We strip away the unnecessary, favoring clean lines and expansive white space to allow natural light and pure forms to define the architecture." },
            { icon: <Scale size={32} className="text-secondary" />, title: "Harmony", desc: "Every texture, tone, and shadow is considered in relation to the whole, creating a seamless flow that feels instantly calming and unified." },
            { icon: <Compass size={32} className="text-secondary" />, title: "Innovation", desc: "While rooted in timeless aesthetics, we utilize modern materials and subtle technological integration to elevate the comfort of everyday living." },
          ].map((val, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-white p-12 rounded-[2rem] shadow-[0_8px_30px_rgba(14,165,233,0.03)] border border-primary-container hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-8">
                {val.icon}
              </div>
              <h4 className="font-serif text-2xl text-on-secondary-fixed mb-4">{val.title}</h4>
              <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-8 bg-background relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-semibold text-sm text-secondary tracking-widest uppercase block mb-4">Selected Works</span>
            <h2 className="font-serif text-3xl md:text-5xl text-on-secondary-fixed mb-4">Spaces That Breathe</h2>
            <p className="font-sans text-lg text-on-surface-variant font-light leading-relaxed">
              A curated selection of our most serene residential projects, designed to capture light and foster tranquility.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {['All', 'Coastal Retreats', 'Urban Sanctuaries', 'Minimalist Estates'].map((cat, i) => (
              <button 
                key={i} 
                className={`px-5 py-2 rounded-full font-semibold text-xs tracking-wider uppercase transition-all shadow-sm ${
                  i === 0 
                  ? 'bg-secondary text-white border border-transparent' 
                  : 'bg-white text-secondary border border-primary-container hover:bg-primary-container/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div 
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]"
        >
          <motion.div variants={itemVariants} className="group relative md:col-span-2 lg:col-span-2 row-span-1 rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_10px_40px_rgba(14,165,233,0.05)]">
            <img alt="The Azure Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/80 backdrop-blur-2xl p-6 rounded-2xl border border-white/50 shadow-lg">
                <span className="font-semibold text-xs text-secondary uppercase tracking-wider mb-2 block">Coastal Retreats</span>
                <h3 className="font-serif text-2xl text-on-secondary-fixed mb-1">The Azure Villa</h3>
                <p className="font-sans text-sm text-on-surface-variant font-light">Malibu, California</p>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={itemVariants} className="group relative col-span-1 row-span-1 rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_10px_40px_rgba(14,165,233,0.05)]">
            <img alt="Lumina Penthouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1600" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/80 backdrop-blur-2xl p-5 rounded-2xl border border-white/50 shadow-lg">
                <span className="font-semibold text-[10px] text-secondary uppercase tracking-wider mb-1 block">Urban Sanctuaries</span>
                <h3 className="font-serif text-xl text-on-secondary-fixed mb-1">Lumina Penthouse</h3>
                <p className="font-sans text-sm text-on-surface-variant font-light">New York City</p>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div variants={itemVariants} className="group relative col-span-1 row-span-1 rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_10px_40px_rgba(14,165,233,0.05)]">
            <img alt="The Blanc House" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/80 backdrop-blur-2xl p-5 rounded-2xl border border-white/50 shadow-lg">
                <span className="font-semibold text-[10px] text-secondary uppercase tracking-wider mb-1 block">Minimalist Estates</span>
                <h3 className="font-serif text-xl text-on-secondary-fixed mb-1">The Blanc House</h3>
                <p className="font-sans text-sm text-on-surface-variant font-light">Austin, Texas</p>
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div variants={itemVariants} className="group relative md:col-span-2 lg:col-span-2 row-span-1 rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_10px_40px_rgba(14,165,233,0.05)]">
            <img alt="Archway Residence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/80 backdrop-blur-2xl p-6 rounded-2xl border border-white/50 shadow-lg">
                <span className="font-semibold text-xs text-secondary uppercase tracking-wider mb-2 block">Urban Sanctuaries</span>
                <h3 className="font-serif text-2xl text-on-secondary-fixed mb-1">Archway Residence</h3>
                <p className="font-sans text-sm text-on-surface-variant font-light">London, UK</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <FadeIn className="mt-16 text-center">
          <button className="bg-transparent text-secondary border border-secondary/20 px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-primary-container/50 transition-colors inline-flex items-center gap-2">
            View Full Portfolio <ArrowRight size={18} />
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-surface-container-lowest border-t border-primary-container w-full pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="text-base font-light tracking-[0.25em] uppercase text-[#1a1a1a] flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 border border-[#1a1a1a] rounded-full"></div>
                <div className="w-5 h-5 border border-[#1a1a1a] rounded-full"></div>
              </div>
              <span className="mt-0.5">AURA</span>
            </div>
            <p className="font-sans text-sm text-on-surface-variant font-light max-w-sm leading-relaxed">
              Crafting sanctuaries of serene luxury. Every detail curated to elevate the everyday into an effortless experience of calm.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-xs text-secondary uppercase tracking-widest mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['Portfolio', 'About', 'Services', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-on-surface-variant hover:text-[#b88c22] transition-colors font-sans text-sm font-light">{link}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xs text-secondary uppercase tracking-widest mb-6">Social</h4>
            <div className="flex flex-col gap-4">
              {['Instagram', 'Pinterest', 'LinkedIn'].map(link => (
                <a key={link} href="#" className="text-on-surface-variant hover:text-[#b88c22] transition-colors font-sans text-sm font-light">{link}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-primary-container text-center md:text-left">
          <div className="font-sans text-xs text-on-surface-variant font-light">
            © 2026 Aura Interiors. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="text-on-surface-variant hover:text-[#b88c22] transition-colors font-sans text-xs font-light">Privacy Policy</a>
            <a href="#" className="text-on-surface-variant hover:text-[#b88c22] transition-colors font-sans text-xs font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
);

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <TopNavBar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}
