import React from 'react';

interface AuthContextState {
    isAuth: boolean;
}

interface IAuthContext {
    isAuth: boolean;
    authHandler?: () => void;
    getProviderValue?: () => void;
}

const AuthContext = React.createContext<IAuthContext>({ isAuth: false });

class AuthProvider extends React.Component<{}, AuthContextState> {
    state: AuthContextState = {
        isAuth: false,
    };

    login = () => {
        this.setState({ isAuth: true });
    };

    logout = () => {
        this.setState({ isAuth: false });
    };

    render() {
        const { isAuth } = this.state;
        const values = {
            isAuth,
            login: this.login,
            logout: this.logout,
        };

        return <AuthContext.Provider value={values}>{this.props.children}</AuthContext.Provider>;
    }
}

export { AuthContext, AuthProvider };
