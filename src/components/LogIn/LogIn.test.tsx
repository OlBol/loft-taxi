import React from 'react';
import { render } from '@testing-library/react';
import LogIn from './LogIn';

describe('LogIn', () => {
    it('компонент отображается корректно', () => {
        const { queryByTestId } = render(<LogIn />);

        expect(queryByTestId('login-container')).toBeTruthy();
    });
});
