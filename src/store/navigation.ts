import { ILink } from "@/types";
const { HomeIcon, UserGroupIcon, CheckIcon, PhoneIcon } = require("@heroicons/react/24/outline");

export const adminNavigation: ILink[] = [
    { name: 'Overview', href: '/dashboard', icon: HomeIcon },
    // { name: 'Users', href: '/dashboard/users', icon: UserGroupIcon },
    { name: "Partnership Requests", href: '/dashboard/partnership-requests', icon: PhoneIcon },
  
]
