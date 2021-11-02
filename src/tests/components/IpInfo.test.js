import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { IpInfo } from '../../components/IpInfo';

describe('Tests on <IpInfo />', () => {
    const ip = '200.121.230.99';
    const setCords = {
        lat: -12.09841,
        lng: -77.01107
    };
    test('should show <IpInfo /> correctly', () => {
        
        const wrapper = shallow( <IpInfo ipToFind={ ip } setcords={ setCords } /> );
        expect( wrapper ).toMatchSnapshot();
    })
    
})
