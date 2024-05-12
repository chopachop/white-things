import { FunctionComponent } from 'react';
import { WashingMachine } from '../../api/interfaces';
import washingMachines from '../../api/WashingMachinesInfo.json';
import Banner from './Banner/Banner';
import PopularGoodsCarousel from './PopularGoodsCarousel/PopularGoodsCarousel';
import './Washazon.css';
import WashingMachineList from './WashingMachineList/WashingMachineList';

const Washazon: FunctionComponent = () => {
    const  washingMachineList: WashingMachine[] = washingMachines;

    return (
        <div className="washazon">
            <Banner />
            <PopularGoodsCarousel popularGoods={washingMachineList} />
            <WashingMachineList machinesList={washingMachineList} />
        </div>
    );
};

export default Washazon;
