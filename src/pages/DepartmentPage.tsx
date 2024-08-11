import { useSelector } from "react-redux";
import { departments } from "../constants";
import { selectTheme } from "../Redux/slice/themeSlice";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const DepartmentPage = () => {
  const theme = useSelector(selectTheme);

  return (
    <>
      <section
        className={`${
          theme?.theme === "Dark"
            ? "bg-black text-white"
            : "bg-[#eaeaea] text-appBlack"
        } py-10 lg:py-12 lg:px-16 px-6 rounded-t-[4rem] my-14`}
      >
        <div className="container mx-auto text-center">
          <h2
            className={`text-3xl font-bold my-3 ${
              theme?.theme === "Dark" ? "text-appGreen" : ""
            }`}
          >
            Our Departments
          </h2>
          <p className="text-sm lg:text-base font-light leading-8 my-5 w-full max-w-[50rem] mx-auto">
            Explore our key areas: Engineering and Technology, where innovation
            meets expertise; General Services, offering streamlined procurement
            and servicing solutions; and the Innovation Hub, driving
            cutting-edge research and development. Each department is dedicated
            to delivering excellence and meeting your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-8 my-7">
            {departments.map((dept, index) => (
              <div
                key={index}
                className={`${
                  theme?.theme === "Light" ? "bg-appLightGray" : "bg-[#0c0c0c]"
                }  p-6 rounded-lg shadow-lg lg:w-[20rem]`}
              >
                <div
                  className={`text-2xl ${
                    theme?.theme === "Dark" ? "text-gray-300" : "text-[#232323]"
                  } mx-auto flex justify-center items-center mb-4`}
                >
                  {dept.image}
                </div>
                <h3 className="text-[16.8px] font-bold mb-2 text-[#676565]">
                  {dept.title}
                </h3>
                <p className="mb-4 lg:text-base text-sm">{dept.description}</p>
                <div className="text-sm border border-appGreen py-[8.2px] px-2 rounded-md flex justify-center items-center gap-2 max-w-[8rem] mx-auto">
                  <Link to={""} className="text-[12px]">
                    Learn More
                  </Link>
                  <span className="text-lg">
                    <Icon icon="solar:arrow-right-outline" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentPage;
