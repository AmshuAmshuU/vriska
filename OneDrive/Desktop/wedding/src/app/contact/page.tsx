export default function Contact() {
  return (
    <div className="bg-background">
      <section className="py-24 px-6 md:px-12 text-center bg-accent/5">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-foreground">Begin Your Story</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto italic">
          We would be honored to host your celebration. Please fill out the form below to receive our digital brochure and availability.
        </p>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-3xl shadow-2xl border border-accent/20">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/60">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-accent/5 border-b border-accent/30 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/60">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-accent/5 border-b border-accent/30 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/60">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full bg-accent/5 border-b border-accent/30 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/60">Guest Count</label>
                <select className="w-full bg-accent/5 border-b border-accent/30 py-3 focus:outline-none focus:border-primary transition-colors text-foreground appearance-none">
                  <option>Up to 50</option>
                  <option>50 - 100</option>
                  <option>100 - 200</option>
                  <option>200+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-foreground/60">Your Vision</label>
              <textarea 
                rows={4} 
                placeholder="Tell us about your dream wedding..." 
                className="w-full bg-accent/5 border-b border-accent/30 py-3 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full bg-primary hover:bg-primary/90 text-white font-serif text-xl py-6 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12 text-center">
        <p className="text-foreground/50 text-sm">
          Or reach us directly at <span className="text-primary underline">concierge@serenityamalfi.com</span>
        </p>
      </section>
    </div>
  );
}
