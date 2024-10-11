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
      <div className="bg-ash-iron p-4 w-full sm:flex hidden flex-col justify-between items-center text-center border-b-1 border-r-1 border-ash-slate rounded-[2rem]">
        <header className="flex justify-between items-center w-full">
          <h4 className="flex flex-col justify-center items-center">
            <span className="text-xl font-bold">{followers.length}</span>
            <span className="text-forest-base">دنبال کنندگان</span>
          </h4>
          <Image
            src={avatar}
            alt={`${username}'s Avatar}`}
            width={80}
            height={80}
            className="rounded-full mx-4 border-3 border-forest-base"
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
        <footer className="w-full">
          <button className="bg-forest-base w-full p-2 rounded-full mt-4">
            پروفایل من
          </button>
        </footer>
      </div>
    );
  };

  const MyTweets: React.FC<{}> = ({}) => (
    <ul className="bg-ash-iron my-4 sm:block hidden border-b-1 border-r-1 border-ash-slate overflow-y-auto max-h-[calc(100vh-400px)] p-2 rounded-[2rem]">
      <MiniTweet
        fullName={testUser.fullName}
        username={testUser.username}
        content="سلام و درود شبتون بخیر. jdfoaodfk'akfjduwpw[sxks,s] خوش اومدید به تودینگ."
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

  const fileInputs = [
    {
      label: "عکس",
      accept: "image/*",
      iconClass: "fi fi-sr-picture",
    },
    {
      label: "ویدیو",
      accept: "video/*",
      iconClass: "fi fi-sr-video-camera-alt",
    },
    {
      label: "صوت",
      accept: "audio/*",
      iconClass: "fi fi-sr-waveform-path",
    },
  ];

  const FileUploadInputs: React.FC = () => {
    return (
      <div className="mt-4 flex justify-between items-center w-72">
        {fileInputs.map((input, index) => (
          <label key={index} className="cursor-pointer">
            <input type="file" accept={input.accept} className="hidden" />
            <span className="bg-ash-smoke text-white px-4 py-2 rounded-full flex justify-center items-center">
              <i
                className={`${input.iconClass} ml-2 flex justify-center items-center`}
              ></i>
              {input.label}
            </span>
          </label>
        ))}
      </div>
    );
  };

  const NewTweet: React.FC = ({}) => (
    <div className="bg-ash-iron sm:block hidden border-b-1 border-l-1 border-ash-slate p-4 rounded-[2rem]">
      <textarea
        className="w-full h-32 p-2 rounded-lg focus:outline-none bg-transparent"
        placeholder="چه خبر ؟"
      ></textarea>
      <FileUploadInputs />
      <div className="mt-4">
        <button className="w-full bg-forest-base text-white py-2 px-4 rounded-full">
          توییت
        </button>
      </div>
    </div>
  );

  const recentActivities = [
    {
      type: "follow",
      username: "john_doe",
      fullName: "John Doe",
      avatar: "/images/john_avatar.png",
      timeAgo: "2h",
      content: "You were followed by John Doe",
    },
    {
      type: "like",
      username: "jane_smith",
      fullName: "Jane Smith",
      avatar: "/images/jane_avatar.png",
      timeAgo: "3h",
      content: "Jane Smith liked your tweet",
    },
    {
      type: "comment",
      username: "mike_brown",
      fullName: "Mike Brown",
      avatar: "/images/mike_avatar.png",
      timeAgo: "1d",
      content: "Mike Brown commented on your post: 'Great post!'",
    },
  ];

  const RecentActivities: React.FC = () => {
    return (
      <ul className="bg-ash-iron my-4 sm:block hidden border-b-1 border-l-1 border-ash-slate overflow-y-auto max-h-[calc(100vh-400px)] p-2 rounded-[2rem]">
        <div className="text-xl font-semibold m-4 flex">
          <h3>فعالیت های اخیر</h3>
          <i className="fi fi-sr-time-past flex justify-center items-center mr-4 text-forest-base"></i>
        </div>
        {recentActivities.map((activity, index) => (
          <MiniTweet
            key={index}
            username={activity.username}
            fullName={activity.fullName}
            avatar={activity.avatar}
            timeAgo={activity.timeAgo}
            content={activity.content}
          />
        ))}
      </ul>
    );
  };

  return (
    <main className="flex justify-between relative items-start top-24 w-full px-4 py-3">
      <div className="flex-1 flex justify-start">
        <div className="fixed flex justify-between items-center flex-col">
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
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
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
      <div className="flex-1 flex justify-start">
        <div className="fixed flex justify-between items-stretch mr-8 flex-col">
          <NewTweet />
          <RecentActivities />
        </div>
      </div>
    </main>
  );
}
