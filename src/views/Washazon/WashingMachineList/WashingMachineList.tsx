import React from 'react';
import { WashingMachine } from '../../../api/interfaces';
import { randomGoodsSelection } from '../utilities/randomGoodsSelection';
import './WashingMachineList.scss';
import WashingMachineCard from './components/WashingMachineCard/WashingMachineCard';

interface WashingMachineListProps {
    machinesList: WashingMachine[];
}

const WashingMachineList: React.FC<WashingMachineListProps> = ({ machinesList }) => {
    const washingMachineShowcase = randomGoodsSelection(machinesList, 5);

    return (
        <section className="washing-machine-list">
            <h2>Washing Machines</h2>
            <ul className="machine-grid">
                {washingMachineShowcase.slice(0, 5).map((machine) => (
                    <li key={machine.id}>
                        <WashingMachineCard washingMachineInfo={machine} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default WashingMachineList;
