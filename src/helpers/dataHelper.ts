import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faDatabase,
  faEnvelope,
  faGraduationCap,
  faHome,
  faLaptop,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

type ImenuItems = {
  label: string;
  url?: string;
  icon: IconProp | null;
  id?: string;
};

interface IjourneyData {
  icon: IconProp;
  img: string;
  title: string;
  text: string;
}

interface IpreviewData {
  img: string;
  title: string;
  text: string;
  usage: string;
  // icon: IconProp;
}

interface IStackIcon {
  icon: string;
}

interface IMERNIcon {
  icon: string;
  label: string;
}

interface ItoolData {
  img: string;
  title: string;
  text: string;
  usage: string;
}

export default function dataHelper() {
  //données pour le menu items
  const navItems: ImenuItems[] = [
    { label: "Home", url: "/", icon: faHome },
    { label: "Technos", url: "/techno", icon: faCode },
    { label: "Projects", url: "", icon: faLaptop },
    { label: "Contact", icon: faEnvelope, id: "btn-contact" },
  ];

  const overviewData = [
    { label: "Projects", statistic: 15 },
    { label: "Repositories", statistic: 21, id: "second-column" },
    { label: "Contributions", statistic: 7, id: "last-column" },
  ];

  const journeyData: IjourneyData[] = [
    {
      icon: faGraduationCap,
      img: "/images/day1.jpg",
      text: "",
      title: "High School grade",
    },
    {
      icon: faUniversity,
      img: "/images/day2.jpg",
      text: "",
      title: "University License 1",
    },
  ];

  const previewTechno: IpreviewData[] = [
    {
      img: "/images/react.png",
      title: "React js",
      text: "The ultimate and popular Javascript Framework for the frontend to build a powerful view",
      usage: "Frontend",
    },
    {
      img: "/images/next.jpg",
      title: "Next js",
      text: "Next.js enables to create full-stack Web applications by extending the latest React features",
      usage: "Frontend",
    },
    {
      img: "/images/node.jpg",
      title: "Node js",
      text: "Framework javascript for the serverside, for a flexible and powerful backend",
      usage: "Backend",
    },
  ];

  const socialIcons = [
    { icon: "/images/facebook .png" },
    { icon: "/images/github.png" },
    { icon: "/images/linkedin.png" },
  ];

  const StackIcon: IStackIcon[] = [
    { icon: "/images/react-icones.png" },
    { icon: "/images/next-icon.svg" },
    { icon: "/images/node-icon.png" },
    { icon: "/images/type-icon.svg" },
  ];

  const MERNIcon: IMERNIcon[] = [
    { icon: "/images/mongodb-icon.svg", label: "M" },
    { icon: "/images/express-icon.png", label: "E" },
    { icon: "/images/react-icones.png", label: "R" },
    { icon: "/images/node-icon.png", label: "N" },
    { icon: "/images/next-icon.svg", label: "N" },
  ];

  const toolData: ItoolData[] = [
    {
      img: "/images/tools/react.png",
      title: "React js",
      text: "The ultimate and popular Javascript Framework for the frontend to build a powerful view",
      usage: "Frontend",
    },
    {
      img: "/images/tools/next.png",
      title: "Next js",
      text: "Next.js enables to create full-stack Web applications by extending the latest React features",
      usage: "Frontend",
    },
    {
      img: "/images/tools/node.png",
      title: "Node js",
      text: "Framework javascript for the serverside, for a flexible and powerful backend",
      usage: "Backend",
    },
  ];

  return {
    navItems,
    overviewData,
    journeyData,
    previewTechno,
    socialIcons,
    StackIcon,
    MERNIcon,
    toolData
  };
}
