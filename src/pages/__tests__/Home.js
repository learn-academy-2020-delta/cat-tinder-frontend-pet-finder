import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() });

it('renders the Home component', () => {
    const home = shallow(<Home />)
    expect(home.find('h1').text()).toEqual('Home')
})