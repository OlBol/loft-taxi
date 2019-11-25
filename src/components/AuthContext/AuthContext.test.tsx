import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { AuthProvider, AuthContext } from './AuthContext';

const Mock = () => (
    <AuthProvider>
        <AuthContext.Consumer>
            {({ isAuth, login, logout }) => (
                <>
                    <button type="button" data-testid="login" onClick={login}></button>
                    <button type="button" data-testid="logout" onClick={logout}></button>
                    <div data-testid="is-auth">{String(isAuth)}</div>
                </>
            )}
        </AuthContext.Consumer>
    </AuthProvider>
);

describe('AuthContext', () => {
    it('свойство контекста isAuth равно false', () => {
        const { getByTestId } = render(Mock());

        expect(getByTestId('is-auth').textContent).toEqual('false');
    });

    it('при вызове метода контекста login isAuthenticated становится равно true', () => {
        const { getByTestId } = render(Mock());

        fireEvent.click(getByTestId('login'));
        expect(getByTestId('is-auth').textContent).toEqual('true');
    });

    it('при вызове метода контекста logout isAuthenticated становится равно false', () => {
        const { getByTestId } = render(Mock());

        fireEvent.click(getByTestId('logout'));
        expect(getByTestId('is-auth').textContent).toEqual('false');
    });
});
