import { privateRoutes } from './privateRoutes';
import MainLayout from '../../layout/MainLayout';
import { children } from 'react';

export const getRoutes = () => {
    return {
        path : '/',
        element : <MainLayout />,
        children : privateRoutes
    }
}