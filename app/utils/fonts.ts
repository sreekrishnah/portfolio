import { Fira_Code, Port_Lligat_Sans, League_Spartan, Timmana } from "next/font/google";

export const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fira-code",
});

export const portLligat = Port_Lligat_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-port-lligat",
});

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
});

export const timmana = Timmana({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-timmana",
});

// Export a grouped object for convenience
export const fonts = {
  firaCode,
  portLligat,
  leagueSpartan,
  timmana,
};
