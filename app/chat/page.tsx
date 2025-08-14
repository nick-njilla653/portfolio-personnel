import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import { ChatRoom } from "@/modules/chat/components/ChatRoom";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Chat | ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/chat`,
  },
};

const ChatPage = () => {
  return (
    <Container data-aos="fade-up">
      <ChatRoom />
    </Container>
  );
};

export default ChatPage; 