import React from 'react';
import renderer from 'react-test-renderer';
import Heading from './Heading';

describe('Heading', () => {
    it('компонент отображается корректно', () => {
        const headingTree = renderer.create(<Heading title="Заголовок" />).toJSON();

        expect(headingTree).toMatchSnapshot();
    });
});
