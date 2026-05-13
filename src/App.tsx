/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Scissors, 
  Sparkles, 
  Heart, 
  Camera, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

// --- Constants & Data ---

const WHATSAPP_LINK = "https://wa.me/96599477668";
const INSTAGRAM_LINK = "https://www.instagram.com/hazelsalon_?igsh=bXQ4YXA5ODNkaTA5";

const SERVICES = [
  { id: 1, name: 'Luxury Manicure', icon: <Sparkles className="w-6 h-6" />, desc: 'Indulgent care for your hands and nails with premium treatments.' },
  { id: 2, name: 'Russian Manicure', icon: <Scissors className="w-6 h-6" />, desc: 'Ultra-precise cuticle work for a flawless, long-lasting finish.' },
  { id: 3, name: 'Pedicure', icon: <Heart className="w-6 h-6" />, desc: 'Soothing foot spa and meticulous nail grooming in total comfort.' },
  { id: 4, name: 'Hairstyling', icon: <Scissors className="w-6 h-6" />, desc: 'Expert cuts and styles tailored to your unique beauty.' },
  { id: 5, name: 'Blow Dry', icon: <Sparkles className="w-6 h-6" />, desc: 'The signature voluminous finish that lasts for days.' },
  { id: 6, name: 'Hair Extensions', icon: <ArrowRight className="w-6 h-6" />, desc: 'Seamless length and volume with high-quality extensions.' },
  { id: 7, name: 'Makeup Services', icon: <Camera className="w-6 h-6" />, desc: 'Glamorous looks for weddings, events, or your special moments.' },
  { id: 8, name: 'Microblading', icon: <Sparkles className="w-6 h-6" />, desc: 'Semi-permanent eyebrows for a natural, defined enhancement.' },
];

