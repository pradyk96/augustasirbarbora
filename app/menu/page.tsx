import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { menuCategories, isServingNow, getAvailabilityText } from "@/lib/menu-data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Menu | Augustas & Barbora",
  description: "Explore our menu of premium brunch, artisan desserts, fine wines, specialty coffee, and more at Augustas & Barbora in Vilnius.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
              Our Menu
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From morning brunch to evening wine, discover our carefully curated offerings
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuCategories.map((category) => {
                const serving = isServingNow(category.availability);
                const availabilityText = getAvailabilityText(category.availability);

                return (
                  <Link
                    key={category.id}
                    href={`/menu/${category.id}`}
                    className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted"
                  >
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            serving ? "bg-green-400" : "bg-destructive"
                          }`}
                        />
                        <span className="text-xs text-card/80 uppercase tracking-wider">
                          {serving ? "Serving Now" : "Not Available"} • {availabilityText}
                        </span>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <h2 className="font-serif text-2xl font-semibold text-card mb-1">
                            {category.name}
                          </h2>
                          {category.description && (
                            <p className="text-card/70 text-sm">{category.description}</p>
                          )}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center group-hover:bg-card/20 transition-colors">
                          <ArrowRight className="w-5 h-5 text-card" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="py-8 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground text-sm">
              Menu availability updates automatically based on the time. Prices are in EUR. Allergies? Please inform our staff.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
