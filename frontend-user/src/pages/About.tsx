import SectionTitle from "../components/ui/SectionTitle";
import Faq from "../components/ui/Faq";
import { Award, Compass, ShieldCheck, Users } from "lucide-react";

const AboutPage: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Happy Travelers", value: "50K+" },
    { label: "Destinations", value: "500+" },
    { label: "5★ Reviews", value: "8K+" },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      text: "Certified vehicles, verified partners, and real-time support for worry-free travel.",
    },
    {
      icon: Users,
      title: "Human Touch",
      text: "Friendly experts who care—tailored plans that match your style and budget.",
    },
    {
      icon: Compass,
      title: "Smarter Routes",
      text: "Optimized itineraries so you spend less time on roads and more at the destination.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      text: "Premium service across every touchpoint—from booking to drop-off.",
    },
  ];

  const faqs = [
    {
      q: "Do you offer custom itineraries?",
      a: "Yes. Share your dates, budget, group size, and interests. We'll build a tailored plan and suggest the best vehicle and route.",
    },
    {
      q: "Are vehicles sanitized and insured?",
      a: "Every vehicle is cleaned before a trip and fully insured. We also run periodic maintenance checks and driver verifications.",
    },
    {
      q: "What payment methods are accepted?",
      a: "UPI, credit/debit cards, bank transfer, and cash on pickup in select cases. Invoices are shared instantly via email/WhatsApp.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Free cancellation within 24 hours of booking on standard trips. For peak season or special bookings, policy may vary.",
    },
    {
      q: "Can I book multi‑city trips?",
      a: "Yes. We support custom route plans with multiple stops. Share your itinerary and we’ll optimize the plan and pricing.",
    },
    {
      q: "Do drivers speak multiple languages?",
      a: "Most drivers are comfortable in English and regional languages. If you need a specific language, let us know in advance.",
    },
    {
      q: "Is there a luggage limit?",
      a: "It depends on the vehicle class. We’ll recommend the right vehicle based on passengers and luggage volume.",
    },
    {
      q: "Do you provide child seats?",
      a: "Yes, on request. Please mention the child’s age and we’ll arrange appropriate seats subject to availability.",
    },
  ];

  return (
    <div className="pt-18 md:pt-24 bg-white">
      {/* Header */}
      <section className="pb-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="About Varsha Travels"
            subtitle="We design comfortable, reliable and memorable journeys—powered by great people and premium vehicles"
            align="left"
          />
        </div>
      </section>

      {/* Who we are */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Who we are</h3>
              <p className="text-gray-700 leading-relaxed">
                We’re a customer‑first travel partner focused on safety,
                punctuality, and comfort. From weekend escapes to long family
                vacations, we make road travel smooth with experienced drivers,
                well‑maintained vehicles, and real support when you need it.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm">
                <li className="p-3 rounded-xl border bg-white shadow-sm">
                  24/7 assistance
                </li>
                <li className="p-3 rounded-xl border bg-white shadow-sm">
                  Transparent pricing
                </li>
                <li className="p-3 rounded-xl border bg-white shadow-sm">
                  Flexible reschedules
                </li>
                <li className="p-3 rounded-xl border bg-white shadow-sm">
                  Verified drivers
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-56 sm:h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://www.tatamotors.com/wp-content/themes/TataMotors/images/Passenger-Vehicle-desktop.jpg"
                  alt="About Varsha Travels"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12 bg-accent/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white border shadow-sm p-5 md:p-6 text-center"
              >
                <p className="text-2xl md:text-3xl font-extrabold text-primary">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-secondary mb-6">
            What we stand for
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="font-semibold text-secondary mb-1">{title}</h4>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <Faq
        items={faqs.map(({ q, a }) => ({ question: q, answer: a }))}
        title="FAQs"
        align="left"
      />
    </div>
  );
};

export default AboutPage;
