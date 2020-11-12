import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UserEdit from '../UserEdit'

Enzyme.configure({ adapter: new Adapter() });

it('renders the UserEdit component', () => {
    const userEdit = shallow(<UserEdit />)
    expect(userEdit.find('h3').text()).toEqual('Edit Account')
})