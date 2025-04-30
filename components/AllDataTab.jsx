"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import web1 from "../public/elixiremporium.png";
import web2 from "../public/leantree.png";
import web3 from "../public/selfempoweredminds.png";
import web4 from "../public/marsha-glauch.de.png";
import otpisani from "../public/otpisani.png";
import losttapes from "../public/losttapes.png";
import trockenbau from "../public/trockenbau-nettetal.png";
import web5 from "../public/losangelestattooshop.png";
import web6 from "../public/musclefuelmeals.png";
import web7 from "../public/coiffeurteam.png";

const websites = [
  { src: web1, link: "https://elixiremporium.co.uk/" },
  {
    src: web2,
    link: "https://leantree.com/?utm_source=website&utm_medium=null&utm_campaign=null&utm_id=null&utm_term=null&utm_content=null&e-filter-9ea59a5-fallkategorie=alle-groskunden",
  },
  { src: web3, link: "https://selfempoweredminds.com/" },
  { src: web4, link: "https://marsha-glauch.de/" },
  { src: otpisani, link: "https://otpisani.ba/" },
  { src: losttapes, link: "https://dev.losttapes.band/" },
  { src: trockenbau, link: "https://dev.trockenbau-nettetal.de/" },
  { src: web5, link: "https://losangelestattooshop.com/" },
  { src: web6, link: "https://musclefuelmeals.com/" },
  { src: web7, link: "https://coiffeurteam-munz.de/" },
];

const AllDataTab = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={2000}
        breakpoints={{
          1024: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
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

      {/* Custom Navigation Arrows */}
      <div className="custom-prev absolute left-[-50px] top-1/2 -translate-y-1/2 cursor-pointer text-white text-3xl p-3 rounded-full">
        ❮
      </div>
      <div className="custom-next absolute right-[-50px] top-1/2 -translate-y-1/2 cursor-pointer text-white text-3xl  p-3 rounded-full">
        ❯
      </div>
    </section>
  );
};

export default AllDataTab;
