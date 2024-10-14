"use client";

import Image from "next/image";
import ContextMenu from "../contextMenu/ContextMenu";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface TweetProps {
  username: string;
  fullName: string;
  avatar: string;
  timeAgo: string;
  content: string;
}

const Tweet: React.FC<TweetProps> = ({
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
    <Card className="bg-ash-graphite open text-right border border-ash-slate mb-4 rounded-3xl relative">
      <CardHeader className="flex items-center justify-between">
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
      </CardHeader>

      <CardBody>
        <p className="bg-ash-slate mt-4 p-4 text-justify rounded-xl">
          {content}
        </p>
      </CardBody>
    </Card>
  );
};

export default Tweet;
