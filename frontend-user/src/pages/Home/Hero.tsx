import Button from "../../components/ui/Button";
import '@dotlottie/player-component';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-accent/40 to-white">
      {/* decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Left: content */}
          <div className="order-2 md:order-1 col-span-12 md:col-span-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="inline-block text-xs font-semibold tracking-wide text-primary bg-primary/10 rounded-full px-3 py-1">Premium road trips made simple</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary leading-tight">
                  Travel smarter with Varsha Travels
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                  Comfortable vehicles, verified drivers, and flexible plans—so you can focus on the journey, not the logistics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg">Book Now</Button>
                <Button size="lg" variant="outline">View Fleet</Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Destinations</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-xs sm:text-sm text-gray-600">Happy Travelers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-xs sm:text-sm text-gray-600">Support</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-white">AC Vehicles</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-white">Verified Drivers</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-white">Flexible Plans</span>
              </div>
            </div>
          </div>

          {/* Right: animated visual */}
          <div className="order-1 md:order-2 col-span-12 md:col-span-6">
            <div className="relative h-[280px] sm:h-[360px] md:h-[520px] lg:h-[560px] flex items-center justify-center">
              {/* glow */}
              <div aria-hidden className="absolute inset-0 m-auto h-60 w-60 md:h-80 md:w-80 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl border bg-white/70 backdrop-blur shadow-2xl overflow-hidden">
                <dotlottie-player
                  class="block w-full h-full"
                  src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
                  background="transparent"
                  speed="1"
                  autoplay
                  loop
                ></dotlottie-player>

                {/* glass info bar */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur px-3 py-2 shadow border">
                  <span className="text-xs font-semibold text-secondary">AC</span>
                  <span className="text-xs text-gray-600">•</span>
                  <span className="text-xs font-semibold text-secondary">7 Seats</span>
                  <span className="text-xs text-gray-600">•</span>
                  <span className="text-xs font-semibold text-secondary">Driver Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
