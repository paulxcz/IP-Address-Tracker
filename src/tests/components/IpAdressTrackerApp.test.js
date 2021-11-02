import {shallow} from 'enzyme'
import IpAdressTrackerApp from '../../IpAdressTrackerApp'

describe('Pruebas ', () => {

    test('should display IpAdressTracker  correctly', () => {
        
        const wrapper = shallow(<IpAdressTrackerApp />);
        expect( wrapper ).toMatchSnapshot();
    })
  
})
