import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AuthPage from './AuthPage';

describe('AuthPage', () => {
    it('при инициализации рендерится форма входа', () => {
        const { queryByTestId } = render(<AuthPage />);

        expect(queryByTestId('login-container')).toBeTruthy();
    });

    it('при инициализации не рендерится форма регистрации', () => {
        const { queryByTestId } = render(<AuthPage />);

        expect(queryByTestId('signup-container')).toBeFalsy();
    });

    it(
        'при клике на "Зарегистрироваться" в контейнере входа просходит переключение с ' +
            'контейнера входа на контейнер регистрации',
        () => {
            const { getByTestId, queryByTestId } = render(<AuthPage />);

            fireEvent.click(getByTestId('onChangeToSignUp'));
            expect(queryByTestId('signup-container')).toBeTruthy();
        },
    );

    it(
        'при клике на "Войти" в контейнере регистрации просходит переключение с ' +
            'контейнера регистрации на контейнер входа',
        () => {
            const { getByTestId, queryByTestId } = render(<AuthPage />);

            fireEvent.click(getByTestId('onChangeToSignUp'));
            fireEvent.click(getByTestId('onChangeToLogIn'));
            expect(queryByTestId('login-container')).toBeTruthy();
        },
    );
});
