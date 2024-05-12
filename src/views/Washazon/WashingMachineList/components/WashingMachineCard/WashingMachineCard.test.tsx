import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { WashingMachine } from '../../../../../api/interfaces';
import WashingMachineCard from './WashingMachineCard';

describe('WashingMachineCard', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        cleanup();
    });

    it('should display the correct number of washing machines', () => {
        const washingMachineInfo: WashingMachine = {
            id: 1,
            brand: 'Samsung',
            name: '1337',
            price: 1000,
            image: 'https://via.placeholder.com/300',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            capacity: '5kg',
            specs: [
                {
                    key: '1',
                    name: 'name',
                    value: 'value',
                    isTopSpec: true,
                    unit: 'mm',
                },
            ],
        };

        const r = render(
            <BrowserRouter>
                <WashingMachineCard washingMachineInfo={washingMachineInfo} />
            </BrowserRouter>
        );

        expect(r.getByTestId('washing-machine-image')).to.have.property('src', 'https://via.placeholder.com/300');

        expect(r.getByText('1337')).not.toBeNull();
        expect(r.getByText('Samsung')).not.toBeNull();
        expect(r.getByText('$1000.00')).not.toBeNull();
    });

    it('should redirect to the correct URL when being clicked', async () => {
        const washingMachineInfo: WashingMachine = {
            id: 1,
            brand: 'Samsung',
            name: '1337',
            price: 1000,
            image: 'https://via.placeholder.com/300',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            capacity: '5kg',
            specs: [
                {
                    key: '1',
                    name: 'name',
                    value: 'value',
                    isTopSpec: true,
                    unit: 'mm',
                },
            ],
        };

        const user = userEvent.setup();

        const r = render(
            <BrowserRouter>
                <WashingMachineCard washingMachineInfo={washingMachineInfo} />
            </BrowserRouter>
        );

        await user.click(r.getByTestId('washing-machine-card'));

        expect(globalThis.window.location.href).toContain('/products/1');
    });
});