const REVIEWS = [
  { id: 1, name: 'Rachael Ellis', rating: 5, text: "Absolutely the best salon experience in Kuwait. The atmosphere is calm, elegant and luxurious." },
  { id: 2, name: 'Shantel Shephard', rating: 5, text: "My nails turned out perfect. The staff are so welcoming and professional." },
  { id: 3, name: 'Sondos Al Kasaby', rating: 5, text: "The famous blow dry and manicure were amazing. I loved the final look!" },
];

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop", title: "Luxury Interior" },
  { src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop", title: "Perfect Manicure" },
  { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop", title: "Professional Hair" },
  { src: "https://images.unsplash.com/photo-1596704017254-9b121068fb29?q=80&w=2069&auto=format&fit=crop", title: "Luxury Pedicure" },
  { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop", title: "Glamour Makeup" },
  { src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop", title: "Salon Vibe" },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-warm-brown"
        >
          S <span className="text-rosegold">by</span> HAZEL
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              whileHover={{ scale: 1.05 }}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-widest font-medium hover:text-rosegold transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:scale-105"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-warm-brown"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-black/5 flex flex-col items-center py-10 gap-6"
          >
            {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-display tracking-widest uppercase hover:text-rosegold"
              >
                {item}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-6xl text-warm-brown mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-warm-brown/60 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 1 }}
      className={`h-1 w-24 bg-rosegold mt-6 ${centered ? 'mx-auto' : ''}`}
    />
  </div>
);

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop" 
            alt="Luxury Salon Interior"
            className="w-full h-full object-cover animate-slow-zoom brightness-75"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-cream/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.3em] font-medium mb-6 text-rosegold/90"
          >
            Welcome to the Pinnacle of Luxury
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight tracking-tight drop-shadow-2xl"
          >
            Luxury Beauty & <br />
            <span className="italic font-normal">Nail Experience</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Premium nails, hair, beauty and self-care services designed for modern women.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-pink-500/20 hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white/10 backdrop-blur-md w-full sm:w-auto text-lg h-14 border-white/40 text-white hover:bg-white hover:text-rosegold"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-rosegold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden soft-shadow group">
                <img 
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Salon Experience" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-nude rounded-[2rem] -z-0 hidden md:block" />
              <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-rosegold/20 rounded-[2rem] -z-0 hidden md:block" />
              
              <div className="absolute top-1/2 -right-12 glass p-6 rounded-2xl shadow-xl hidden lg:block animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-rosegold p-3 rounded-full text-white">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Premium Quality</p>
                    <p className="text-xs opacity-60">Handpicked Luxury Products</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <SectionHeader 
                title="About Hazel Beauty Salon" 
                subtitle="" 
                centered={false} 
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-light leading-relaxed text-warm-brown/80"
              >
                S by Hazel Beauty Salon is a premium beauty destination in Kuwait offering luxury nail care, hairstyling, make-up services, manicures, pedicures and beauty treatments in a calm and elegant atmosphere.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-warm-brown/60 leading-relaxed"
              >
                Our philosophy centers on the modern woman who values both aesthetics and excellence. We curate every detail of your experience—from the soothing scents to the high-end materials—to ensure you leave feeling revitalized and radiantly beautiful.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-warm-brown/10"
              >
                <div>
                  <h4 className="text-3xl font-display text-rosegold">10+</h4>
                  <p className="text-xs uppercase tracking-widest opacity-60">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display text-rosegold">15k</h4>
                  <p className="text-xs uppercase tracking-widest opacity-60">Happy Clients</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display text-rosegold">50+</h4>
                  <p className="text-xs uppercase tracking-widest opacity-60">Expert Staff</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 md:py-32 bg-nude">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Our Premium Services" 
            subtitle="Indulge in a wide range of curated beauty experiences designed for your relaxation and glamor."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[2rem] hover:bg-white transition-all duration-500 group relative overflow-hidden text-center"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-rosegold/5 rounded-bl-full transition-all group-hover:bg-rosegold/10" />
                
                <div className="mb-6 inline-block bg-cream p-5 rounded-3xl text-rosegold glow-shadow group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-display text-warm-brown mb-3">{service.name}</h3>
                <p className="text-sm text-warm-brown/60 leading-relaxed font-light">
                  {service.desc}
                </p>
                
                <div className="mt-6 pt-4 border-t border-warm-brown/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-rosegold font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-1"
                  >
                    Book Service <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section id="gallery" className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Gallery of Elegance" 
            subtitle="A glimpse into the beautiful moments and impeccable artistry at Hazel Beauty Salon."
          />

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="break-inside-avoid relative group overflow-hidden rounded-3xl soft-shadow"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 block"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div>
                    <p className="text-white text-sm uppercase tracking-widest font-medium">{img.title}</p>
                    <h4 className="text-white text-2xl font-display">Luxury Artistry</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section id="reviews" className="py-24 md:py-32 bg-nude overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Sparkles size={400} className="text-rosegold" strokeWidth={0.5} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            title="What Our Clients Say" 
            subtitle="The highest form of praise comes from the women who visit us."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass p-10 rounded-[3rem] relative flex flex-col justify-between"
              >
                <div className="mb-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ delay: idx * 0.2 + i * 0.1, duration: 0.5 }}
                      >
                        <Star size={16} fill="#b76e79" className="text-rosegold" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg md:text-xl font-display font-light italic leading-relaxed text-warm-brown/90">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="pt-6 border-t border-warm-brown/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rosegold/10 flex items-center justify-center text-rosegold font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-warm-brown">{review.name}</h4>
                    <p className="text-xs uppercase tracking-widest opacity-50">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass p-10 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-nude/30 -z-10 skew-x-12 translate-x-20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <SectionHeader 
                  title="Visit Our Sanctuary" 
                  subtitle="" 
                  centered={false} 
                />
                <div className="space-y-10 mt-12">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="bg-rosegold/10 p-4 rounded-2xl text-rosegold h-fit">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display mb-2">Location</h4>
                      <p className="text-warm-brown/60 leading-relaxed">
                        1st floor, Block 1 street 117, building 522<br />
                        7th avenue, Kuwait
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="bg-rosegold/10 p-4 rounded-2xl text-rosegold h-fit">
                      <Clock size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display mb-2">Open Hours</h4>
                      <p className="text-warm-brown/60 leading-relaxed">
                        Daily &bull; 10 AM – 8 PM
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="bg-rosegold/10 p-4 rounded-2xl text-rosegold h-fit">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display mb-2">Phone</h4>
                      <p className="text-warm-brown/60 leading-relaxed">
                        +965 9947 7668
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-16"
                >
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6 animate-float" />
                    Book via WhatsApp
                  </a>
                </motion.div>
              </div>

              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden soft-shadow aspect-square relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1519415510271-e1c2523bc640?q=80&w=2070&auto=format&fit=crop" 
                    alt="Contact Us Salon" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass p-10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                      <MapPin size={40} className="text-rosegold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-warm-brown text-cream pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-1">
              <h3 className="text-3xl font-display font-bold tracking-tighter mb-6">
                S <span className="text-rosegold">by</span> HAZEL
              </h3>
              <p className="text-cream/60 leading-relaxed font-light mb-8">
                Defining luxury and feminine beauty in the heart of Kuwait. Our dedication to excellence ensures you receive only the best.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center hover:bg-rosegold hover:border-rosegold transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-display mb-8 tracking-widest uppercase text-rosegold">Explore</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Gallery', 'Reviews'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-cream/60 hover:text-white transition-colors duration-300 font-light underline-offset-8 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-display mb-8 tracking-widest uppercase text-rosegold">Services</h4>
              <ul className="space-y-4">
                {['Manicure', 'Pedicure', 'Hairstyling', 'Makeup', 'Microblading'].map(link => (
                  <li key={link}>
                    <a href="#services" className="text-cream/60 hover:text-white transition-colors duration-300 font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-display mb-8 tracking-widest uppercase text-rosegold">Newsletter</h4>
              <p className="text-cream/60 mb-6 font-light">Join our beauty circle for luxury tips and exclusive offers.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rosegold"
                />
                <button className="absolute right-2 top-1.5 bg-rosegold text-white p-2 rounded-full hover:scale-105 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 text-center text-cream/40 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} S by Hazel Beauty Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* --- FLOATING ACTION BUTTONS --- */}
      {/* Instagram */}
      <a 
        href={INSTAGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-6 z-50 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <Instagram size={32} />
      </a>

      {/* WhatsApp */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle size={32} />
        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 pointer-events-none" />
      </a>
    </div>
  );
}

