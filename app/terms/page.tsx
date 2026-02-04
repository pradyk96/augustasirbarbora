import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service | Augustas & Barbora",
  description: "Terms of service for Augustas & Barbora café in Vilnius, Lithuania.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 min-h-screen bg-background">
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    1. General Terms
                  </h2>
                  <p>
                    By accessing and using the Augustas & Barbora website, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use our website.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    2. Reservations
                  </h2>
                  <p className="mb-4">
                    Reservation requests made through our website are subject to availability and confirmation. Please note:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Reservations are not confirmed until you receive confirmation from us</li>
                    <li>We reserve the right to cancel reservations in case of no-show or late arrival</li>
                    <li>Please arrive within 15 minutes of your reserved time</li>
                    <li>For parties larger than 8, please contact us directly</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    3. Menu and Pricing
                  </h2>
                  <p>
                    Menu items and prices displayed on our website are subject to change without notice. Availability of certain items may vary based on time of day and day of week. Our staff will inform you of any changes when you visit.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    4. Intellectual Property
                  </h2>
                  <p>
                    All content on this website, including text, images, logos, and design, is the property of Augustas & Barbora and is protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    5. Limitation of Liability
                  </h2>
                  <p>
                    We strive to provide accurate information on our website, but we do not guarantee the completeness or accuracy of any content. We are not liable for any damages arising from your use of this website or reliance on information provided.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    6. Governing Law
                  </h2>
                  <p>
                    These terms are governed by the laws of the Republic of Lithuania. Any disputes shall be resolved in the courts of Vilnius, Lithuania.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    7. Contact
                  </h2>
                  <p>
                    For questions about these terms, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong className="text-foreground">Augustas & Barbora</strong><br />
                    Vilniaus g. 25<br />
                    Vilnius, LT-01119, Lithuania<br />
                    Email: hello@augustasbarbora.lt<br />
                    Phone: +370 600 12345
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
