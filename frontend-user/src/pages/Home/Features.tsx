import { Globe, Award, Users, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Globe, title: 'Domastic Network', description: 'Access to exclusive destinations across 150+ places India' },
    { icon: Award, title: 'Premium Quality', description: 'Award-winning service with carefully curated travel experiences' },
    { icon: Users, title: 'Expert Guides', description: 'Professional local guides ensuring authentic cultural immersion' },
    { icon: Heart, title: 'Personalized Care', description: '24/7 customer support for a seamless travel experience' },
  ] as const;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-6 w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-secondary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
