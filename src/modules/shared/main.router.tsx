import { createBrowserRouter, Outlet } from 'react-router-dom';

// @presenter
import ProductList from '../presenter/product-list.component';
import ProductCreate from '../presenter/product-create.component';
import { ProductListService } from '../presenter/product-list.service';
import { ProductCreateService } from '../presenter/product-create.service';

const routes = [
    {
        path: '/',
        element: <Outlet/>,
        errorElement: <h1>Error 404</h1>,
        children: [
            {
                path: '',
                element: <ProductList listService={new ProductListService()} />
            },
            {
                path: '/criar',
                element: <ProductCreate createService={new ProductCreateService()} />
            },
        ]
    }
];

const MainRouter = createBrowserRouter(routes);

export default MainRouter;
