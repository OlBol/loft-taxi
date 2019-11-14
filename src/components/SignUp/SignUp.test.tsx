import React from 'react';
import { render } from '@testing-library/react';
import SignUp from './SignUp';

describe('SignUp', () => {
    it('компонент отображается корректно', () => {
        const { queryByTestId } = render(<SignUp />);

        expect(queryByTestId('signup-container')).toBeTruthy();
    });
});
