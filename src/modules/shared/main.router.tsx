import { createBrowserRouter } from 'react-router-dom';

// @presenter
import Main from '../presenter/main.component';
import ProductList from '../presenter/product-list.component';
import ProductCreate from '../presenter/product-create.component';
import ProductDetails from '../presenter/product-details.component';
import ProductListService from '../presenter/product-list.service';
import ProductCreateService from '../presenter/product-create.service';
import ProductUpdateService from '../presenter/product-update.service';

const routes = [
    {
        path: '/',
        element: <Main />,
        errorElement: <h1>Error 404</h1>,
        children: [
            {
                path: '',
                element: <ProductList listService={new ProductListService()} />
            },
            {
                path: ':idProduct',
                element: <ProductDetails updateService={new ProductUpdateService()} />
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
