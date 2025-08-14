import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Contact from "@/modules/contact";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Contact | ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`,
  },
};

const ContactPage = () => {
  return (
    <Container data-aos="fade-up">
      <Contact />
    </Container>
  );
};

export default ContactPage; 