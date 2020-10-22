import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() });

it('renders the Footer component', () => {
    const footer = shallow(<Footer />)
    expect(footer.find('h4').text()).toEqual('Made by Drew, Matt, and Nate')
})