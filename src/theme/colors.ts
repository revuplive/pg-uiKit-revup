import { Colors } from "./types";

export const baseColors = {
  failure: "#800020",
  primary: "#EC3E3F",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#372871",
  success: "#4040ff",
  warning: "#FFB237",
  textColour: "#ffffff",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#EC3E3F",
  textColour: "#ffffff",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#2D2159",
  menuIcon: "#372871",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  menu: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
  red: "#EC3E3F",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#ffffff",
  textColour: "#000000",
  secondary: "#30264f",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#ffffff",
  textDisabled: "#666171",
  textSubtle: "#ffffff",
  menuIcon: "#A893CA",
  borderColor: "#524B63",
  card: "#30264f",
  menu: "#121021",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
  red: "#d4444c",
};
