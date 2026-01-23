import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Destination", href: "/destination" },
  { name: "Experience", href: "/experience" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-foreground hover:text-primary transition-colors">
              SERENITY
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
