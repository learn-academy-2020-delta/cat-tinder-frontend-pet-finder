import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PetShow from '../PetShow'

Enzyme.configure({ adapter: new Adapter() });

it('renders the PetShow component', () => {
    const petShow = shallow(<PetShow />)
    expect(petShow.find('h3').text()).toEqual('Pets')
})