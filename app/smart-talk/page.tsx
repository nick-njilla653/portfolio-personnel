import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import SmartTalk from "@/modules/smarttalk/components/SmartTalk";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Smart Talk | ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/smart-talk`,
  },
};

const SmartTalkPage = () => {
  return (
    <Container data-aos="fade-up">
      <SmartTalk />
    </Container>
  );
};

export default SmartTalkPage; 