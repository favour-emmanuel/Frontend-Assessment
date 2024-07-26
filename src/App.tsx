import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTheme } from "./Redux/slice/themeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import EngineeringPage from "./pages/EngineeringPage";
import InnovationPage from "./pages/InnovationPage";
import ContactPage from "./pages/ContactPage";
import DepartmentPage from "./pages/DepartmentPage";

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

  return (
    <>
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
    </>
  );
};

export default App;
