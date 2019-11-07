import React from 'react';
import Main from './components/Main';
import { AuthProvider } from './components/AuthContext';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Main />
        </AuthProvider>
    );
};

export default App;
