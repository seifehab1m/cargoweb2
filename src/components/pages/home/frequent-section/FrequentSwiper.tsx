import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FrequentSwiperCard from "./FrequentSwiperCard";
import { useTranslations } from "next-intl";

export default function FrequentSwiper() {
  const totalSlides = 10;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Update window size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine slidesPerView dynamically
  const slidesPerView = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3;

  return (
    <div className="container">
      <h2>cargowebb</h2>
      <Swiper
        key={windowWidth} // Forces re-render on resize
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        slidesPerGroup={1}
        loop={false}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        onActiveIndexChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        observer={true}
        observeParents={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {[...Array(totalSlides)].map((_, index) => (
          <SwiperSlide className="py-7" key={index}>
            <FrequentSwiperCard />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Updated Pagination Component */}
      <PaginationSwiper
        currentIndex={currentIndex}
        slidesPerView={slidesPerView}
        totalSlides={totalSlides}
      />
    </div>
  );
}

function PaginationSwiper({
  currentIndex,
  slidesPerView,
  totalSlides,
}: {
  currentIndex: number;
  slidesPerView: number;
  totalSlides: number;
}) {
  const t = useTranslations("");

  return (
    <div className="flex justify-end">
      <div className="custom-pagination-container flex flex-col md:flex-row items-center gap-1">
        <span className="pagination-number text-darkGray text-nowrap">
          {Math.min(currentIndex + slidesPerView, totalSlides)} {t("of")} {totalSlides}
        </span>
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
}
