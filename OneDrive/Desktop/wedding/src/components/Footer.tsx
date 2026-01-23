import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-accent/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand & Address */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-widest text-foreground">SERENITY</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              123 Paradise Lane,<br />
              Amalfi Coast, Italy<br />
              +39 012 345 6789
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/destination" className="hover:text-primary transition-colors">The Destination</Link></li>
              <li><Link href="/experience" className="hover:text-primary transition-colors">Guest Experience</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Book Your Stay</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-accent/20 text-center text-xs text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Serenity Wedding Destination. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
