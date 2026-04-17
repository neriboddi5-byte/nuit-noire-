import { ArrowRight, Lock, MapPin, Calendar, Users, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'THE WICKED HOUR',
      date: 'FRIDAY, NOV 13',
      location: 'Undisclosed Location, Downtown',
      availability: 'Limited Spots',
      image: 'https://images.unsplash.com/photo-1574391851219-482a51ade9af?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'NEON SYNDICATE',
      date: 'SATURDAY, NOV 21',
      location: 'The Vault',
      availability: 'Invite Only',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'OBSCURA',
      date: 'FRIDAY, NOV 27',
      location: 'Basement 44',
      availability: 'Almost Full',
      image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80',
    }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1621360811095-714041b31566?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1470229722913-7c090be5c52c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80'
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558317751-c33a5b7980bd?auto=format&fit=crop&q=80"
            alt="Club vibe background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-brand-bg/80 to-brand-bg"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
               <span className="micro-label mb-5 block text-brand-purple">Entry No. 042</span>
              <h1 className="text-display text-7xl md:text-[8rem] lg:text-[10rem] mb-4 text-white">
                WE OWN <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-purple italic">THE NIGHT</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-subheading mb-10 max-w-xl"
            >
              Nuit Noire is an elite collective defined by sound, shadows, and the pursuit of pure underground luxury. Access is restricted.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="btn-primary">
                Join the list
              </button>
              <button className="btn-secondary">
                View Events
              </button>
            </motion.div>

            {/* Dot Matrix Decoration */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="mt-12 flex gap-1"
            >
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`w-[2px] h-[2px] rounded-full bg-brand-purple ${i === 3 ? 'opacity-100' : 'opacity-30'}`}></div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FOMO / EXPERIENCE SECTION */}
      <section id="experience" className="py-24 md:py-32 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="micro-label text-brand-neon mb-6 block">The Experience</span>
              <h2 className="text-display text-5xl md:text-7xl mb-8 leading-none">
                NOT EVERYONE <br/>GETS IN.
              </h2>
              <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                <p>
                  Nuit Noire isn't a club. It's an ecosystem. A carefully curated collision of art, dark aesthetics, and underground soundscapes. 
                </p>
                <p>
                  Locations are dropped 24 hours before doors open. The guest list is strictly monitored. If you have to ask, you probably don't belong.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="mb-4 text-brand-neon"><Lock size={32} strokeWidth={1.5} /></div>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">Elite Access</h4>
                  <p className="text-sm text-white/50">Strictly curated crowd. Quality over quantity.</p>
                </div>
                <div>
                  <div className="mb-4 text-brand-neon"><MapPin size={32} strokeWidth={1.5} /></div>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">Secret Venues</h4>
                  <p className="text-sm text-white/50">Industrial warehouses, vaults, and private rooftops.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-panel relative z-10 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" 
                  alt="Nuit Noire Vibe" 
                  className="w-full h-full object-cover rounded-[1.25rem] filter contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-brand-neon/20 blur-3xl -z-10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-purple/30 blur-2xl -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UPCOMING EVENTS */}
      <section id="events" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="micro-label text-brand-neon block mb-4">The Calendar</span>
              <h2 className="text-display text-5xl md:text-7xl">THE LINEUP</h2>
            </div>
            <button className="text-sm font-bold uppercase tracking-widest hover:text-brand-neon transition-colors pb-2 border-b-2 border-transparent hover:border-brand-neon">
              View Past Events
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, idx) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-[24px] overflow-hidden aspect-[3/4] cursor-pointer glass-panel"
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-20 filter grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-10">
                  <div className="self-end bg-brand-purple text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest z-10">
                    {event.availability}
                  </div>
                  
                  <div className="z-10 bg-brand-bg/60 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                    <span className="micro-label mb-2 block">
                      {event.date}
                    </span>
                    <h3 className="text-display text-4xl mb-4">{event.title}</h3>
                    
                    <div className="flex flex-col gap-3 text-sm text-white/50 mb-8 border-l-2 border-brand-purple pl-4">
                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold w-16 uppercase text-[10px] tracking-[2px]">Venue:</span> 
                        {event.location}
                      </div>
                      <div className="flex items-center gap-3">
                         <span className="text-white font-bold w-16 uppercase text-[10px] tracking-[2px]">Lineup:</span> 
                         Secret Guests
                      </div>
                    </div>
                    
                    <button className="w-full btn-primary text-xs !py-3">
                      Secure Access
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF / GALLERY */}
      <section id="gallery" className="py-24 bg-brand-bg overflow-hidden relative">
        <marquee className="text-display text-[120px] md:text-[200px] whitespace-nowrap text-white/5 select-none font-bold" scrollamount="12">
          JOIN THE SYNDICATE. JOIN THE SYNDICATE. JOIN THE SYNDICATE. 
        </marquee>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 md:-mt-32 relative z-10">
          <div className="glass-panel p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-[30px]">
             <div className="flex flex-col gap-2">
                <span className="font-bold text-[10px] tracking-[2px] uppercase opacity-50">Live feed</span>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-2xl font-light hover:text-brand-purple hover:italic transition-all">
                  @nuitnoire <Instagram size={28} />
                </a>
             </div>
             <div className="flex gap-4">
                <div className="w-[60px] h-[60px] rounded-xl bg-black border border-white/10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1621360811095-714041b31566?w=100&q=80')", backgroundSize: 'cover'}}></div>
                <div className="w-[60px] h-[60px] rounded-xl bg-black border border-white/10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c090be5c52c?w=100&q=80')", backgroundSize: 'cover'}}></div>
                <div className="w-[60px] h-[60px] rounded-xl bg-black border border-white/10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&q=80')", backgroundSize: 'cover'}}></div>
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className={`aspect-[4/5] rounded-[24px] overflow-hidden ${i % 2 === 0 ? 'translate-y-0' : 'translate-y-8'} transition-transform hover:scale-105 hover:z-20 relative duration-500 border border-white/10 p-2 glass-panel`}>
                <img 
                  src={img} 
                  alt="Gallery shot"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMMERSIVE CTA */}
      <section className="py-32 relative flex items-center justify-center text-center px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-brand-purple/5 -z-10"></div>
        <div className="max-w-3xl mx-auto glass-panel p-16 relative overflow-hidden">
          {/* subtle glow behind cta window */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-purple/20 blur-[60px] rounded-full -z-10"></div>
          
          <h2 className="text-display text-4xl md:text-6xl mb-8 uppercase">Initialize Protocol</h2>
          <p className="text-subheading mb-12 max-w-xl mx-auto">
            Spots on our guest lists fill up instantly. Join the inner circle to get early access to hidden events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-purple transition-colors text-sm uppercase tracking-widest"
              required
            />
            <button type="submit" className="btn-primary">
              Apply
            </button>
          </form>
          <p className="font-bold text-[10px] tracking-[2px] uppercase opacity-40 mt-6 pt-6 border-t border-white/5">Approval is not guaranteed.</p>
        </div>
      </section>
    </div>
  );
}
