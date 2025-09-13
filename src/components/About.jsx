import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Our
        <span className="underline underline-offset-4 decoration-1 font-light">
          Story
        </span>
      </h1>
      <p className="text-primary-text-muted max-w-200 text-center mb-8">
        Our baristas are passionate about their craft and serve only top-quality
        coffee, carefully selected and roasted by Johan & Nyström. Our menu is
        simple, fresh, and thoughtful with focus on seasonal ingredients and
        sustainable choices
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-10 w-full">
        <img
          src={assets.barista}
          alt="Barista preparing a hot coffee"
          className="w-full md:w-1/2 max-w-lg rounded-2xl shadow-2xl"
        />

        <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left ">
          <h3 className="font-bold mb-6 text-3xl">Looking for our menu?</h3>
          {/* Define webpage url in .env file */}
          <div className="flex justify-center md:justify-start">
            <a
              href={import.meta.env.VITE_PUBLIC_WEB}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-light text-primary-text-dark font-medium"
            >
              Visit our website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
