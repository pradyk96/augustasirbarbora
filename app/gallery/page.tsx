"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { X } from "lucide-react";

const galleryImages = [
  // Interior
  { src: "/images/gallery/interior-1.jpg", alt: "Floral ceiling with roses", category: "interior" },
  { src: "/images/gallery/interior-2.jpg", alt: "Pink velvet seating area", category: "interior" },
  { src: "/images/gallery/interior-3.jpg", alt: "Wine bar area", category: "interior" },
  { src: "/images/gallery/interior-4.jpg", alt: "Green velvet sofa corner", category: "interior" },
  { src: "/images/gallery/exterior.jpg", alt: "Café exterior in Vilnius", category: "interior" },
  { src: "/images/gallery/details.jpg", alt: "Elegant table details", category: "interior" },
  { src: "/images/hero-cafe.jpg", alt: "Main dining room", category: "interior" },
  
  // Food
  { src: "/images/gallery/food-1.jpg", alt: "Brunch spread", category: "food" },
  { src: "/images/gallery/food-2.jpg", alt: "Dessert display", category: "food" },
  { src: "/images/gallery/brunch-spread.jpg", alt: "Full brunch table", category: "food" },
  { src: "/images/gallery/dessert-display.jpg", alt: "Pastry showcase", category: "food" },
  { src: "/images/menu/royal-breakfast.jpg", alt: "Royal breakfast", category: "food" },
  { src: "/images/menu/avocado-toast.jpg", alt: "Avocado toast", category: "food" },
  { src: "/images/menu/eggs-benedict.jpg", alt: "Eggs Benedict", category: "food" },
  { src: "/images/menu/cottage-cheese-pancakes.jpg", alt: "Cottage cheese pancakes", category: "food" },
  { src: "/images/menu/salmon-bagel.jpg", alt: "Salmon bagel", category: "food" },
  { src: "/images/menu/cheesecake.jpg", alt: "Homemade cheesecake", category: "food" },
  { src: "/images/menu/chocolate-mousse.jpg", alt: "Chocolate mousse", category: "food" },
  { src: "/images/menu/passion-fruit-tartlet.jpg", alt: "Passion fruit tartlet", category: "food" },
  { src: "/images/menu/macaron.jpg", alt: "French macaron", category: "food" },
  
  // Drinks
  { src: "/images/gallery/drinks-1.jpg", alt: "Rosé and champagne", category: "drinks" },
  { src: "/images/gallery/drinks-2.jpg", alt: "Specialty coffees", category: "drinks" },
  { src: "/images/menu/pink-latte.jpg", alt: "Signature pink latte", category: "drinks" },
  { src: "/images/menu/cappuccino.jpg", alt: "Cappuccino", category: "drinks" },
  { src: "/images/menu/matcha.jpg", alt: "Matcha latte", category: "drinks" },
  { src: "/images/menu/champagne.jpg", alt: "Champagne service", category: "drinks" },
  { src: "/images/menu/irish-coffee.jpg", alt: "Irish coffee", category: "drinks" },
  { src: "/images/menu/affogato.jpg", alt: "Pistachio affogato", category: "drinks" },
];

const categories = ["all", "interior", "food", "drinks"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
              Gallery
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Step inside our romantic Parisian garden café
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  onClick={() => setLightboxImage(image.src)}
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                    index % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-card" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt="Gallery image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
