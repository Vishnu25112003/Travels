import SectionTitle from "../components/ui/SectionTitle";
import ContactInfo, { Phone, Mail, MapPin, Clock } from "../components/ui/ContactInfo";
import ContactCta from "../components/ui/ContactCta";
import Contact from "./Home/Contact"; // reuse the existing form+hero only here (not on Home extras)

const Contacts: React.FC = () => {
  const info = [
    { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 99887 76655"] },
    { icon: Mail, title: "Email", lines: ["support@varshatravels.com", "bookings@varshatravels.com"] },
    { icon: MapPin, title: "Office", lines: ["MG Road, Kochi, Kerala", "Mon–Sat, 9:00 AM – 7:00 PM"] },
    { icon: Clock, title: "Working Hours", lines: ["Support: 24/7", "Office: Mon–Sat"] },
  ];

  return (
    <div className="pt-18 md:pt-24 bg-white">
      {/* Header */}
      <section className="pb-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Contact Us" subtitle="We’d love to help plan your next journey. Choose any channel below and our team will assist you." align="left" />
        </div>
      </section>

      {/* Contact info cards */}
      <ContactInfo items={info} />

      {/* CTA */}
      <ContactCta
        title="Need a quick quote?"
        subtitle="Share your route and dates—we'll respond within minutes during business hours."
        primaryText="Chat on WhatsApp"
        primaryHref="https://wa.me/919876543210"
        secondaryText="Call Now"
        secondaryHref="tel:+919876543210"
      />

      {/* Form + hero (reused) */}
      <Contact />
    </div>
  );
};

export default Contacts;
