import React from 'react';
import Layout from './components/shared/Layout';
import AuthPage from './components/AuthPage/AuthPage';
import { AuthContext, AuthProvider } from './components/shared/AuthContext';

const App: React.FC = () => {
    const { isAuth } = React.useContext(AuthContext);

    return (
        <AuthProvider>
            {isAuth ? <AuthPage /> : <Layout />}
        </AuthProvider>
    );
};

export default App;
