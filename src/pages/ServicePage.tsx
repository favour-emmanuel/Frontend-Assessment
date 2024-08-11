import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { services } from "../constants";
import { selectTheme } from "../Redux/slice/themeSlice";

const ServicePage = () => {
  const theme = useSelector(selectTheme);

  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceClick = (id: number) => {
    setSelectedService(selectedService === id ? null : id);
  };

  return (
    <section
      className={`${
        theme?.theme === "Dark"
          ? "bg-appBlack text-white"
          : "bg-appLightGray text-appBlack"
      } py-10 lg:py-12 lg:px-16 px-6`}
    >
      <h2
        className={`text-3xl font-bold my-3 ${
          theme?.theme === "Dark" ? "text-appGreen" : ""
        }`}
      >
        Our Services
      </h2>
      <p className="text-sm lg:text-base font-light mb-5 w-full lg:max-w-[35rem]">
        Explore our range of services designed to meet your needs. Our dedicated
        team provides comprehensive solutions designed to address specific
        challenges and drive your business forward.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-4 ${
              theme?.theme === "Dark"
                ? "bg-[#191919ee] text-gray-300"
                : "bg-[#f7f9f9] text-black"
            } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="flex items-center mb-4">
              <Icon icon={service.icon} className="w-12 h-12 text-appGreen" />
              <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
            </div>
            <p>{service.description}</p>
            {selectedService === service.id && (
              <div className="mt-4">
                <p>{service.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
