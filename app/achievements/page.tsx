import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Achievements from "@/modules/achievements";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Réalisations | ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/achievements`,
  },
};

const AchievementsPage = () => {
  return (
    <Container data-aos="fade-up">
      <Achievements />
    </Container>
  );
};

export default AchievementsPage; 