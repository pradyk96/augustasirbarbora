import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/interior-1.jpg"
          alt="Augustas & Barbora café interior with floral ceiling"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-card mb-4 text-balance">
            Augustas & Barbora
          </h1>
          <p className="text-lg md:text-xl text-card/90 mb-8 font-light tracking-wide">
            Brunch • Desserts • Wine • Coffee
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-card text-foreground hover:bg-card/90 px-8"
            >
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-card text-card hover:bg-card/10 px-8 bg-transparent"
            >
              <Link href="/visit">Visit Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
