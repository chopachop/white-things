
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import washingMachines from '../../../api/WashingMachinesInfo.json';
import WashingMachineList from './WashingMachineList';
import { render } from '@testing-library/react';

describe('WashingMachineList', () => {
  it('should display the correct number of washing machines', () => {
    const washingMachinesList = washingMachines;
      const r = render(
        <BrowserRouter>
          <WashingMachineList machinesList={washingMachinesList} />
        </BrowserRouter>
      );

    // Since we are slicing the array to 5, we should expect 5 items to be rendered
      expect(r.getAllByTestId('washing-machine-card')).toHaveLength(5);
    });
});
