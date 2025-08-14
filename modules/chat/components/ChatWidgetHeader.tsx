import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiMinimize2 as MinimizeIcon } from "react-icons/fi";
import { HiOutlineLogout as SignOutIcon } from "react-icons/hi";
import { PiChatTeardropDotsBold as ChatRoomIcon } from "react-icons/pi";

import Tooltip from "@/common/components/elements/Tooltip";
import useChatStore from "@/common/stores/chat";

const ChatWidgetHeader = () => {
  const { toggleChat } = useChatStore();

  const { data: session } = useSession();

  const router = useRouter();

  const handleClick = () => {
    router.push("/chat");
    toggleChat();
  };

  return (
    <div className="flex items-center justify-between border-b p-4 dark:border-neutral-600">
      <div className="flex items-center gap-2">
        <Tooltip title="Ouvrir la salle de chat">
          <ChatRoomIcon
            size={22}
            onClick={handleClick}
            className="cursor-pointer transition duration-300 hover:scale-105 active:scale-95"
          />
        </Tooltip>
        <p className="font-medium">Chat</p>
      </div>
      <div className="flex items-center gap-5">
        <Tooltip title="Réduire">
          <MinimizeIcon
            onClick={toggleChat}
            size={27}
            className="cursor-pointer rounded-lg bg-neutral-200 p-1.5 transition duration-300 hover:scale-105 hover:bg-neutral-300 active:scale-95 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600"
          />
        </Tooltip>
        {session && (
          <Tooltip title="Se déconnecter">
            <SignOutIcon
              onClick={() => signOut()}
              size={27}
              className="cursor-pointer rounded-lg bg-red-600 p-1.5 text-neutral-50 transition duration-300 hover:scale-105 hover:bg-red-500 active:scale-95"
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default ChatWidgetHeader;
