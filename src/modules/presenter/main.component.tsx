import React from 'react';
import { Outlet } from 'react-router-dom';

import ProductProvider from '../presenter/product.provider';

const Main: React.FC = () => {
    return <>
        <ProductProvider>
            <Outlet/>
        </ProductProvider>
    </>
}

export default Main;
