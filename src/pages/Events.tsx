export default function Events() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen text-center relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[80px] rounded-full -z-10"></div>
       <span className="micro-label mb-4 block">Archive & Future</span>
      <h1 className="text-display text-6xl mb-16">ALL EVENTS</h1>
      
      <div className="glass-panel p-16 max-w-2xl mx-auto">
         <p className="text-white/60 text-lg">No current unreleased events available for the public. Join the guest list to be notified.</p>
      </div>
    </div>
  );
}
