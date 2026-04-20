import { lazy } from "react";
import DeactivateSellers from "../../views/admin/DeactivateSellers";
import SellerRequest from "../../views/admin/SellerRequest";
const AdminDashboard = lazy(()=>  import("../../views/admin/AdminDashboard"))
const Orders = lazy(()=>  import("../../views/admin/Orders"))
const Category = lazy(()=>  import("../../views/admin/Category"))
const Sellers = lazy(()=>  import("../../views/admin/Sellers"))
const PaymentRequest = lazy(()=> import("../../views/admin/PaymentRequest"));
const ChatSeller = lazy(()=> import("../../views/admin/ChatSeller"))
const LogOut = lazy(()=> import("../../views/admin/LogOut"));


export const adminRoutes = [
    {
        path: "admin/dashboard",
        element : <AdminDashboard />,
        role : 'admin'
    },
        {
        path: "admin/dashboard/orders",
        element : <Orders />,
        role : 'admin'
    },
        {
        path: "admin/dashboard/category",
        element : <Category />,
        role : 'admin'
    },
        {
        path: "admin/dashboard/sellers",
        element : <Sellers />,
        role : 'admin'
    },
        {
        path: "admin/dashboard/payment-request",
        element : <PaymentRequest />,
        role : 'admin'
    },
        {
        path: "admin/dashboard/deactivate-sellers",
        element : <DeactivateSellers />,
        role : 'admin'
    },
        {
        path: "admin/dashboard/seller-request",
        element : <SellerRequest />,
        role : 'admin'
    },
        {
        path: "admin/dashboard/chat-seller",
        element : <ChatSeller />,
        role : 'admin'
    },
        {
        path: "admin/dashboard/log-out",
        element : <LogOut />,
        role : 'admin'
    }
]