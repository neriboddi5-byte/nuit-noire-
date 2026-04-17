export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[80px] rounded-full -z-10"></div>
      
      <span className="micro-label mb-4 block">Inquiries</span>
      <h1 className="text-display text-6xl mb-8">PARTNERSHIPS</h1>
      <p className="text-white/60 mb-16 text-subheading">For brand integrations, VIP table inquiries, and press.</p>
      
      <div className="glass-panel p-16 max-w-2xl mx-auto flex flex-col gap-8 items-center border-white/5">
        <a href="mailto:vip@nuitnoire.com" className="text-3xl md:text-4xl text-white font-light hover:text-brand-purple hover:italic transition-colors">
          vip@nuitnoire.com
        </a>
        <div className="w-16 h-px bg-white/20"></div>
        <p className="font-bold text-[10px] tracking-[2px] uppercase opacity-40">Messages are monitored.</p>
      </div>
    </div>
  );
}
