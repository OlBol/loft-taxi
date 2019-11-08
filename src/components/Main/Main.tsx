import React, { Suspense } from 'react';
import AuthPage from '../AuthPage';
import { AuthContext } from '../AuthContext';

const Layout = React.lazy(() => import('../Layout'));

const Main: React.FC = () => {
    const { isAuth } = React.useContext(AuthContext);

    return isAuth ? (
        <Suspense fallback="Загрузка">
            <Layout />
        </Suspense>
    ) : (
        <AuthPage />
    );
};

export default Main;
