import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

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
        path: '/admin/dashboard/order'
    },
        {
        id: 3,
        title: 'Category',
        icon: <BiCategory className="select-icon"/>,
        role: 'admin',
        path: '/admin/dashboard/category'
    }

]