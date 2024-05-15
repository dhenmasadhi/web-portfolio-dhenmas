import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For large screens and down
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For medium screens and down
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="py-8 md:mb-8 text-center text-4xl">Projects</h1>
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="w-3/4 mx-auto"
      >
        <div className="mb-20">
          <Slider {...settings}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="px-2">
                <div className="max-w-sm bg-[#1a1e23] rounded-lg shadow">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        Project Title
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-white">
                      This is sample project description random things are here
                      in description This is sample project lorem ipsum
                      generator for dummy content
                    </p>
                    <span className="rounded bg-green-700 p-1 text-xs font-normal text-white hover:cursor-pointer hover:bg-green-950">
                      Database
                    </span>
                    <a
                      className="text-white"
                      href="https://github.com/dhenmasadhi"
                    >
                      <FaGithub className="mt-2 ml-auto w-6 h-6 hover:scale-125" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
