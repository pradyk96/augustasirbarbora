import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
  { href: "/visit#reserve", label: "Reserve" },
];

const hours = [
  { day: "Monday", time: "10:00 – 22:00" },
  { day: "Tuesday", time: "10:00 – 22:00" },
  { day: "Wednesday", time: "10:00 – 22:00" },
  { day: "Thursday", time: "10:00 – 22:00" },
  { day: "Friday", time: "10:00 – 23:00" },
  { day: "Saturday", time: "10:00 – 23:00" },
  { day: "Sunday", time: "10:00 – 21:00" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold">Augustas & Barbora</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A romantic Parisian garden café in the heart of Vilnius. Experience premium brunch, artisan desserts, fine wines, and specialty coffee in an elegant floral setting.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <div className="space-y-2">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between text-sm">
                  <span className="text-primary-foreground/80">{item.day}</span>
                  <span className="text-primary-foreground">{item.time}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-primary-foreground/60 mt-4">
              Kitchen hours may vary. Brunch available Wed 10:00–14:00.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground">Vilniaus g. 25</p>
                  <p className="text-primary-foreground/80">Vilnius, LT-01119</p>
                  <p className="text-primary-foreground/80">Lithuania</p>
                </div>
              </div>
              <a
                href="tel:+37060012345"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                +370 600 12345
              </a>
              <a
                href="mailto:hello@augustasbarbora.lt"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                hello@augustasbarbora.lt
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Augustas & Barbora. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
