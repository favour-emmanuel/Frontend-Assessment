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

// videos
export const heroVideos = [
  {
    src: video1,
    type: "video/mp4",
  },
  { src: video2, type: "video/mp4" },
];

// Departments section
export interface Department {
  title: string;
  description: string;
  link: string;
  image: JSX.Element;
}

export const departments: Department[] = [
  {
    title: "Engineering and Technology",
    description:
      "Innovative solutions in software development, cloud solutions, security analysis, and DevOps.",
    link: "/engineering-technology",
    image: <Icon icon="carbon:ibm-engineering-lifecycle-mgmt" />,
  },
  {
    title: "General Services",
    description:
      "Comprehensive services including procurement, equipment servicing, and hiring to meet all your operational needs.",
    link: "/general-services",
    image: <Icon icon="carbon:settings-services" />,
  },
  {
    title: "Innovation Hub",
    description:
      "Cutting-edge research and development focusing on the latest technologies and innovative solutions.",
    link: "/innovation-hub",
    image: <Icon icon="hugeicons:ai-innovation-03" />,
  },
];

// for services section
export interface Service {
  id: number;
  title: string;
  description: string;
  details: string;
  icon: string; // Icon identifier for the service
}

export const services: Service[] = [
  {
    id: 1,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud services.",
    details:
      "Our cloud solutions offer flexibility and scalability to meet your growing business needs, including storage, computing, and network services.",
    icon: "mdi:cloud",
  },
  {
    id: 2,
    title: "Procurement",
    description: "Efficient and cost-effective procurement services.",
    details:
      "We streamline the procurement process to ensure timely and cost-effective acquisition of goods and services, with a focus on transparency and efficiency.",
    icon: "mdi:shopping",
  },

  {
    id: 4,
    title: "Software Development",
    description: "Custom software solutions tailored to your needs.",
    details:
      "We develop bespoke software solutions to meet your specific requirements, including web applications, mobile apps, and enterprise software.",
    icon: "mdi:code-tags",
  },

  {
    id: 6,
    title: "DevOps Services",
    description: "Integrating development and operations for faster delivery.",
    details:
      "Our DevOps services focus on automating and streamlining development and operations processes, including continuous integration and deployment.",
    icon: "oui:integration-general",
  },
  {
    id: 7,
    title: "Research and Development",
    description: "Innovative R&D services for technology advancement.",
    details:
      "We offer R&D services to drive innovation and technological advancement, including prototype development, technology scouting, and feasibility studies.",
    icon: "carbon:development",
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
