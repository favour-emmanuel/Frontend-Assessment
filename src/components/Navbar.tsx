import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../Redux/slice/themeSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme?.theme === "Dark") {
      dispatch(setTheme({ theme: "Light" }));

      localStorage.setItem("myapptheme", "Light");
    } else {
      dispatch(setTheme({ theme: "Dark" }));
      localStorage.setItem("myapptheme", "Dark");
    }
  };
  return <header className={``}></header>;
};

export default Navbar;
