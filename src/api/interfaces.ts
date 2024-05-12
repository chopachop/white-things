export interface WashingMachine {
    id: number;
    name: string;
    brand: string;
    capacity: string;
    price: number;
    image: string;
    description: string;
    specs: WashingMachineSpecs[];
}

export interface WashingMachineSpecs {
    key: string;
    name: string;
    value: string;
    isTopSpec: boolean;
    unit?: string;
}

export interface ShoppingCartItem {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    quantity: number;
}
