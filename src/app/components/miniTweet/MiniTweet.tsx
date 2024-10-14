import React from "react";

const MiniTweet: React.FC<{
  username: string;
  fullName: string;
  timeAgo: string;
  content: string;
}> = ({ username, fullName, timeAgo, content }) => {
  const truncateContent = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="bg-ash-graphite p-2 open border-t-1 border-l-1 border-ash-slate mb-2 rounded-3xl">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2 flex flex-col">
            <span className="text-[0.75rem] text-forest-base">{username}@</span>
            <div className="flex justify-center items-center">
              <h4 className="font-sfMed">{fullName}</h4>
              <span className="w-1 h-1 bg-ash-light mx-2 rounded-full"></span>
              <span className="text-[0.75rem] text-ash-smoke">{timeAgo}</span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <p className="p-2 rounded-xl">{truncateContent(content, 45)}</p>
      </main>
    </div>
  );
};

export default MiniTweet;
