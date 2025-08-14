import { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/common/components/elements/Container";
import BackButton from "@/common/components/elements/BackButton";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { getProjectsDataBySlug } from "@/services/projects";
import { METADATA } from "@/common/constants/metadata";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectsDataBySlug(params.slug);

  if (!project) {
    return {
      title: `Projet non trouvé | ${METADATA.creator}`,
    };
  }

  return {
    title: `${project.title} | ${METADATA.creator}`,
    description: project.description,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`,
    },
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getProjectsDataBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Container data-aos="fade-up">
      <div className="space-y-6">
        <BackButton url="/projects" />
        <ProjectDetail {...project} />
      </div>
    </Container>
  );
};

export default ProjectPage; 