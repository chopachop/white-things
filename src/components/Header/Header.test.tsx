import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header', () => {
    beforeAll(() => {
        // setting up the localStorage data
        localStorage.setItem('ShoppingCart', JSON.stringify([{ id: 1, quantity: 10 }]));
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('should display correct number of the items in the basket', async () => {
        const r = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(r.getByTestId('shopping-card-amount-text').textContent).toBe('10');
    });
});
