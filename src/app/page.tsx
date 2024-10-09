import Image from "next/image";
import avatarImg from "../public/me.jpg";
import { fonts } from "./layout";
import React from "react";
import Tweet from "./components/tweet/Tweet";
import MiniTweet from "./components/miniTweet/MiniTweet";

export default function Home() {
  const testUser = {
    username: "MeruLeo",
    avatar: avatarImg,
    fullName: "امیرعلی الله وردی",
    bio: "برنامه نویس وبسایت از جلو",
    followers: ["follower1", "follower2"],
    following: ["following1", "following2"],
  };

  const ProfileCard: React.FC<{
    username: string;
    avatar: string;
    fullName: string;
    bio: string;
    followers: string[];
    following: string[];
  }> = ({ username, avatar, fullName, bio, followers, following }) => {
    return (
      <div className="bg-ash-iron p-2 text-center border-b-1 border-r-1 border-ash-slate rounded-3xl">
        <header className="flex">
          <h4 className="flex flex-col justify-center items-center">
            <span className="text-xl font-bold">{followers.length}</span>
            <span className="text-forest-base">دنبال کنندگان</span>
          </h4>
          <Image
            src={avatar}
            alt={`${username}'s Avatar}`}
            width={80}
            height={80}
            className="rounded-3xl mx-4 border-3 border-forest-base"
            objectFit="cover"
          />
          <h4 className="flex flex-col justify-center items-center">
            <span className="text-xl font-bold">{following.length}</span>
            <span className="text-forest-base">دنبال شوندگان</span>
          </h4>
        </header>
        <main className="mt-5">
          <div>
            <h2 className="font-sfBold text-xl">{fullName}</h2>
            <h5 className="bg-forest-base text-forest-shade border-2 border-forest-shade inline-block p-0.5 my-2 rounded-full">
              {username}@
            </h5>
          </div>
          <p>{bio}</p>
        </main>
        <footer>
          <button className="bg-forest-base w-full p-2 rounded-full mt-4">
            پروفایل من
          </button>
        </footer>
      </div>
    );
  };

  const MyTweets: React.FC<{}> = ({}) => (
    <ul className="bg-ash-iron my-4 overflow-y-auto max-h-[calc(100vh-400px)] p-2 rounded-3xl">
      <MiniTweet
        fullName={testUser.fullName}
        username={testUser.username}
        content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
        timeAgo="۱ ساعت پیش"
      />
      <MiniTweet
        fullName={testUser.fullName}
        username={testUser.username}
        content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
        timeAgo="۱ ساعت پیش"
      />
      <MiniTweet
        fullName={testUser.fullName}
        username={testUser.username}
        content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
        timeAgo="۱ ساعت پیش"
      />
      <MiniTweet
        fullName={testUser.fullName}
        username={testUser.username}
        content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
        timeAgo="۱ ساعت پیش"
      />
      <MiniTweet
        fullName={testUser.fullName}
        username={testUser.username}
        content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
        timeAgo="۱ ساعت پیش"
      />
      <MiniTweet
        fullName={testUser.fullName}
        username={testUser.username}
        content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
        timeAgo="۱ ساعت پیش"
      />
      <MiniTweet
        fullName={testUser.fullName}
        username={testUser.username}
        content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
        timeAgo="۱ ساعت پیش"
      />
    </ul>
  );

  const NewTweet: React.FC<{
    avatar: string;
    content: string;
    username: string;
  }> = ({ avatar, content, username }) => (
    <section className="flex items-center flex-col border-b-1 border-r-1 border-ash-slate w-full bg-ash-graphite h-fit p-2 rounded-3xl">
      <h1 className="text-2xl font-sfBold">توییت جدید</h1>
      <textarea
        className="p-2 rounded-xl outline-none my-4 w-full bg-transparent"
        placeholder="چه اتفاقی افتاده ؟"
      ></textarea>
      <div className="flex justify-center items-center w-full">
        <button className="bg-forest-base w-full text-ash-iron p-2 flex font-sfBold justify-center items-center rounded-full">
          توییت
          <i className="fi fi-sr-add flex justify-center items-center mr-2"></i>
        </button>
      </div>
    </section>
  );

  return (
    <main className="flex justify-between relative items-start top-24 w-full px-4 py-3">
      <div className="flex-1 flex justify-start">
        <div className="fixed">
          <ProfileCard
            username={testUser.username}
            avatar={testUser.avatar}
            fullName={testUser.fullName}
            bio={testUser.bio}
            followers={testUser.followers}
            following={testUser.following}
          />
          <MyTweets />
        </div>
      </div>
      <div className="flex-1 flex flex-col h-screen justify-start">
        {/* <NewTweet avatar={testUser.avatar} username={testUser.username} /> */}
        <Tweet
          avatar={testUser.avatar}
          fullName={testUser.fullName}
          username={testUser.username}
          content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
          timeAgo="۱ ساعت پیش"
        />
        <Tweet
          avatar={testUser.avatar}
          fullName={testUser.fullName}
          username={testUser.username}
          content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
          timeAgo="۱ ساعت پیش"
        />
        <Tweet
          avatar={testUser.avatar}
          fullName={testUser.fullName}
          username={testUser.username}
          content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
          timeAgo="۱ ساعت پیش"
        />
        <Tweet
          avatar={testUser.avatar}
          fullName={testUser.fullName}
          username={testUser.username}
          content="سلام و درود شبتون بخیر. خوش اومدید به تودینگ."
          timeAgo="۱ ساعت پیش"
        />
      </div>
      <div className="flex-1 flex justify-end">empty</div>
    </main>
  );
}
