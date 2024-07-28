import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";

const Hero = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`${
        theme?.theme === "Dark"
          ? "bg-appBlack text-white"
          : "bg-appLightGray text-appBlack"
      } flex flex-col items-center py-6 lg:py-20 px-6 lg:px-10`}
    >
      <h1 className="my-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-center tracking-wide lg:max-w-[50rem]">
        Discover <span className="text-appGreen">innovative solutions</span> and
        world class services
      </h1>
      <p className="my-2 text-center text-sm sm:text-base lg:text-lg lg:max-w-[38rem] leading-6">
        {" "}
        Transforming ideas into reality with cutting-edge technology,
        exceptional services, and groundbreaking research.
      </p>
      <div className="flex gap-8 my-4">
        <button
          className={`bg-appGreen py-2.5 px-3 rounded-md text-sm ${
            theme?.theme === "Light" ? "text-white" : ""
          }`}
        >
          Start for free
        </button>
        <button className="border border-appGreen py-2.5 px-3 rounded-md text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
