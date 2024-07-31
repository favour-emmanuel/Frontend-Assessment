import { useSelector } from "react-redux";
import aboutImg from "../assets/about-img.jpg";
import { selectTheme } from "../Redux/slice/themeSlice";

const AboutPage = () => {
  const theme = useSelector(selectTheme);

  return (
    <>
      <section
        className={`${
          theme?.theme === "Dark"
            ? "bg-appBlack text-white"
            : "bg-appLightGray text-appBlack"
        } py-10 lg:py-12 lg:px-16 px-6`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <img
                src={aboutImg}
                alt="Our Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-sm sm:text-base lg:text-lg">
              <p className="leading-relaxed mb-4">
                Welcome to TechSpace, where creativity meets technology. Founded
                in 2020, our company has consistently been at the cutting edge
                of innovation, delivering state-of-the-art solutions to clients
                across the globe.
              </p>
              <p className=" leading-relaxed mb-4">
                Our mission is to transform ideas into reality, leveraging
                advanced technology and a customer-centric approach to provide
                unparalleled services. Our diverse team of experts brings a
                wealth of experience and passion to every project.
              </p>
              <p className=" leading-relaxed mb-4">
                From developing groundbreaking software to pioneering new
                technologies, Acme Innovations is dedicated to pushing the
                boundaries of what's possible. Join us as we continue to
                redefine the future of technology.
              </p>
              <p className=" leading-relaxed">
                Together, we innovate, inspire, and achieve extraordinary
                results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
