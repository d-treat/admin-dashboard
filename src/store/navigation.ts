import { ILink } from "@/types";
import { ArrowDownOnSquareStackIcon, CreditCardIcon } from "@heroicons/react/20/solid";
const { HomeIcon, UserGroupIcon, CheckIcon, PhoneIcon, } = require("@heroicons/react/24/outline");

export const adminNavigation: ILink[] = [
    { name: 'Overview', href: '/dashboard', icon: HomeIcon },
    { name: "Partnership Requests", href: '/dashboard/partnership-requests', icon: PhoneIcon },
    {
        name: "Banking", href: '/dashboard/banking', icon: CreditCardIcon
    },
    {
        name: "App", href: '/dashboard/app', icon: ArrowDownOnSquareStackIcon
    }

]
