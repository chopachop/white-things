import { Route, Routes as RouterRoutes } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import ProductPage from '../views/Washazon/ProductPage/ProductPage';
import Washazon from '../views/Washazon/Washazon';
import WashazonFrame from './WashazonFrame';

const Routes: React.FC = () => {
    return (
        <RouterRoutes>
            <Route path="white-things" element={<WashazonFrame />}>
                <Route path="home" element={<Washazon />} />
                <Route path="products/:productId" element={<ProductPage />} />
                <Route path="shopping-cart" element={<ShoppingCart />} />
            </Route>
        </RouterRoutes>
    );
};

export default Routes;
