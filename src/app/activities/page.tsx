import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { FireIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import avatarImg from "../../public/me.jpg";

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

interface ActivityProps {
  avatar: React.ReactNode;
  username: string;
  title: string;
  content: string;
  link: string;
  date: string;
  iconSize?: string;
  iconColor?: string;
}

const Activity: React.FC<ActivityProps> = ({
  avatar,
  username,
  title,
  content,
  link,
  date,
  iconSize = "w-12 h-12",
  iconColor = "text-forest-base",
}) => (
  <Card
    className="max-w-[400px] m-4 bg-ash-graphite border-1 rounded-3xl border-ash-slate"
    dir="rtl"
  >
    <CardHeader className="flex gap-3">
      <Image
        alt={username}
        src={avatar}
        width={`70`}
        height={`70`}
        className="rounded-xl"
      />
      <div className="flex flex-col">
        <p className="text-ash-smoke text-sm">{username}@</p>
        <p className="text-xl font-sfBold">{title}</p>
      </div>
    </CardHeader>
    <Divider className="bg-ash-charcoal" />
    <CardBody className="bg-ash-iron">
      <h4 className="text-right">{content}</h4>
    </CardBody>
    <Divider className="bg-ash-charcoal" />
    <CardFooter className="text-center rounded-full w-full flex justify-between items-center text-ash-smoke">
      <Link
        isExternal
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
        className="text-forest-base flex items-center justify-center"
      >
        مشاهده پست
        {arrowIcon}
      </Link>
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
        <p>{date}</p>
      </div>
    </CardFooter>
  </Card>
);

export default function App() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 open py-24 lg:grid-cols-3 gap-6 p-4">
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Activity
        avatar={avatarImg}
        username="TheMeruLeo"
        title="پست شمارا پسندید"
        content="سلام و درود خوش اومدید به تودینگ."
        date="۱۴۰۳/۰۸/۰۹"
      />
    </ul>
  );
}
