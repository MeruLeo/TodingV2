import React from "react";
import Image from "next/image";

const MiniTweet: React.FC<{
  username: string;
  fullName: string;
  avatar: string;
  timeAgo: string;
  content: string;
}> = ({ username, fullName, avatar, timeAgo, content }) => {
  return (
    <div className="bg-ash-graphite p-2 border-t-1 border-l-1 border-ash-slate mb-2 rounded-3xl">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2 flex flex-col">
            <span className="text-[0.75rem] text-forest-base">{username}@</span>
            <h4 className="font-sfMed">{fullName}</h4>
          </div>
        </div>
      </header>
      <main>
        <p className="p-2 rounded-xl">{content}</p>
      </main>
    </div>
  );
};

export default MiniTweet;
