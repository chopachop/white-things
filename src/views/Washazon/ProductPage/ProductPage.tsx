import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCartItem, WashingMachine } from '../../../api/interfaces';
import washingMachines from '../../../api/WashingMachinesInfo.json';
import './ProductPage.scss';

const ProductPage: React.FC = () => {
    const { productId: machineId } = useParams();

    const washingMachineInfo: WashingMachine | undefined = washingMachines.find(
        (machine) => machine.id === Number(machineId)
    );

    const handleAddToShoppingCart = () => {
        if (!washingMachineInfo) return;

        const shoppingCartItems = JSON.parse(localStorage.getItem('ShoppingCart') || '[]');
        const existingItem = shoppingCartItems.find((item: ShoppingCartItem) => item.id === washingMachineInfo.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            localStorage.setItem(
                'ShoppingCart',
                JSON.stringify([
                    shoppingCartItems.push({
                        id: washingMachineInfo.id,
                        name: washingMachineInfo.name,
                        brand: washingMachineInfo.brand,
                        price: washingMachineInfo.price,
                        image: washingMachineInfo.image,
                        quantity: 1,
                    }),
                ])
            );
        }
        localStorage.setItem('ShoppingCart', JSON.stringify(shoppingCartItems));
    };

    const [expandedAccordion, setExpandedAccordion] = useState<'description' | 'specifications'>('description');

    const handleAccordionToggle = (section: 'description' | 'specifications') => {
        setExpandedAccordion(section);
    };

    const topSpecs = washingMachineInfo?.specs.filter((spec) => spec.isTopSpec);

    return (
        <section className="product-page">
            <div className="product-details">
                <link
                    rel="preload"
                    as="image"
                    imageSrcSet="https://via.placeholder.com/150 960w, https://via.placeholder.com/300 1080w"
                />
                <img
                    src={washingMachineInfo?.image}
                    alt={washingMachineInfo?.name}
                    srcSet="https://via.placeholder.com/150 960w, https://via.placeholder.com/300 1440w"
                />

                <div className="product-page-right-side">
                    <div className="product-info">
                        <div>
                            <h2 data-testid="product-name">{washingMachineInfo?.name}</h2>

                            <p data-testid="product-brand">{washingMachineInfo?.brand}</p>

                            <a
                                href="#specifications"
                                onClick={() => handleAccordionToggle('specifications')}
                                data-testid="see-specifications-button"
                            >
                                See Specifications
                            </a>

                            <p data-testid="product-price">Price: ${washingMachineInfo?.price.toFixed(2)}</p>
                        </div>

                        <div>
                            <table>
                                <tbody>
                                    {topSpecs?.map((spec) => (
                                        <tr key={spec.key}>
                                            <td>{spec.name}</td>
                                            <td>
                                                {spec.value}
                                                {spec.unit}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <button onClick={handleAddToShoppingCart} data-testid="add-to-cart-button">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="accordions">
                <button
                    className={expandedAccordion === 'description' ? 'active' : ''}
                    onClick={() => handleAccordionToggle('description')}
                >
                    Product Description
                </button>

                <button
                    className={expandedAccordion === 'specifications' ? 'active' : ''}
                    data-testid="specifications-accordion-button"
                    onClick={() => handleAccordionToggle('specifications')}
                >
                    Specifications
                </button>

                {expandedAccordion === 'description' && washingMachineInfo && (
                    <div
                        className="product-description-accordion-content"
                        data-testid="product-description-accordion-content"
                        dangerouslySetInnerHTML={{ __html: washingMachineInfo.description }}
                    />
                )}

                {expandedAccordion === 'specifications' && (
                    <table data-testid="product-specifications-accordion-content">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Value</th>
                            </tr>
                        </thead>

                        <tbody>
                            {washingMachineInfo?.specs.map((spec) => (
                                <tr key={spec.key}>
                                    <td>{spec.name}</td>
                                    <td>
                                        {spec.value}
                                        {spec.unit}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
};

export default ProductPage;
