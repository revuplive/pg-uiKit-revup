import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.menu,
  setting: lightColors.menuIcon,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.menu,
  setting: darkColors.menuIcon,
  hover: "#473d5d",
};
