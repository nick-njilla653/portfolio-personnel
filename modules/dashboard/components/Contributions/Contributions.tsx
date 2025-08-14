"use client";

import Link from "next/link";
import useSWR from "swr";
import { BsGithub as GithubIcon } from "react-icons/bs";

import Overview from "./Overview";
import Calendar from "./Calendar";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import ContributionsSkeleton from "./ContributionsSkeleton";
import EmptyState from "@/common/components/elements/EmptyState";
import { GITHUB_ACCOUNTS } from "@/common/constants/github";
import { fetcher } from "@/services/fetcher";

interface ContributionsProps {
  endpoint: string;
}

const Contributions = ({ endpoint }: ContributionsProps) => {
  const { data, isLoading, error } = useSWR(endpoint, fetcher);
  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;

  const { github_url, is_active } = GITHUB_ACCOUNTS;

  if (!is_active) return null;

  return (
    <section className="space-y-2">
      <SectionHeading title="Contributions GitHub" icon={<GithubIcon />} />
      <SectionSubHeading>
        <p>Mes contributions et activités sur GitHub</p>
        <Link
          href={github_url}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          @{GITHUB_ACCOUNTS.username}
        </Link>
      </SectionSubHeading>

      {error ? (
        <EmptyState message="Erreur lors du chargement des données" />
      ) : isLoading ? (
        <ContributionsSkeleton />
      ) : (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </section>
  );
};

export default Contributions;
