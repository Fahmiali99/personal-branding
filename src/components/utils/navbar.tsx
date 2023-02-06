import { BsPerson, BsWindowDock, BsFileEarmarkArrowDown } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
export const data = [
  {
    title: "Home",
    Icons: AiOutlineHome,
    href: "/",
  },
  {
    title: "About",
    Icons: BsPerson,
    href: "/about",
  },
  {
    title: "Portfolio",
    Icons: BsWindowDock,
    href: "/portfolio",
  },
  {
    title: "Resume",
    Icons: BsFileEarmarkArrowDown,
    href: "/resume",
  },
];
