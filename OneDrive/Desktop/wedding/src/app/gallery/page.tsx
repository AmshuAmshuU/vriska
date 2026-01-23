import Image from "next/image";

const galleryImages = [
  { src: "/images/hero.jpg", alt: "Sunset Wedding Setup" },
  { src: "/images/venue.jpg", alt: "Table Setting Detail" },
  { src: "/images/activities.jpg", alt: "Boat Excursion" },
  { src: "/images/gallery1.jpg", alt: "Floral Arch" },
  { src: "/images/gallery2.jpg", alt: "Bride and Groom in Lemon Grove" },
  { src: "/images/gallery3.jpg", alt: "Night Reception with Fairy Lights" },
];

export default function Gallery() {
  return (
    <div className="bg-background">
      <section className="py-24 px-6 md:px-12 text-center bg-accent/5">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-foreground">Gallery of Moments</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto italic">
          A glimpse into the magic we create at Serenity.
        </p>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, index) => (
            <div key={index} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
