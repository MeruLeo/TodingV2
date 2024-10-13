"use client";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { Fragment } from "react";

interface ContextMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  onCopyLink: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  onEdit,
  onDelete,
  onCopyLink,
}) => {
  return (
    <Menu>
      <MenuButton className="focus:outline-none">
        <EllipsisVerticalIcon className="h-6 w-6 text-ash-charcoal" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom start"
        className="w-52 backdrop-blur-lg origin-top-right rounded-2xl border border-white/15 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <PencilIcon className="size-4 fill-white/30" />
            ویرایش
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <Square2StackIcon className="size-4 fill-white/30" />
            کپی
          </button>
        </MenuItem>
        <div className="my-1 h-px bg-white/5" />
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
            آرشیو
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <TrashIcon className="size-4 fill-white/30" />
            حذف
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default ContextMenu;
