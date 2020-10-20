import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter() });

it('renders the NotFound component', () => {
    const notFound = shallow(<NotFound />)
    expect(notFound.find('h3').text()).toEqual('ERROR')
})