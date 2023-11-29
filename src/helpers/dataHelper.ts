import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode, faHome, faLaptop } from "@fortawesome/free-solid-svg-icons";

interface ImenuItems {
  label: string;
  url: string;
  icon: IconProp;
}

export default function dataHelper() {
  //données pour le menu items
  const navItems: ImenuItems[] = [
    { label: "Home", url: "", icon: faHome },
    { label: "Technos", url: "", icon: faCode },
    { label: "Projects", url: "", icon: faLaptop },
  ];

  return { navItems };
}
