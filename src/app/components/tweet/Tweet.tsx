import React from "react";
import Image from "next/image";

const Tweet: React.FC<{
  username: string;
  fullName: string;
  avatar: string;
  timeAgo: string;
  content: string;
}> = ({ username, fullName, avatar, timeAgo, content }) => {
  const actions = [
    {
      id: 1,
      title: "پسند ها",
      icon: <i className="fi fi-sr-heart flex justify-center items-center" />,
      clickEvent: "click",
    },
    {
      id: 2,
      title: "نظرات",
      icon: (
        <i className="fi fi-sr-comments flex justify-center items-center"></i>
      ),
      clickEvent: "click",
    },
    {
      id: 3,
      title: "ذخیره شده ها",
      icon: (
        <i className="fi fi-sr-bookmark flex justify-center items-center"></i>
      ),
      clickEvent: "click",
    },
    {
      id: 4,
      title: "بازدید ها",
      icon: <i className="fi fi-sr-eye flex justify-center items-center" />,
      clickEvent: "click",
    },
  ];
  const Action: React.FC<{
    title: string;
    icon: unknown;
    clickEvent: string;
  }> = ({ title, icon, clickEvent }) => (
    <button
      className={` font-sfBold m-2 ${clickEvent === "click" ? "text-forest-base" : "text-ash-iron"}`}
    >
      <span className="text-[0.5rem] text-ash-smoke">{title}</span>
      <span className="text-xl text-ash-silver">{icon}</span>
      <span className="text-sm bg-forest-base text-forest-midnight px-1 rounded-full">
        ۳۴,۵۰۰
      </span>
    </button>
  );

  return (
    <div className="bg-ash-graphite p-2 border-t-1 border-l-1 border-ash-slate mb-4 rounded-3xl">
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
        <button>
          <i className="fi fi-sr-circle-ellipsis text-ash-charcoal text-xl"></i>
        </button>
      </header>
      <main>
        <p className="bg-ash-slate mt-4  p-2 rounded-xl">{content}</p>
        <ul className="flex justify-between items-center">
          {actions.map((action) => (
            <Action
              key={action.id}
              title={action.title}
              clickEvent={action.clickEvent}
              icon={action.icon}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Tweet;
