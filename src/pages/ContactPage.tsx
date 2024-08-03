import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";

const ContactPage = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`${
        theme?.theme === "Light"
          ? "bg-appLightGray text-appBlack"
          : "bg-appBlack text-white"
      }  `}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 justify-between max-w-[68rem] w-full mx-auto lg:px-0 px-5 my-14">
        <div className="w-full ">
          <div className="border-appGreen border flex justify-center items-center rounded-full py-2.5 mb-3 px-2 max-w-[8rem]">
            <h3>Get in Touch</h3>
          </div>
          <h1 className="font-extrabold text-4xl text-appGreen">
            Let's connect
          </h1>
          <p className="text-base font-light my-2.5 max-w-[22rem]">
            Reach out to me directly! Whether you have questions or just want to
            say hello, I'm here to chat. I can't wait to hear from you!
          </p>
        </div>
        <div className="lg:mt-0 mt-5 w-full">
          <form action="">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div
                className={`${
                  theme?.theme === "Dark"
                    ? "bg-black/50"
                    : "bg-[#f3f3f3] text-appBlack"
                } border border-appGreen lg:max-w-[18rem] py-2.5 px-2 rounded-md w-full`}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full text-sm lg:text-[15px] outline-none bg-transparent"
                />
              </div>
              <div
                className={`${
                  theme?.theme === "Dark"
                    ? "bg-black/50"
                    : "bg-[#f3f3f3] text-appBlack"
                } border border-appGreen lg:max-w-[18rem] py-2.5 px-2 rounded-md w-full`}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-sm lg:text-[15px] outline-none bg-transparent "
                />
              </div>
            </div>
            <div
              className={`${
                theme?.theme === "Dark"
                  ? "bg-black/85"
                  : "bg-[#f3f3f3] text-appBlack"
              } border border-appGreen text-apptextAlt  py-2.5 px-2 rounded-md w-full mt-4`}
            >
              <input
                type="phone"
                placeholder="Your phone no."
                name="clientNo"
                className="w-full outline-none bg-transparent"
              />
            </div>
            <div
              className={`${
                theme?.theme === "Dark"
                  ? "bg-black/85"
                  : "bg-[#f3f3f3] text-appBlack"
              } border border-appGreen  py-3 px-2 rounded-md w-full mt-4 h-[11rem]`}
            >
              <textarea
                className="bg-transparent outline-none w-full h-full"
                placeholder="Message"
                name="clientMsg"
              ></textarea>
            </div>
            <div>
              <button className="bg-appGreen text-appLightGray text-sm text-apptextAlt  py-4 px-2 rounded-lg w-full mt-4">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
