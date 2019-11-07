import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import Button from './Button';

describe('Heading', () => {
    it('компонент рендерится без ошибок', () => {
        const input = shallow(<Input />);

        expect(input).toBeTruthy;
    });

    it('значения пропсов компонента отображаются корректно', () => {
        const input = shallow(
            <Input type="тип" id="идентификатор" placeholder="шаблонное описание" />,
        );

        expect(input.props()['type']).toBe('тип');
        expect(input.props()['id']).toBe('идентификатор');
        expect(input.props()['placeholder']).toBe('шаблонное описание');
    });
});
