import { Icon } from "@iconify/react/dist/iconify.js";
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

export const departments = [
  {
    title: "Engineering and Technology",
    description:
      "Innovative solutions in software development, cloud solutions, security analysis, and DevOps.",
    link: "/engineering-technology",
    image: "path/to/engineering-icon.svg",
  },
  {
    title: "General Services",
    description:
      "Comprehensive services including procurement, equipment servicing, and hiring to meet all your operational needs.",
    link: "/general-services",
    image: "path/to/general-services-icon.svg",
  },
  {
    title: "Innovation Hub",
    description:
      "Cutting-edge research and development focusing on the latest technologies and innovative solutions.",
    link: "/innovation-hub",
    image: "path/to/innovation-hub-icon.svg",
  },
];

export interface icons {
  icon?: JSX.Element;
}
export const socialIcons: icons[] = [
  {
    icon: <Icon icon="bi:instagram" />,
  },
  {
    icon: <Icon icon="ic:sharp-facebook" />,
  },
  {
    icon: <Icon icon="line-md:twitter-x" />,
  },
  {
    icon: <Icon icon="bi:linkedin" />,
  },
];

export const platform = [
  {
    text: "Platform",
  },
  {
    text: "Plans & Pricing",
  },
  {
    text: "Personal Ai Manager",
  },
  {
    text: "Ai Business Writer",
  },
];
