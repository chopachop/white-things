import { cleanup, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ProductPage from './ProductPage';

describe('ProductPage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        cleanup();
    });

    it('should display the correct product data', () => {
        // Mocking the useParams hook to return a productId of 1 since we are getting productId from the URL
        vi.mock('react-router-dom', async () => ({
            ...vi.importActual('react-router-dom'),
            useParams: vi.fn().mockReturnValue({
                productId: '1',
            }),
        }));

        const r = render(<ProductPage />);

        expect(r.getByTestId('product-name').textContent).toBe('SuperSuds 5000');
        expect(r.getByTestId('product-brand').textContent).toBe('LaundryMaster');
        expect(r.getByTestId('product-price').textContent).to.contain('$499.99');
    });

    it('should go to specifications accordion and open it when "See Specifications" link pressed', async () => {
        const user = userEvent.setup();
        const r = render(<ProductPage />);

        expect(r.queryByTestId('product-specifications-accordion-content')).toBeNull();

        const seeSpecsLink = r.getByTestId('see-specifications-button');
        expect(seeSpecsLink).to.have.property('href', 'http://localhost:3000/#specifications');

        await user.click(seeSpecsLink);

        expect(r.getByTestId('product-specifications-accordion-content')).not.toBeNull();
    });

    it('should add the product to the cart when "Add to Cart" button is pressed', async () => {
        vi.mock('react-router-dom', async () => ({
            ...vi.importActual('react-router-dom'),
            useParams: vi.fn().mockReturnValue({
                productId: '1',
            }),
        }));

        const user = userEvent.setup();
        const r = render(<ProductPage />);

        expect(localStorage.getItem('ShoppingCart')).toBeNull();

        await user.click(r.getByTestId('add-to-cart-button'));

        expect(JSON.parse(localStorage.getItem('ShoppingCart') || '[]')).to.eql([
            {
                brand: 'LaundryMaster',
                id: 1,
                image: 'https://placeholder.com/300',
                name: 'SuperSuds 5000',
                price: 499.99,
                quantity: 1,
            },
        ]);
    });
});
