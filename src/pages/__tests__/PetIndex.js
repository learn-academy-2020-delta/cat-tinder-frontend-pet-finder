import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PetIndex from '../PetIndex'

Enzyme.configure({ adapter: new Adapter() });

it('renders the PetIndex component', () => {
    const petIndex = shallow(<PetIndex pets={this.state.pets}/>)
    expect(petIndex.find('.title').text()).toEqual('Pets')
})