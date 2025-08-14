import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import About from "@/modules/about";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `About | ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

const AboutPage = () => {
  return (
    <Container data-aos="fade-up">
      <About />
    </Container>
  );
};

export default AboutPage; 