import Image from "next/image";
import venue from "../../../public/images/venue.jpg";
import activities from "../../../public/images/activities.jpg";
import hero from "../../../public/images/hero.jpg";

const experiences = [
  {
    title: "Culinary Excellence",
    description: "Indulge in a bespoke menu crafted by our Michelin-starred chefs, featuring the freshest local seafood and traditional Amalfi flavors.",
    image: venue
  },
  {
    title: "Coastal Adventures",
    description: "Treat your guests to a private sunset cruise along the coast or a guided tour of the historic ruins of Pompeii.",
    image: activities
  },
  {
    title: "Villa Wellness",
    description: "A full-service spa and infinity pool overlooking the sea, providing the ultimate relaxation before and after the big day.",
    image: hero
  }
];

export default function Experience() {
  return (
    <div className="bg-background">
      <section className="py-24 px-6 md:px-12 text-center bg-accent/5">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-foreground">The Experience</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto italic">
          More than just a wedding. A journey for the soul.
        </p>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {experiences.map((exp, index) => (
          <div 
            key={exp.title} 
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
          >
            <div className="w-full md:w-1/2 h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
              <Image src={exp.image} alt={exp.title} fill className="object-cover" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Discovery</span>
              <h2 className="text-4xl font-serif text-foreground">{exp.title}</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
