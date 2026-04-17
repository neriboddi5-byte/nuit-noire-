export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[80px] rounded-full -z-10"></div>
      
      <span className="micro-label mb-4 block text-center">About Us</span>
      <h1 className="text-display text-6xl text-center mb-16">OUR STORY</h1>
      
      <div className="glass-panel p-10 md:p-16 max-w-3xl mx-auto">
        <p className="text-white/80 mb-12 font-light text-xl leading-relaxed text-subheading">
          Nuit Noire was born from a desire to escape the mundane. We bring together the city's most eclectic minds in locations that defy expectations. This is where the city truly comes alive.
        </p>
        <p className="text-white/60 mb-12 font-light text-lg leading-relaxed">
          It's not about being seen. It's about being in the moment. Our collective curators are dedicated to sound, shadows, and the pursuit of pure underground luxury.
        </p>
      </div>
    </div>
  );
}
