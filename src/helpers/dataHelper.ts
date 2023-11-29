import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode, faEnvelope, faHome, faLaptop } from "@fortawesome/free-solid-svg-icons";

interface ImenuItems {
  label: string;
  url?: string;
  icon: IconProp;
  id ?:string
}

export default function dataHelper() {
  //données pour le menu items
  const navItems: ImenuItems[] = [
    { label: "Home", url: "", icon: faHome },
    { label: "Technos", url: "", icon: faCode },
    { label: "Projects", url: "", icon: faLaptop },
    { label: "Contact", icon: faEnvelope , id: "btn-contact" },
  ];

  return { navItems };
}
