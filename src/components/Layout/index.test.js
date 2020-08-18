import React from 'react';
import { shallow } from 'enzyme';
import Layout from '.';


describe('Layout', () => {
    it('renders without crashing', () => {

        const tree = shallow(<Layout title="Some Title"/>);
        expect(
            tree
              .find('Helmet')
              .find('title')
              .text()
          ).toEqual('Some Title - PLT')
    });
});