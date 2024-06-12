import React from 'react';
import { WashingMachine } from '../../../api/interfaces';
import { randomGoodsSelection } from '../utilities/randomGoodsSelection';
import WashingMachineCard from '../WashingMachineList/components/WashingMachineCard/WashingMachineCard';
import './PopularGoodsCarousel.scss';

interface PopularGoodsCarouselProps {
    popularGoods: WashingMachine[];
}

const PopularGoodsCarousel: React.FC<PopularGoodsCarouselProps> = ({ popularGoods }) => {
    const randomMachine = randomGoodsSelection(popularGoods, 5);

    return (
        <section className="popular-goods-carousel">
            <h2>Popular Washing Machines</h2>

            <div className="carousel">
                {randomMachine.map((machine) => (
                    <WashingMachineCard key={machine.id} washingMachineInfo={machine} />
                ))}
            </div>
        </section>
    );
};

export default PopularGoodsCarousel;
