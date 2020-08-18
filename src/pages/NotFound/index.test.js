import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '.';

describe('NotFound', () => {
    it('renders without crashing', () => {
        shallow(<NotFound />);
    });
});