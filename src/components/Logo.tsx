import Image from "next/image";
import logo from "@/assets/logo-light.svg";

export const Logo = () => {
  return <Image src={logo} alt="Kanban logo" />;
};
