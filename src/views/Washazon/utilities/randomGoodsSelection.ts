import { WashingMachine } from '../../../api/interfaces';

export const randomGoodsSelection = (machines: WashingMachine[], amount: number) => {
    return machines
        .sort(() => 0.5 - Math.random())
        .slice(0, amount)
        .map((machine) => {
            return machine;
        });
};
