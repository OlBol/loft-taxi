import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
    it('компонент отображается корректно', () => {
        const buttonTree = renderer.create(<Button type="submit" />).toJSON();

        expect(buttonTree).toMatchSnapshot();
    });
});
