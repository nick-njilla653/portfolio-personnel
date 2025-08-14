import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm, FaGolang } from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiLaravel,
  SiPhp,
  SiRedux,
  SiVuedotjs,
  SiFirebase,
  SiReactrouter,
  SiReacthookform,
  SiReacttable,
  SiMysql,
  SiMongodb,
  SiAstro,
  SiBun,
  SiYarn,
  SiNestjs,
  SiSupabase,
  SiJest,
  SiDocker,
  SiKotlin,
  SiPython,
  SiSpring,
  SiDjango,
  SiFlutter,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiAnaconda,
  SiFigma,
  SiCanva,
  SiAndroid,
} from "react-icons/si";

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
    isActive?: boolean;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  // Langages de programmation
  Java: {
    icon: <SiSpring size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  Python: {
    icon: <SiPython size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: "bg-orange-600",
    color: "text-orange-600",
    isActive: true,
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-600",
    isActive: true,
  },
  PHP: {
    icon: <SiPhp size={iconSize} />,
    background: "bg-indigo-400",
    color: "text-indigo-400",
    isActive: true,
  },

  // Frameworks Frontend
  React: {
    icon: <SiReact size={iconSize} />,
    background: "bg-cyan-400",
    color: "text-cyan-400",
    isActive: true,
  },
  "React.js": {
    icon: <SiReact size={iconSize} />,
    background: "bg-cyan-400",
    color: "text-cyan-400",
    isActive: true,
  },
  NextJS: {
    icon: <SiNextdotjs size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-50",
    isActive: true,
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
    isActive: true,
  },

  // Frameworks Backend
  "Spring Boot": {
    icon: <SiSpring size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: true,
  },
  Django: {
    icon: <SiDjango size={iconSize} />,
    background: "bg-green-700",
    color: "text-green-700",
    isActive: true,
  },
  "Node.js": {
    icon: <SiNodedotjs size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: true,
  },
  Express: {
    icon: <SiExpress size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-800",
    isActive: true,
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-700",
    isActive: true,
  },

  // Mobile Development
  Flutter: {
    icon: <SiFlutter size={iconSize} />,
    background: "bg-blue-400",
    color: "text-blue-400",
    isActive: true,
  },
  "Android Studio": {
    icon: <SiAndroid size={iconSize} />,
    background: "bg-green-500",
    color: "text-green-500",
    isActive: true,
  },
  Kotlin: {
    icon: <SiKotlin size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: true,
  },

  // Intelligence Artificielle
  "Machine Learning": {
    icon: <BsRobot size={iconSize} />,
    background: "bg-fuchsia-700",
    color: "text-fuchsia-700",
    isActive: true,
  },
  "Deep Learning": {
    icon: <BsRobot size={iconSize} />,
    background: "bg-purple-600",
    color: "text-purple-600",
    isActive: true,
  },
  TensorFlow: {
    icon: <SiTensorflow size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  PyTorch: {
    icon: <SiPytorch size={iconSize} />,
    background: "bg-red-500",
    color: "text-red-500",
    isActive: true,
  },
  "Scikit-learn": {
    icon: <SiScikitlearn size={iconSize} />,
    background: "bg-orange-600",
    color: "text-orange-600",
    isActive: true,
  },
  Pandas: {
    icon: <SiPandas size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  NumPy: {
    icon: <SiNumpy size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-600",
    isActive: true,
  },

  // Bases de données
  MySQL: {
    icon: <SiMysql size={iconSize} />,
    background: "bg-cyan-700",
    color: "text-cyan-700",
    isActive: true,
  },
  PostgreSQL: {
    icon: <BiLogoPostgresql size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  MongoDB: {
    icon: <SiMongodb size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: true,
  },

  // Outils et plateformes
  Docker: {
    icon: <SiDocker size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-500",
    isActive: true,
  },
  Firebase: {
    icon: <SiFirebase size={iconSize} />,
    background: "bg-amber-500",
    color: "text-amber-500",
    isActive: true,
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    background: "bg-emerald-500",
    color: "text-emerald-500",
    isActive: true,
  },
  GitHub: {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    isActive: true,
  },

  // Outils de développement
  "Visual Studio Code": {
    icon: <SiGithub size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  "IntelliJ IDEA": {
    icon: <SiGithub size={iconSize} />,
    background: "bg-purple-500",
    color: "text-purple-500",
    isActive: true,
  },
  Anaconda: {
    icon: <SiAnaconda size={iconSize} />,
    background: "bg-green-500",
    color: "text-green-500",
    isActive: true,
  },
  "Google Colab": {
    icon: <SiJupyter size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  Figma: {
    icon: <SiFigma size={iconSize} />,
    background: "bg-purple-500",
    color: "text-purple-500",
    isActive: true,
  },
  Canva: {
    icon: <SiCanva size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },

  // Package Managers
  Npm: {
    icon: <FaNpm size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-500",
    isActive: true,
  },
  Yarn: {
    icon: <SiYarn size={iconSize} />,
    background: "bg-violet-800",
    color: "text-sky-400",
    isActive: true,
  },
  Bun: {
    icon: <SiBun size={iconSize} />,
    background: "bg-orange-100",
    color: "text-yellow-50",
    isActive: true,
  },
};
