import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlinePersonOff } from "react-icons/md";     

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiOutlineDashboard className="dash-icon"/>,
        role: 'admin',
        path: '/admin/dashboard'
    },
        {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart className="select-icon"/>,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
        {
        id: 3,
        title: 'Category',
        icon: <BiCategory className="select-icon"/>,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
        {
        id: 4,
        title: 'Seller',
        icon: <FaUsers className="select-icon"/>,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
        {
        id: 5,
        title: 'Payment Request',
        icon: <MdPayment className="select-icon"/>,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
        {
        id: 6,
        title: 'Deactivate Sellers',
        icon: <MdOutlinePersonOff className="select-icon"/>,
        role: 'admin',
        path: '/admin/dashboard/deactivate-sellers'
    },
        {
        id: 7,
        title: 'Seller Request',
        icon: <FaCodePullRequest className="select-icon"/>,
        role: 'admin',
        path: '/admin/dashboard/seller-request'
    },
        {
        id: 8,
        title: 'Live Chat',
        icon: <IoChatbubblesOutline className="select-icon"/>,
        role: 'admin',
        path: '/admin/dashboard/chat-seller'
    }


]