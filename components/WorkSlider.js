// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "gowilds",
          path: "/p-6.png",
          link: "https://gowilds-d.netlify.app/",
        },
        {
          title: "goldwilds-dashboard",
          path: "/p-7.png",
          link: "https://goldwilds-dashboard.netlify.app/",
        },
        {
          title: "my-portfolio",
          path: "/p-5.png",
          link: "https://my-portfolio-d.netlify.app/",
        },
        {
          title: "contactify",
          path: "/p-4.png",
          link: "https://teamd-contactify.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "database-design",
          path: "/web-pos1.png",
          link: "https://drawsql.app/teams/testing-99/diagrams/web-pos",
        },
        {
          title: "database-design",
          path: "/blog1.png",
          link: "https://drawsql.app/teams/testing-99/diagrams/blog",
        },
        {
          title: "database-design",
          path: "/contact-api1.png",
          link: "https://drawsql.app/teams/testing-99/diagrams/contact-api",
        },
        {
          title: "pos-workflow",
          path: "/workflow.png",
          link: "https://www.figma.com/file/w8mePlytBLrtHJqxbx5rrk/Web-pos?type=whiteboard&node-id=0%3A1&t=1IhdsLUXvoKdCkLx-1",
        },
      ],
    },
    {
      images: [
        {
          title: "web-pos-api",
          path: "/pos.png",
          link: "https://github.com/Pyae-Sone-Phone-Myint/Web-POS#readme",
        },
        {
          title: "blog",
          path: "/blog-api1.png",
          link: "https://github.com/Pyae-Sone-Phone-Myint/Blog.git",
        },
        {
          title: "contact-api",
          path: "/contact.png",
          link: "https://github.com/Pyae-Sone-Phone-Myint/contact-api-developing#readme",
        },
        {
          title: "POS development",
          path: "/pos-ui.png",
          link: "https://webpos1.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "product design",
          path: "/product-design.png",
          link: "https://www.figma.com/file/qEjAblCjW9tyAi9aaMuy8J/pos-system(copy)?type=design&node-id=52-1248&mode=design&t=RmTuG5LZEyaZCUZC-0",
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
                          <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 uppercase">
                            {image.title}
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
