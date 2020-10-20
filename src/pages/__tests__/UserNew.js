import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UserNew from '../UserNew'

Enzyme.configure({ adapter: new Adapter() });

it('renders the UserNew component', () => {
    const userNew = shallow(<UserNew />)
    expect(userNew.find('h3').text()).toEqual('New User')
})
