import React, { useEffect, useState } from 'react';
import { WashingMachine } from '../../../api/interfaces';
import { randomGoodsSelection } from '../utilities/randomGoodsSelection';
import WashingMachineCard from '../WashingMachineList/components/WashingMachineCard/WashingMachineCard';
import './PopularGoodsCarousel.scss';

interface PopularGoodsCarouselProps {
    popularGoods: WashingMachine[];
}

const PopularGoodsCarousel: React.FC<PopularGoodsCarouselProps> = ({ popularGoods }) => {
    const [featuredMachines, setFeaturedMachine] = useState<WashingMachine[]>([]);

    useEffect(() => {
        // Select 5 random washing machines
        const randomMachine = randomGoodsSelection(popularGoods, 5);
        setFeaturedMachine(randomMachine);
    }, [popularGoods]);

    return (
        <section className="popular-goods-carousel">
            <h2>Popular Washing Machines</h2>

            <div className="carousel">
                {featuredMachines.map((machine) => (
                    <WashingMachineCard key={machine.id} washingMachineInfo={machine} />
                ))}
            </div>
        </section>
    );
};

export default PopularGoodsCarousel;
