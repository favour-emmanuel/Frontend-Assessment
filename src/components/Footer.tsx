import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";
import { Link } from "react-router-dom";
import { navItems, platform, socialIcons } from "../constants";

const Footer = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`${
        theme?.theme === "Light"
          ? "bg-appLightGray text-appBlack"
          : "bg-appBlack text-white"
      }`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:px-16 px-6 my-10">
        {/* Company Information */}
        <div>
          <Link to="/" className="text-base font-extrabold">
            tech<span className="text-appGreen">Space</span>
          </Link>
          <p className="text-[15px] lg:text-base w-full py-2 lg:max-w-[20rem]">
            Discover innovative solutions and world-class services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3  grid-cols-1 gap-8 w-full lg:max-w-[35rem] lg:my-0 my-5">
          {/* Quick Links */}
          <div>
            <h3 className="text-base lg:text-lg font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2 font-light">
              {navItems.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="hover:underline hover:text-appGreen text-sm lg:text-base hover:duration-300 hover:ease-in-out"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-base lg:text-lg font-bold mb-4">Platform</h3>
            <ul className="flex flex-col space-y-2 font-light">
              {platform.map((item, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="hover:underline hover:text-appGreen text-sm lg:text-base hover:duration-300 hover:ease-in-out"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base lg:text-lg font-bold mb-4">Contact Us</h3>
            <ul className="text-sm lg:text-base space-y-2 font-light">
              <li>
                <a
                  href="mailto:info@techspace.com"
                  className="hover:text-appGreen hover:duration-300 hover:ease-in-out"
                >
                  info@techspace.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+123456789"
                  className="hover:text-appGreen hover:duration-300 hover:ease-in-out"
                >
                  +1 (234) 567-89
                </a>
              </li>
              <li>
                <p>123 TechSpace Avenue, Suite 100</p>
                <p>City, State, Zip Code</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`mt-6 py-3.5 flex justify-between items-center text-sm  w-full lg:px-16 px-6 ${
          theme?.theme === "Light"
            ? "bg-appGreen"
            : "bg-appBlack border-t border-t-[#1a1a1ab3]"
        } text-white `}
      >
        <p className="text-sm">&copy; 2024 TechSpace. All rights reserved.</p>
        <div className="flex justify-center gap-5">
          {socialIcons.map((icon, index) => (
            <p
              key={index}
              className={`text-base lg:text-lg ${
                theme?.theme === "Dark"
                  ? "hover:text-appGreen"
                  : "hover:text-appBlack"
              }  w-full cursor-pointer`}
            >
              {icon.icon}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
