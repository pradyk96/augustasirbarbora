import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { src: "/images/gallery/interior-1.jpg", alt: "Floral ceiling interior" },
  { src: "/images/menu/avocado-toast.jpg", alt: "Avocado toast" },
  { src: "/images/gallery/interior-2.jpg", alt: "Pink velvet seating" },
  { src: "/images/menu/cottage-cheese-pancakes.jpg", alt: "Cottage cheese pancakes" },
  { src: "/images/menu/salmon-bagel.jpg", alt: "Salmon bagel" },
  { src: "/images/menu/passion-fruit-tartlet.jpg", alt: "Passion fruit tartlet" },
];

export function GalleryTeaserSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              A Glimpse Inside
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Step into our romantic Parisian garden setting
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full self-start md:self-auto bg-transparent">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Link
              key={image.src}
              href="/gallery"
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
