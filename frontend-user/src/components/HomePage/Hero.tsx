import Button from "../ui/Button";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-12 pb-4 md:pt-20 md:pb-12 bg-white flex items-center md:min-h-screen">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Content left */}
          <div className="order-2 md:order-1 col-span-12  md:col-span-6 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">Adventure Awaits</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Explore the world with confidence and style. Our premium travel experiences combine luxury with adventure.
                </p>
              </div>

              <div className="flex gap-4">
                <Button size="lg">Book Now</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-600">Destinations</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-gray-600">Happy Travelers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animation right */}
          <div className="order-1 md:order-2 py-0 md:py-0 col-span-12 md:col-span-6 h-[186px] md:h-full mt-10">
            <div className="relative w-full max-w-none mx-auto h-[280px] md:h-[480px] lg:h-[560px] flex items-end justify-center overflow-hidden">
<DotLottieReact
                className="block transform scale-[1.08] translate-y-3 md:scale-100 md:translate-y-0"
                src="https://lottie.host/77184fc1-5dd1-4a60-980e-dfd00bebeca9/THui9R1xZa.lottie"
                style={{ width: '100%', height: '100%', display: 'block' }}
                autoplay
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;