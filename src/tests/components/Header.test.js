import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import Header from '../../components/Header';

describe('Tests on <Header />', () => {

    const setCords = jest.fn();
    let wrapper = shallow(<Header setcords={setCords}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<Header setcords={setCords}/>);
    });
    test('should display <Header /> correct', () => {
        
        expect( wrapper ).toMatchSnapshot( );
    })
        
    test('should not to show <IpInfo /> when input "change" ', () => {

        wrapper.find('input').simulate('change', {target: 'TextOnInput'});
        expect( wrapper.find('IpInfo').exists() ).toBe(false);
    })

    test('should show <IpInfo /> when press <button /> to show IP info ', () => {

        wrapper.find('button').simulate('click', {preventDefault: () =>{} });
        expect( wrapper.find('IpInfo').exists() ).toBe(true);
    })
})