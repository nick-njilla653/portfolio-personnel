import Link from "next/link";
import { LuDownload as DownloadIcon } from "react-icons/lu";

const Portfolio = () => {
  const PORTFOLIO_URL =
    "https://www.canva.com/design/DAGGNurMYa0/Qz-ESp1akKih_dBsdV0_0w/edit?utm_content=DAGGNurMYa0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

  return (
    <Link
      href={PORTFOLIO_URL}
      target="_blank"
      passHref
      className="group flex w-fit items-center gap-2 rounded-lg border border-neutral-400 bg-neutral-100  px-3 py-2 text-sm transition duration-100 hover:text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:text-neutral-200"
      data-umami-event="click_portfolio_download_button"
    >
      <DownloadIcon />
      <span>Télécharger Portfolio</span>
    </Link>
  );
};

export default Portfolio;
