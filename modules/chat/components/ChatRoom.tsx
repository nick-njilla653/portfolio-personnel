"use client";

// import useSWR from "swr";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import ChatAuth from "./ChatAuth";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatItemSkeleton from "./ChatItemSkeleton";

import { MessageProps } from "@/common/types/chat";
// import { fetcher } from "@/services/fetcher";
// import { createClient } from "@/common/utils/client";
import useNotif from "@/hooks/useNotif";

// Données de test pour le chat
const mockMessages: MessageProps[] = [
  {
    id: "1",
    name: "Nicol Emmanuel",
    email: "njilla@example.com",
    image: "/images/satria-1.jpg",
    message: "Bonjour ! Bienvenue sur mon portfolio. N'hésitez pas à me poser des questions !",
    is_reply: false,
    reply_to: "",
    is_show: true,
    created_at: "2024-12-01T10:00:00.000Z",
  },
  {
    id: "2",
    name: "Visiteur",
    email: "visiteur@example.com",
    image: "/images/satria-2.jpg",
    message: "Salut ! J'ai vu tes projets d'IA, ils sont impressionnants !",
    is_reply: false,
    reply_to: "",
    is_show: true,
    created_at: "2024-12-01T10:05:00.000Z",
  },
  {
    id: "3",
    name: "Nicol Emmanuel",
    email: "njilla@example.com",
    image: "/images/satria-1.jpg",
    message: "Merci beaucoup ! Je suis passionné par l'IA et les sciences des données.",
    is_reply: true,
    reply_to: "Visiteur",
    is_show: true,
    created_at: "2024-12-01T10:06:00.000Z",
  },
];

export const ChatRoom = ({ isWidget = false }: { isWidget?: boolean }) => {
  // const { data, isLoading } = useSWR("/api/chat", fetcher);

  const [messages, setMessages] = useState<MessageProps[]>(mockMessages);
  const [isReply, setIsReply] = useState({ is_reply: false, name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();

  // const supabase = createClient();

  const notif = useNotif();

  const handleClickReply = (name: string) => {
    if (!session?.user) return notif("Veuillez vous connecter pour répondre");
    setIsReply({ is_reply: true, name });
  };

  const handleCancelReply = () => {
    setIsReply({ is_reply: false, name: "" });
  };

  const handleSendMessage = async (message: string) => {
    if (!session?.user) {
      notif("Veuillez vous connecter pour envoyer un message");
      return;
    }

    setIsLoading(true);
    
    // Simuler un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 500));

    const newMessage: MessageProps = {
      id: Date.now().toString(),
      name: session.user.name || "Utilisateur",
      email: session.user.email || "",
      image: session.user.image || "/images/satria-1.jpg",
      message,
      is_reply: isReply.is_reply,
      reply_to: isReply.name,
      is_show: true,
      created_at: new Date().toISOString(),
    };

    setMessages(prev => [...prev, newMessage]);
    setIsReply({ is_reply: false, name: "" });
    setIsLoading(false);
    notif("Message envoyé avec succès");

    // Code Supabase commenté pour l'instant
    // const messageId = uuidv4();
    // const newMessageData = {
    //   id: messageId,
    //   name: session?.user?.name,
    //   email: session?.user?.email,
    //   image: session?.user?.image,
    //   message,
    //   is_reply: isReply.is_reply,
    //   reply_to: isReply.name,
    //   is_show: true,
    //   created_at: new Date().toISOString(),
    // };
    // try {
    //   await axios.post("/api/chat", newMessageData);
    //   notif("Successfully to send message");
    // } catch (error) {
    //   console.error("Error:", error);
    //   notif("Failed to send message");
    // }
  };

  const handleDeleteMessage = async (id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
    notif("Message supprimé avec succès");

    // Code Supabase commenté pour l'instant
    // try {
    //   await axios.delete(`/api/chat/${id}`);
    //   notif("Successfully to delete message");
    // } catch (error) {
    //   notif("Failed to delete message");
    // }
  };

  // useEffect(() => {
  //   if (data) setMessages(data);
  // }, [data]);

  // Code Supabase temps réel commenté pour l'instant
  // useEffect(() => {
  //   const channel = supabase
  //     .channel("realtime chat")
  //     .on(
  //       "postgres_changes",
  //       {
  //         event: "INSERT",
  //         schema: "public",
  //         table: "messages",
  //       },
  //       (payload) => {
  //         setMessages((prevMessages) => [
  //           ...prevMessages,
  //           payload.new as MessageProps,
  //         ]);
  //       },
  //     )
  //     .on(
  //       "postgres_changes",
  //       {
  //         event: "DELETE",
  //         schema: "public",
  //         table: "messages",
  //       },
  //       (payload) => {
  //         setMessages((prevMessages) =>
  //           prevMessages.filter((msg) => msg.id !== payload.old.id),
  //         );
  //       },
  //     )
  //     .subscribe();

  //   return () => {
  //     supabase.removeChannel(channel);
  //   };
  // }, [supabase]);

  return (
    <>
      {isLoading ? (
        <ChatItemSkeleton />
      ) : (
        <ChatList
          messages={messages}
          onDeleteMessage={handleDeleteMessage}
          onClickReply={handleClickReply}
          isWidget={isWidget}
        />
      )}
      {session ? (
        <ChatInput
          onSendMessage={handleSendMessage}
          onCancelReply={handleCancelReply}
          replyName={isReply.name}
          isWidget={isWidget}
        />
      ) : (
        <ChatAuth isWidget={isWidget} />
      )}
    </>
  );
};
