export default function GuestList() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto min-h-screen text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[80px] rounded-full -z-10"></div>
      
      <span className="micro-label mb-4 block">Access Request</span>
      <h1 className="text-display text-6xl md:text-8xl mb-8">THE LIST</h1>
      <p className="text-subheading mb-12">
        Submit your details. If selected, you will receive a location 24 hours prior to the event.
      </p>
      
      <form className="glass-panel p-8 md:p-12 space-y-6 text-left relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-3">
          <label className="font-bold text-[10px] tracking-[2px] uppercase opacity-70">Full Name</label>
          <input type="text" className="w-full bg-black/40 border border-white/10 p-4 focus:outline-none focus:border-brand-purple transition-all" />
        </div>
        <div className="space-y-3">
          <label className="font-bold text-[10px] tracking-[2px] uppercase opacity-70">Instagram Handle</label>
          <input type="text" placeholder="@" className="w-full bg-black/40 border border-white/10 p-4 focus:outline-none focus:border-brand-purple transition-all" />
        </div>
        <div className="space-y-3">
          <label className="font-bold text-[10px] tracking-[2px] uppercase opacity-70">Email</label>
          <input type="email" className="w-full bg-black/40 border border-white/10 p-4 focus:outline-none focus:border-brand-purple transition-all" />
        </div>
        
        <button type="submit" className="w-full btn-primary text-sm mt-8 border border-transparent">
          Request Access
        </button>
      </form>
    </div>
  );
}
