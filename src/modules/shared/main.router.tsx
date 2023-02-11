import { createBrowserRouter, Outlet } from 'react-router-dom';

// @presenter
import ProductList from '../presenter/product-list.component';
import { ProductListService } from '../presenter/product-list.service';

const productListService = new ProductListService();

const routes = [
    {
        path: '/',
        element: <Outlet/>,
        errorElement: <h1>Error 404</h1>,
        children: [
            {
                path: '',
                element: <ProductList service={productListService} />
            },
        ]
    }
];

const MainRouter = createBrowserRouter(routes);

export default MainRouter;
