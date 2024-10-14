import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { FireIcon } from "@heroicons/react/24/outline";

interface NotificationProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  date: string;
  iconSize?: string;
  iconColor?: string;
}

const Notification: React.FC<NotificationProps> = ({
  icon,
  title,
  content,
  date,
  iconSize = "w-12 h-12",
  iconColor = "text-forest-base",
}) => (
  <Card
    className="max-w-[400px] m-4 bg-ash-graphite border-1 rounded-3xl border-ash-slate"
    dir="rtl"
  >
    <CardHeader className="flex gap-3">
      <div
        className={`${iconColor} ${iconSize} bg-ash-coal p-1 rounded-xl border-1 border-ash-slate`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-sfBold">{title}</p>
      </div>
    </CardHeader>
    <Divider className="bg-ash-charcoal" />
    <CardBody>
      <h4 className="text-right">{content}</h4>
    </CardBody>
    <Divider className="bg-ash-charcoal" />
    <CardFooter className="text-center rounded-full w-full flex justify-center items-center text-ash-smoke">
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
    </CardFooter>
  </Card>
);

export default function App() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 open py-24 lg:grid-cols-3 gap-6 p-4">
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
      <Notification
        icon={<FireIcon />}
        title="آپدیت جدید"
        content="آپدیت جدید تودینگ منتشر شد"
        date="۱۴۰۳/۰۸/۰۹"
      />
    </ul>
  );
}
