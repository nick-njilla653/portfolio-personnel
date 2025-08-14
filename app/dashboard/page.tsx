import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Dashboard from "@/modules/dashboard";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Tableau de bord | ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard`,
  },
};

const DashboardPage = () => {
  return (
    <Container data-aos="fade-up">
      <Dashboard />
    </Container>
  );
};

export default DashboardPage; 