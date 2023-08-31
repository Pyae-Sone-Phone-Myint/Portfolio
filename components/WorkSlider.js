// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/p-6.png",
          link: "https://gowilds-d.netlify.app/",
        },
        {
          title: "title",
          path: "/p-7.png",
          link: "https://goldwilds-dashboard.netlify.app/",
        },
        {
          title: "title",
          path: "/p-5.png",
          link: "https://my-portfolio-d.netlify.app/",
        },
        {
          title: "title",
          path: "/p-4.png",
          link: "https://teamd-contactify.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/p-5.png",
          link: "https://my-portfolio-d.netlify.app/",
        },
        {
          title: "title",
          path: "/p-4.png",
          link: "https://teamd-contactify.netlify.app/",
        },
        {
          title: "title",
          path: "/p-6.png",
          link: "https://gowilds-d.netlify.app/",
        },
        {
          title: "title",
          path: "/p-7.png",
          link: "https://goldwilds-dashboard.netlify.app/",
        },
      ],
    },
  ],
};

// icons
import { BsArrowRight } from "react-icons/bs";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link
                    href={image.link}
                    target="_blank"
                    key={index}
                    className=" relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className=" flex items-center justify-center relative overflow-hidden">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className=" absolute inset-0 bg-[#131424] opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                      {/* title */}
                      <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                        <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className=" delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
