import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

describe('Input', () => {
    it('компонент отображается корректно', () => {
        const inputTree = renderer
            .create(<Input type="text" id="id" placeholder="описание" />)
            .toJSON();

        expect(inputTree).toMatchSnapshot();
    });
});
