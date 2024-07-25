import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTheme } from "./Redux/slice/themeSlice";
import Navbar from "./components/Navbar";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("myapptheme");
    if (theme) {
      //@ts-ignore
      dispatch(setTheme({ theme: theme }));
    } else {
      dispatch(setTheme({ theme: "Light" }));
    }
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default App;
