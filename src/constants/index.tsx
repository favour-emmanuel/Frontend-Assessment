import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export interface navItem {
  label: string;
  path: string;
}

export const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Department",
    path: "/departments",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Service",
    path: "/services",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const heroVideos = [
  {
    src: video1,
    type: "video/mp4",
  },
  { src: video2, type: "video/mp4" },
];
