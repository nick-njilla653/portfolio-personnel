import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Projects from "@/modules/projects";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Projects | ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};

const ProjectsPage = () => {
  return (
    <Container data-aos="fade-up">
      <Projects />
    </Container>
  );
};

export default ProjectsPage; 