import React from 'react';
import Layout from '../Layout';
import AuthPage from '../AuthPage';
import { AuthContext } from '../AuthContext';

const Main: React.FC = () => {
    const { isAuth } = React.useContext(AuthContext);

    return isAuth ? <Layout /> : <AuthPage />;
};

export default Main;
