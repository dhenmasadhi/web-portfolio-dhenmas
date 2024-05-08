import imageSrc from "../assets/dhenmas.jpg";

const About = () => {
  return (
    <div className="bg-about-bg bg-cover bg-center min-h-screen flex flex-col justify-center items-center pb-4">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="flex justify-center md:justify-end">
          <h1 className="max-w-fit rounded-br-3xl rounded-tl-3xl border-[3px] text-3xl md:text-5xl font-bold px-3 py-2 bg-slate-700 bg-opacity-50 mb-8 mt-4 md:mr-16 shadow-lg">
            About Me
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center md:justify-center">
            <img
              className="h-[350px] md:h-[540px] rounded-lg md:rounded-[30px] shadow-2xl"
              src={imageSrc}
              alt="Profile"
            />
          </div>
          <div className="flex md:py-8">
            <p className="text-base font-extralight rounded-xl p-5 bg-slate-700 shadow-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              beatae sapiente dolorem maiores non praesentium aut facere aliquid
              dolores culpa repellat possimus recusandae temporibus quae
              asperiores facilis provident assumenda animi, nemo veniam corrupti
              a. Dignissimos deleniti pariatur nobis reprehenderit aliquid fugit
              a nemo placeat dolores. Eaque culpa dolor qui perferendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
