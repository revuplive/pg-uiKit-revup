import { Login } from "../WalletModal/types";

export interface LangType {
  code: string;
  language: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
  setting: string;
  hover: string;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
}

export interface MenuEntry {
  label: string;
  icon: string;
  badge?: string;
  badgeLightColor?: string;
  badgeDarkColor?: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
}

export interface SocialEntry {
  label: string;
  icon: string;
  href: string;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  penguinPriceUsd?: number;
  pefiRatio?: number;
  iPefiRatio?: number;
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
  links: Array<MenuEntry>;
  socials?: Array<SocialEntry>;
  pefiBalance?: number;
  avaxBalance?: number;
  iPefiBalance?: number;
}

export interface NavProps extends PanelProps {
  account?: string;
  nickname?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
  onSettingClick?: () => void;
}
