import Image from "next/image";
import hero from "../../../public/images/hero.jpg";
import venue from "../../../public/images/venue.jpg";

export default function Destination() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="py-24 px-6 md:px-12 text-center bg-accent/5">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-foreground">The Destination</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto italic">
          "Where the mountains meet the sea, and magic happens."
        </p>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-foreground underline decoration-primary/30 underline-offset-8">Amalfi Coast, Italy</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Located in the heart of the Amalfi Coast, Serenity sits atop a private cliffside overlooking the Tyrrhenian Sea. The area is renowned for its colorful villages, steep rugged cliffs, and emerald waters.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8">
              <div>
                <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-2">Climate</h4>
                <p className="text-sm text-foreground/70">Mediterranean. Best between April and October.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-2">Access</h4>
                <p className="text-sm text-foreground/70">Private boat transfer or scenic luxury drive from Naples.</p>
              </div>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our venue, Villa Serenity, is a masterpiece of Italian baroque architecture, featuring terraced lemon groves and marble staircases that lead directly to a private cove.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-96 relative rounded-2xl overflow-hidden mt-12 shadow-xl">
               <Image src={hero} alt="Destination View 1" fill className="object-cover" />
            </div>
            <div className="h-96 relative rounded-2xl overflow-hidden shadow-xl">
               <Image src={venue} alt="Destination View 2" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Location specifics */}
      <section className="py-24 px-6 md:px-12 bg-primary/10">
         <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-serif">The Serenity Vibe</h2>
            <p className="text-xl font-light text-foreground/80 leading-relaxed">
              Quiet luxury. Authentic Italian heritage. Intimacy amidst grandeur. 
              Serenity is not just a location; it's a feeling of complete peace and celebration.
            </p>
         </div>
      </section>
    </div>
  );
}
