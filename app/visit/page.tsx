"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Instagram, Facebook, Mail, CheckCircle } from "lucide-react";

const hours = [
  { day: "Monday", time: "10:00 – 22:00" },
  { day: "Tuesday", time: "10:00 – 22:00" },
  { day: "Wednesday", time: "10:00 – 22:00" },
  { day: "Thursday", time: "10:00 – 22:00" },
  { day: "Friday", time: "10:00 – 23:00" },
  { day: "Saturday", time: "10:00 – 23:00" },
  { day: "Sunday", time: "10:00 – 21:00" },
];

export default function VisitPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setFormSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
              Visit Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We&apos;re located in the heart of Vilnius Old Town, ready to welcome you
            </p>
          </div>
        </section>

        {/* Contact Info & Map */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Info Side */}
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">Address</h3>
                      <p className="text-muted-foreground">Vilniaus g. 25</p>
                      <p className="text-muted-foreground">Vilnius, LT-01119</p>
                      <p className="text-muted-foreground">Lithuania</p>
                      <a
                        href="https://maps.google.com/?q=Vilniaus+g.+25+Vilnius+Lithuania"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm mt-2 inline-block"
                      >
                        Get directions
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-3">Opening Hours</h3>
                      <div className="space-y-2">
                        {hours.map((item) => (
                          <div key={item.day} className="flex justify-between text-muted-foreground">
                            <span>{item.day}</span>
                            <span>{item.time}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground/70 mt-4 border-t border-border pt-4">
                        Brunch available Wednesday 10:00–14:00. Kitchen hours may vary.
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">Phone</h3>
                      <a
                        href="tel:+37060012345"
                        className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        +370 600 12345
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">Email</h3>
                      <a
                        href="mailto:hello@augustasbarbora.lt"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@augustasbarbora.lt
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-muted flex items-center justify-center hover:bg-accent/50 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-foreground" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-muted flex items-center justify-center hover:bg-accent/50 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6 text-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Side */}
              <div className="relative rounded-2xl overflow-hidden bg-muted min-h-[400px] lg:min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.2838815396564!2d25.279261315788896!3d54.68335798028234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9413000c6f6d%3A0x9e4c9c4d4b9c6d6e!2sVilniaus%20g.%2025%2C%20Vilnius%2001119!5e0!3m2!1sen!2slt!4v1699999999999!5m2!1sen!2slt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
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

        {/* Reservation Form */}
        <section id="reserve" className="py-16 md:py-20 bg-secondary scroll-mt-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Reserve a Table
              </h2>
              <p className="text-muted-foreground text-lg">
                Book your table for a memorable dining experience
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-card rounded-2xl p-8 md:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your reservation request has been received. We will contact you shortly to confirm your booking.
                </p>
                <Button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      date: "",
                      time: "",
                      guests: "",
                      message: "",
                    });
                  }}
                  variant="outline"
                  className="rounded-full"
                >
                  Make Another Reservation
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+370 600 00000"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="20"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      placeholder="2"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Input
                      id="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="message">Special Requests (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any special requests or dietary requirements..."
                      className="rounded-lg min-h-[100px]"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Request Reservation
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    We will confirm your reservation via phone or email within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Interior Image */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/gallery-2.jpg"
            alt="Augustas & Barbora interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl text-card max-w-xl">
                &ldquo;A romantic escape in the heart of Vilnius&rdquo;
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
