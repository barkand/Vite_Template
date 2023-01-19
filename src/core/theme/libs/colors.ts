import { Colors as c } from "../components";

const Colors: any = {
  red: {
    name: "red",
    light: { primary: c.PLightRed, secondary: c.SLightRed },
    dark: { primary: c.PDarkRed, secondary: c.SDarkRed },
  },

  blue: {
    name: "blue",
    light: { primary: c.PLightBlue, secondary: c.SLightBlue },
    dark: { primary: c.PDarkBlue, secondary: c.SDarkBlue },
  },

  green: {
    name: "green",
    light: { primary: c.PLightGreen, secondary: c.SLightGreen },
    dark: { primary: c.PDarkGreen, secondary: c.SDarkGreen },
  },

  purple: {
    name: "purple",
    light: { primary: c.PLightPurple, secondary: c.SLightPurple },
    dark: { primary: c.PDarkPurple, secondary: c.SDarkPurple },
  },

  yellow: {
    name: "yellow",
    light: { primary: c.PLightOrange, secondary: c.SLightOrange },
    dark: { primary: c.PDarkOrange, secondary: c.SDarkOrange },
  },

  grey: {
    name: "grey",
    light: { primary: c.PLightGrey, secondary: c.SLightGrey },
    dark: { primary: c.PDarkGrey, secondary: c.SDarkGrey },
  },
};

const Background: any = {
  light: {
    primary: import.meta.env.VITE_Background_light_primary,
    secondary: import.meta.env.VITE_Background_light_secondary,
    tertiary: import.meta.env.VITE_Background_light_tertiary,
  },
  dark: {
    primary: import.meta.env.VITE_Background_dark_primary,
    secondary: import.meta.env.VITE_Background_dark_secondary,
    tertiary: import.meta.env.VITE_Background_dark_tertiary,
  },
};

export { Colors, Background };
