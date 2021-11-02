import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import {Map} from '../../components/Map'

describe('Tests on <Map />', () => {
    const cords = {
        lat: 35.63304462061077,
        lng: 139.8803621105462
    }

    

    test('should show <Map /> correctly', () => {
        const wraper = shallow(<Map cords = {cords} />)
        expect( wraper ).toMatchSnapshot();

    })
    

})
