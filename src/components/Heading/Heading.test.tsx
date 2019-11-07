import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

describe('Heading', () => {
    it('компонент рендерится без ошибок', () => {
        const heading = shallow(<Heading />);

        expect(heading).toBeTruthy;
    });

    it('тест заголовка совпадает с текстом, переданным ему в пропсах', () => {
        const heading = shallow(<Heading title="Заголовок" />);

        expect(heading.text()).toContain('Заголовок');
    });
});
