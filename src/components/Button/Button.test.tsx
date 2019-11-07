import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Heading', () => {
    it('компонент рендерится без ошибок', () => {
        const button = shallow(<Button />);

        expect(button).toBeTruthy;
    });

    it('тест кнопки совпадает с текстом, переданным ей в пропсах', () => {
        const button = shallow(<Button name="Кнопка" />);

        expect(button.text()).toContain('Кнопка');
    });
});
