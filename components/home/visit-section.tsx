import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const hours = [
  { day: "Mon – Thu", time: "10:00 – 22:00" },
  { day: "Fri – Sat", time: "10:00 – 23:00" },
  { day: "Sunday", time: "10:00 – 21:00" },
];

export function VisitSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info Side */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Visit Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We&apos;re located in the heart of Vilnius Old Town, ready to welcome you for brunch, coffee, or an evening glass of wine.
            </p>

            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">Vilniaus g. 25</p>
                  <p className="text-muted-foreground">Vilnius, LT-01119, Lithuania</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Opening Hours</h3>
                  <div className="space-y-1">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between gap-8 text-muted-foreground">
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground/70 mt-2">
                    Kitchen hours may vary. Menu availability updates automatically.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+37060012345"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +370 600 12345
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
            </div>

            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/visit#reserve">Reserve a Table</Link>
            </Button>
          </div>

          {/* Map Side */}
          <div className="relative rounded-2xl overflow-hidden bg-muted min-h-[400px] lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.2838815396564!2d25.279261315788896!3d54.68335798028234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9413000c6f6d%3A0x9e4c9c4d4b9c6d6e!2sVilniaus%20g.%2025%2C%20Vilnius%2001119!5e0!3m2!1sen!2slt!4v1699999999999!5m2!1sen!2slt"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Augustas & Barbora location"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
