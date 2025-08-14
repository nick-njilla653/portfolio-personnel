import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { SocialMediaProps } from "../types/socialMedia";

const iconSize = 35;
const backgroundIconSize = 275;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "Contactez-moi",
    description: "N'hésitez pas à me contacter par email pour toute question ou collaboration.",
    name: "gmail",
    href: "mailto:ntchagadick@gmail.com",
    icon: <SiGmail size={iconSize} />,
    backgroundIcon: <SiGmail size={backgroundIconSize} />,
    textColor: "text-red-300",
    backgroundColor: "bg-red-300",
    borderColor: "border-red-300",
    backgroundGradientColor: "bg-gradient-to-b from-red-700 to-red-900",
    colSpan: "md:col-span-2",
    isShow: true,
  },
  {
    title: "Connectons-nous",
    description: "Connectez-vous pour des collaborations ou explorez mon expérience professionnelle.",
    name: "linkedin",
    href: "https://www.linkedin.com/in/nicol-emmanuel-njilla-tchagadick-224234291",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundIcon: <LinkedinIcon size={backgroundIconSize} />,
    textColor: "text-sky-300",
    backgroundColor: "bg-sky-300",
    borderColor: "border-sky-300",
    backgroundGradientColor: "bg-gradient-to-b from-sky-700 to-sky-900",
    isShow: true,
  },
  {
    title: "Explorez le Code",
    description: "Découvrez le code source de tous mes projets sur GitHub.",
    name: "github",
    href: "https://github.com/nick-njilla653",
    icon: <GithubIcon size={iconSize} />,
    backgroundIcon: <GithubIcon size={backgroundIconSize} />,
    textColor: "text-slate-400",
    backgroundColor: "bg-slate-400",
    borderColor: "border-slate-400",
    backgroundGradientColor: "bg-gradient-to-b from-slate-900 to-slate-950",
    isShow: true,
  },
];
