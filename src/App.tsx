import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DepartmentPage from "./pages/DepartmentPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import { selectTheme, setTheme } from "./Redux/slice/themeSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("myapptheme");
    if (theme) {
      //@ts-ignore
      dispatch(setTheme({ theme: theme }));
    } else {
      dispatch(setTheme({ theme: "Dark" }));
    }
  }, []);

  const theme = useSelector(selectTheme);

  return (
    <div
      className={`${
        theme?.theme === "Dark" ? "bg-appBlack" : "bg-appLightGray"
      } `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/departments" element={<DepartmentPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Route>
          <Route
            path="/*"
            element={
              <h1 className="flex justify-center text-2xl font-bold">
                Page not found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
