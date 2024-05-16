import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { PROJECTS } from "../constans/index";

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
            {PROJECTS.map((project, index) => (
              <div key={index} className="px-2">
                <div className="max-w-sm bg-[#1a1e23] rounded-lg shadow h-full flex flex-col">
                  {" "}
                  {/* Tetapkan tinggi tetap untuk kartu */}
                  <a href="#">
                    <img
                      className="rounded-t-lg w-full h-48 object-cover"
                      src={project.img}
                      alt=""
                    />{" "}
                    {/* Tetapkan gambar agar sesuai dengan dimensi tetap */}
                  </a>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    {" "}
                    {/* Tetapkan tinggi tetap untuk konten */}
                    <div>
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white h-12 overflow-hidden">
                          {project.title}
                        </h5>{" "}
                        {/* Tetapkan tinggi tetap untuk judul */}
                      </a>
                      <p
                        className="mb-3 font-light text-white overflow-hidden"
                        style={{ maxHeight: "3rem" }}
                      >
                        {project.description}
                      </p>{" "}
                      {/* Atur maksimum tinggi untuk deskripsi dan overflow */}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {" "}
                      {/* Menggunakan flexbox untuk teknologi */}
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded bg-green-700 p-1 text-xs font-normal text-white hover:cursor-pointer hover:bg-green-950"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      className="text-white mt-5 ml-auto"
                      href={project.github}
                    >
                      <FaGithub className="w-6 h-6 hover:scale-125" />
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
