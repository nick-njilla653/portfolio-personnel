import React from "react";
import { signOut, useSession } from "next-auth/react";
import { HiOutlineLogout as SignOutIcon } from "react-icons/hi";
import cn from "@/common/libs/clsxm";

const ChatUserInfo = ({ isWidget = false }: { isWidget?: boolean }) => {
  const { data: session } = useSession();

  const userName = session?.user?.name ?? null;
  const userEmail = session?.user?.email ?? null;

  return session ? (
    <div
      className={cn(
        "flex flex-col items-center justify-between pb-3 gap-4 px-4 text-sm md:flex-row",
        isWidget && "text-xs",
      )}
    >
      <div className="flex flex-wrap gap-1 text-neutral-500">
        <p>Connecté en tant que :</p>
        <p className="font-medium">{userName}</p>
        <p>({userEmail})</p>
      </div>
      {!isWidget && (
        <button
          onClick={() => signOut()}
          className="flex cursor-pointer items-center gap-1 rounded-md bg-red-600 px-3 py-1 font-medium text-red-50 transition duration-100 hover:bg-red-500 active:scale-90"
        >
          <SignOutIcon size={16} />
          <span>Se déconnecter</span>
        </button>
      )}
    </div>
  ) : null;
};

export default ChatUserInfo;
