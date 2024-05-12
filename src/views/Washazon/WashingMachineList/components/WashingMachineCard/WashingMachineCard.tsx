import React from 'react';
import { Link } from 'react-router-dom';
import { WashingMachine } from '../../../../../api/interfaces';
import './WashingMachineCard.scss';

interface WashingMachineCardProps {
    washingMachineInfo: WashingMachine;
}

const WashingMachineCard: React.FC<WashingMachineCardProps> = ({ washingMachineInfo }) => {
    return (
        <Link to={`/white-things/products/${washingMachineInfo.id}`}>
            <div className="washing-machine" data-testid="washing-machine-card">
                <link
                    rel="preload"
                    as="image"
                    imageSrcSet="https://via.placeholder.com/150 960w, https://via.placeholder.com/300 1080w"
                />
                <img
                    src={washingMachineInfo.image}
                    alt={washingMachineInfo.name}
                    fetchPriority="high"
                    data-testid="washing-machine-image"
                    srcSet="https://via.placeholder.com/150 960w, https://via.placeholder.com/300 1080w"
                />
                <h3>{washingMachineInfo.name}</h3>
                <p>{washingMachineInfo.brand}</p>
                <p>${washingMachineInfo.price.toFixed(2)}</p>
            </div>
        </Link>
    );
};

export default WashingMachineCard;
