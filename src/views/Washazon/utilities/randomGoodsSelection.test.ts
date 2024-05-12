import { describe, expect, it } from 'vitest';
import washingMachines from '../../../api/WashingMachinesInfo.json';
import { randomGoodsSelection } from './randomGoodsSelection';

describe('randomGoodsSelection', () => {
    it('should return 3 random washing machines', () => {
        const machines = washingMachines;

        const result = randomGoodsSelection(machines, 3);

        expect(result).toHaveLength(3);
    });
});
