import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faEnvelope,
  faGraduationCap,
  faHome,
  faLaptop,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

interface ImenuItems {
  label: string;
  url?: string;
  icon: IconProp;
  id?: string;
}

interface IjourneyData {
  icon: IconProp;
  img: string;
  title: string;
  text: string;
}

export default function dataHelper() {
  //données pour le menu items
  const navItems: ImenuItems[] = [
    { label: "Home", url: "", icon: faHome },
    { label: "Technos", url: "", icon: faCode },
    { label: "Projects", url: "", icon: faLaptop },
    { label: "Contact", icon: faEnvelope, id: "btn-contact" },
  ];

  const overviewData = [
    { label: "Projects", statisitic: 15 },
    { label: "Repositories", statisitic: 21 },
    { label: "Contributions", statisitic: 5, id: "last-column" },
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

  return { navItems, overviewData, journeyData };
}
