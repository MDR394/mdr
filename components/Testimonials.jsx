"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import web1 from "../public/lifebahn.png";
import web2 from "../public/thrillx.io.png";
import web3 from "../public/selfempoweredminds.png";
import web4 from "../public/marsha-glauch.de.png";
import web5 from "../public/losangelestattooshop.png";
import web6 from "../public/musclefuelmeals.png";

const websites = [
  { src: web1, link: "http://lifebahn.org/" },
  { src: web2, link: "https://thrillx.io/" },
  { src: web3, link: "https://selfempoweredminds.com/" },
  { src: web4, link: "https://marsha-glauch.de/" },
  { src: web5, link: "https://losangelestattooshop.com/" },
  { src: web6, link: "https://musclefuelmeals.com/" },
];

const Testimonials = () => {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        loop={true} // Enables infinite loop
        autoplay={{
          delay: 3000, // Delay in ms (3 sec per slide)
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        speed={2000} // Slide transition speed (2 seconds for smooth effect)
        breakpoints={{
          1024: { slidesPerView: 2 }, // Desktop
          768: { slidesPerView: 2 }, // Tablets
          0: { slidesPerView: 1 }, // Mobile
        }}
      >
        {websites.map((site, index) => (
          <SwiperSlide key={index}>
            <Link href={site.link} target="_blank">
              <Image
                className="rounded-lg object-cover w-full h-auto"
                src={site.src}
                alt={`Website ${index + 1}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
