import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartItem } from '../../api/interfaces';
import './Header.scss';

const Header: React.FC = () => {
    const storedShoppingCart = JSON.parse(localStorage.getItem('ShoppingCart') || '[]');
    const [shoppingCartItems] = useState<ShoppingCartItem[]>(storedShoppingCart);

    useEffect(() => {
        localStorage.setItem('ShoppingCart', JSON.stringify(shoppingCartItems));
    }, [shoppingCartItems]);

    const shoppingCartItemCount = shoppingCartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="header">
            <Link to="/white-things/home">
                <div className="logo">Washazon {shoppingCartItemCount}</div>
            </Link>

            <Link to="/white-things/shopping-cart" aria-label="shopping-cart-button">
                <svg className="shoppingCart-icon" viewBox="0 0 25 20" fill="currentColor">
                    <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                    {shoppingCartItemCount > 0 && (
                        <g key="shoppingCart-count">
                            <text x="18" y="9" className="item-count-text" data-testid='shopping-card-amount-text'>
                                {shoppingCartItemCount}
                            </text>
                        </g>
                    )}
                </svg>
            </Link>
        </header>
    );
};

export default Header;
