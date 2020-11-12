import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({ adapter: new Adapter() });

it('renders the Header component', () => {
    const header = mount(<Header />)
    expect(header.find('ul')).toHaveLength(1)
})