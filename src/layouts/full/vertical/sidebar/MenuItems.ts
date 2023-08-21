import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconAperture,
  IconPlus,
  IconList
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Starter",
    icon: IconAperture,
    href: "/",
    chip: "New",
    chipColor: "secondary",
  },
  {
    navlabel: true,
    subheader: "Clients",
  },
  {
    id: uniqueId(),
    title: "Client List",
    icon: IconList,
    href: "/clients/list",
  },
  {
    id: uniqueId(),
    title: "Client Register",
    icon: IconPlus,
    href: "/clients/register",
  },
];

export default Menuitems;
