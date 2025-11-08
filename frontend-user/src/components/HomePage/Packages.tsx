import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../ui/Button";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
// @ts-expect-error: CSS side-effect imports for Swiper styles
import "swiper/css";
// @ts-expect-error: CSS side-effect imports for Swiper styles
import "swiper/css/navigation";
// @ts-expect-error: CSS side-effect imports for Swiper styles
import "swiper/css/pagination";

interface Destination {
  id: number;
  name: string;
  description: string;
  descriptionLine2: string;
  image: string;
}

const destinationsData: Destination[] = [
  {
    id: 1,
    name: "Ooty",
    description:
      "Experience majestic mountain peaks, pristine lakes, and charming villages.",
    descriptionLine2:
      "Perfect for adventure seekers and nature lovers seeking alpine beauty.",
    image: "/ooty.jpg",
  },
  {
    id: 2,
    name: "Goa",
    description:
      "Discover tropical beaches, ancient temples, and vibrant island culture.",
    descriptionLine2:
      "Your gateway to exotic island experiences and timeless traditions.",
    image: "/goa.png",
  },
  {
    id: 3,
    name: "India Gate",
    description:
      "Explore golden deserts, stunning dunes, and rich cultural heritage.",
    descriptionLine2:
      "Immerse yourself in the majesty of desert landscapes and traditions.",
    image: "/indiagate.jpg",
  },
  {
    id: 4,
    name: "Ladakh",
    description:
      "Visit iconic landmarks, world-class museums, and historic city centers.",
    descriptionLine2:
      "Explore centuries of art, culture, and architectural wonders.",
    image: "/ladakh.jpg",
  },
  {
    id: 5,
    name: "Vagamon",
    description:
      "Witness incredible wildlife, vast savannas, and unforgettable natural wonders.",
    descriptionLine2:
      "Experience the raw beauty of Africa's most iconic wilderness.",
    image: "/vagamon.jpg",
  },
  {
    id: 6,
    name: "Wayanad",
    description:
      "Relax on pristine beaches, swim in crystal-clear waters, and enjoy island bliss.",
    descriptionLine2:
      "Discover paradise with world-class resorts and perfect tropical getaways.",
    image: "/wayanad.png",
  },
];

import SectionTitle from "../ui/SectionTitle";

const Packages: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const elPrev = document.querySelector(".dest-prev") as HTMLElement | null;
    const elNext = document.querySelector(".dest-next") as HTMLElement | null;
    const swiper = swiperRef.current;
    if (swiper && elPrev && elNext) {
      swiper.params.navigation = {
        ...(swiper.params.navigation as object),
        prevEl: elPrev,
        nextEl: elNext,
      };
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section
      id="destinations"
      className="py-20 bg-gradient-to-b from-accent to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Destinations"
          subtitle="Explore our handpicked destinations to the world's most breathtaking locations"
        />

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!pb-10"
          >
            {destinationsData.map((dest) => (
              <SwiperSlide key={dest.id}>
                <div className="mx-auto max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-[400px] md:h-[420px] flex flex-col group cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden rounded-t-2xl">
                    <img
                      src={dest.image || "/placeholder.svg"}
                      alt={dest.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5 space-y-3 flex-grow flex flex-col min-h-[150px] md:min-h-[170px]">
                    <h3 className="text-lg md:text-xl font-bold text-secondary">
                      {dest.name}
                    </h3>
                    <div className="space-y-2 overflow-hidden">
                      <p className="text-sm text-gray-600">
                        {dest.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {dest.descriptionLine2}
                      </p>
                    </div>
                    <div className="pt-4 mt-auto">
                      <Button className="w-full">Explore</Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons (hooked to Swiper) */}
          <button
            className="dest-prev absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:left-0 md:w-12 md:h-12 md:-translate-x-6 lg:-translate-x-16 bg-white/90 text-primary rounded-full flex items-center justify-center hover:bg-white shadow-lg ring-1 ring-black/5 z-10 backdrop-blur-sm"
            aria-label="Previous"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="dest-next absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:right-0 md:w-12 md:h-12 md:translate-x-6 lg:translate-x-16 bg-white/90 text-primary rounded-full flex items-center justify-center hover:bg-white shadow-lg ring-1 ring-black/5 z-10 backdrop-blur-sm"
            aria-label="Next"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
