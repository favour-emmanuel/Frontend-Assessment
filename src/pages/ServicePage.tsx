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
      <h1 className="text-3xl font-bold mb-2">Our Services</h1>
      <p className="text-lg">
        Explore our range of services designed to meet your needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
