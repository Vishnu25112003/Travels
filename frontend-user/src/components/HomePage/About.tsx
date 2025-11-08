import SectionTitle from "../ui/SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<SectionTitle title="About Our Fleet" subtitle="Discover our premium collection of vehicles designed for unforgettable journeys" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://www.tatamotors.com/wp-content/themes/TataMotors/images/Passenger-Vehicle-desktop.jpg"
                alt="Our Fleet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-secondary">Premium Travel Vehicles</h3>
            <p className="text-gray-700 leading-relaxed">
              Our carefully curated fleet combines comfort, safety, and style. Each vehicle is maintained to the highest standards and equipped with modern amenities for your comfort.
            </p>

            <div className="space-y-4">
              {[{ title: 'Luxury SUVs', description: 'Spacious and elegant for ultimate comfort' }, { title: 'Adventure Vans', description: 'Perfect for group travels and expeditions' }, { title: 'Premium Sedans', description: 'Sophisticated travel experience' }].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-1 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-secondary">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;