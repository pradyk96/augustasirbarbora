import Link from "next/link";
import Image from "next/image";
import { menuCategories, isServingNow, getAvailabilityText } from "@/lib/menu-data";

const highlights = [
  {
    id: "brunch",
    name: "Brunch",
    description: "Wed 10:00–14:00",
    image: "/images/menu/royal-breakfast.jpg",
    href: "/menu/brunch",
  },
  {
    id: "drinks",
    name: "Coffee & Tea",
    description: "Daily 10:00–22:00",
    image: "/images/menu/pink-latte.jpg",
    href: "/menu/drinks",
  },
  {
    id: "wine",
    name: "Wine & Champagne",
    description: "Daily 10:00–22:00",
    image: "/images/menu/champagne.jpg",
    href: "/menu/wine",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Daily 10:00–22:00",
    image: "/images/menu/cheesecake.jpg",
    href: "/menu/desserts",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Explore Our Offerings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From morning brunch to evening wine, discover what makes us special
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const category = menuCategories.find((c) => c.id === item.id);
            const serving = category ? isServingNow(category.availability) : false;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        serving ? "bg-green-400" : "bg-destructive"
                      }`}
                    />
                    <span className="text-xs text-card/80 uppercase tracking-wider">
                      {serving ? "Serving Now" : "Not Available"}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-card mb-1">
                    {item.name}
                  </h3>
                  <p className="text-card/70 text-sm">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
