import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section id="contact" className="relative bg-white pb-12 md:pb-20">
      {/* Full-bleed image */}
      <div className="relative h-[45vh] md:h-[85vh]">
        <img
          src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?cs=srgb&dl=pexels-pixabay-35619.jpg&fm=jpg"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay tint for text contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />

        {/* Section title (overlay, non-intrusive) */}
        <div className="absolute left-4 right-4 top-6 md:left-8 md:top-10">
          <h2 className="text-primary  text-3xl md:text-5xl font-bold drop-shadow-sm">Get In Touch</h2>
          <p className="mt-2 text-white/80 text-sm md:text-base max-w-xl drop-shadow">
            We’d love to help plan your next adventure. Send us your details and we’ll get back to you.
          </p>
        </div>

        {/* Right-side overlay content (desktop/laptop only) */}
        <div className="hidden md:block absolute left-4 md:right-8 top-1/2 -translate-y-1/2 max-w-sm pl-3 text-left">
          <h3 className="text-gray-700 text-3xl font-semibold drop-shadow-sm">Plan your next journey with us</h3>
          <p className="mt-2 text-white/90 text-sm md:text-base drop-shadow">
            Tailor‑made itineraries, 24/7 support, and the best price guarantee—so you can travel smarter and worry‑free.
          </p>
        </div>
      </div>

      {/* Overlapping form: 60% inside the image, 40% outside */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative md:pb-20">
          <div className="w-full md:w-[480px] lg:w-[520px] md:absolute md:bottom-0 md:right-8 md:-translate-y-[-20%] z-10">
            <div className="bg-white/95 supports-backdrop-filter:bg-white/80 backdrop-blur rounded-2xl shadow-2xl border p-6 md:p-6">
              <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none" placeholder="Tell us about your travel plans..."></textarea>
                </div>
                <button type="submit" className="w-full px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-md">Send Message</button>
              </form>
            </div>
          </div>
          {/* Mobile: stack form below image without overlap */}
          <div className="md:hidden -mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Contact;