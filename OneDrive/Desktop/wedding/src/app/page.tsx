import Image from "next/image";
import Link from "next/link";
import hero from "../../public/images/hero.jpg";
import venue from "../../public/images/venue.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src={hero}
          alt="Wedding Destination Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">Your Dream Wedding Awaits</h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto opacity-90">
            Experience timeless elegance and breathtaking beauty at Serenity, the Amalfi Coast's premier luxury wedding destination.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105"
          >
            Inquire Today
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8 text-foreground">Welcome to Serenity</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-12">
            Nestled on the rugged cliffs of the Italian coastline, Serenity offers an unparalleled setting for your special day. From our sun-drenched terraces to our historic villa, every corner of our estate is designed to create memories that last forever.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-primary text-foreground">Breathtaking Views</h3>
              <p className="text-sm text-foreground/60">Panoramic vistas of the Mediterranean sea from every vantage point.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-primary text-foreground">Historic Charm</h3>
              <p className="text-sm text-foreground/60">A 17th-century villa meticulously restored with modern luxury.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-primary text-foreground">World-Class Service</h3>
              <p className="text-sm text-foreground/60">Dedicated planning team and award-winning culinary staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Venue Preview */}
      <section className="py-24 px-6 md:px-12 bg-accent/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={venue}
              alt="Venue Preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl font-serif text-foreground">The Perfect Backdrop</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether you envision an intimate gathering or a grand celebration, our versatile spaces can be tailored to your unique vision. Our grand terrace can host up to 200 guests under the stars.
            </p>
            <Link 
              href="/destination" 
              className="inline-block border-b-2 border-primary text-primary font-medium pb-1 transition-all hover:text-primary/70 hover:border-primary/50"
            >
              Explore our venues
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

