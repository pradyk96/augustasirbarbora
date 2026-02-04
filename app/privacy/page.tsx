import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | Augustas & Barbora",
  description: "Privacy policy for Augustas & Barbora café in Vilnius, Lithuania.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 min-h-screen bg-background">
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="mb-4">
                    When you visit our website or make a reservation, we may collect the following information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Reservation details (date, time, number of guests)</li>
                    <li>Special requests or dietary requirements</li>
                    <li>Usage data and cookies for website improvement</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="mb-4">
                    We use your information to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and confirm your reservations</li>
                    <li>Communicate with you about your booking</li>
                    <li>Improve our services and website experience</li>
                    <li>Send promotional materials (only with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    3. Data Protection
                  </h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and only accessed by authorized personnel.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    4. Your Rights
                  </h2>
                  <p className="mb-4">
                    Under GDPR, you have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal data</li>
                    <li>Rectify inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                    <li>Data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    5. Cookies
                  </h2>
                  <p>
                    Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. Essential cookies are required for the website to function properly.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    6. Contact Us
                  </h2>
                  <p>
                    If you have questions about this privacy policy or your personal data, please contact us at:
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
