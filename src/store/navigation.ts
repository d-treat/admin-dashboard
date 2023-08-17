import { ILink } from "@/types";
import { ArrowPathRoundedSquareIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { LuPackageOpen } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
const { HomeIcon, UserGroupIcon, CheckIcon, PhoneIcon } = require("@heroicons/react/24/outline");

export const adminNavigation: ILink[] = [
    { name: 'Overview', href: '/dashboard', icon: HomeIcon },
    { name: 'Users', href: '/dashboard/users', icon: UserGroupIcon },
    { name: "Partnership Requests", href: '/dashboard/partnership-requests', icon: PhoneIcon },
  
]
