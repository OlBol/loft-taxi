import React from 'react';
import Main from './components/shared/Main';
import { AuthProvider } from './components/shared/AuthContext';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Main />
        </AuthProvider>
    );
};

export default App;
