import React from "react";
import OverviewItem from "./OverviewItem";

interface OverviewProps {
  data: {
    websiteStats: {
      pageviews: {
        value: number;
      };
      visitors: {
        value: number;
      };
      visits: {
        value: number;
      };
      countries: {
        value: number;
      };
      events: {
        value: number;
      };
    };
  };
}

const Overview = ({ data }: OverviewProps) => {
  const pageViewsData = data?.websiteStats?.pageviews?.value ?? 0;
  const visitorsData = data?.websiteStats?.visitors?.value ?? 0;
  const visitsData = data?.websiteStats?.visits?.value ?? 0;
  const countriesData = data?.websiteStats?.countries?.value ?? 0;
  const eventsData = data?.websiteStats?.events?.value ?? 0;

  return (
    <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-5">
      <OverviewItem label="Pages vues" value={pageViewsData} />
      <OverviewItem label="Visiteurs" value={visitorsData} />
      <OverviewItem label="Visites" value={visitsData} />
      <OverviewItem label="Pays" value={countriesData} />
      <OverviewItem label="Événements" value={eventsData} />
    </div>
  );
};

export default Overview;
