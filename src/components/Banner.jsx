"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

const Banner = () => {
  return (
    <section>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[80vh]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center relative flex items-center"
            style={{ backgroundImage: "url('/assets/Banner-1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative text-white max-w-7xl mx-auto px-4 animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Book Appointments <br />
                <span className="text-blue-400">With Top Doctors</span>
              </h1>

              <p className="mb-6 max-w-lg text-gray-200">
                Get the best healthcare service easily from your home.
              </p>

              <Link
                href="/appointments"
                className="px-6 py-3 bg-[#157a83] rounded-lg hover:bg-teal-600 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center relative flex items-center"
            style={{ backgroundImage: "url('/assets/Banner-2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative text-white max-w-7xl mx-auto px-4 animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Trusted & Verified <br />
                <span className="text-blue-400">Medical Experts</span>
              </h1>

              <p className="mb-6 max-w-lg text-gray-200">
                Choose from experienced doctors across multiple specialties.
              </p>

              <Link
                href="/appointments"
                className="px-6 py-3 bg-[#157a83] rounded-lg hover:bg-teal-600 transition"
              >
                Explore Doctors
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center relative flex items-center"
            style={{ backgroundImage: "url('/assets/Banner-3.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative text-white max-w-7xl mx-auto px-4 animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Easy & Fast <br />
                <span className="text-blue-400">Booking System</span>
              </h1>

              <p className="mb-6 max-w-lg text-gray-200">
                Book your appointment in seconds with a smooth experience.
              </p>

              <Link
                href="/appointments"
                className="px-6 py-3 bg-[#157a83] rounded-lg hover:bg-teal-600 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;