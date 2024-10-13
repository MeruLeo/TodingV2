"use client";

import Image from "next/image";
import ContextMenu from "../contextMenu/ContextMenu";

interface TweetProps {
  tweetId: string;
  username: string;
  fullName: string;
  avatar: string;
  timeAgo: string;
  content: string;
}

const Tweet: React.FC<TweetProps> = ({
  tweetId,
  username,
  fullName,
  avatar,
  timeAgo,
  content,
}) => {
  const handleEdit = () => {
    alert("ویرایش توییت");
  };

  const handleDelete = () => {
    alert("حذف توییت");
  };

  const handleCopyLink = () => {
    alert("لینک توییت کپی شد");
  };

  return (
    <div className="bg-ash-graphite w-full open p-4 border border-ash-slate mb-4 rounded-3xl relative">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={avatar}
            alt={`${username}'s Avatar}`}
            width={60}
            height={60}
            className="rounded-2xl"
          />
          <div className="mr-2 flex flex-col">
            <span className="text-[0.75rem] text-forest-base">{username}@</span>
            <h4 className="font-sfBold">{fullName}</h4>
            <span className="text-sm text-gray-500">{timeAgo}</span>
          </div>
        </div>
        <ContextMenu
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCopyLink={handleCopyLink}
        />
      </header>

      <main>
        <p className="bg-ash-slate mt-4 p-2 rounded-xl">{content}</p>
      </main>
    </div>
  );
};

export default Tweet;
