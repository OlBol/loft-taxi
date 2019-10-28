import React from 'react';
import Header from './components/shared/Header';
import Profile from './components/Profile/Profile';
import Map from './components/Map/Map';
import LogIn from './components/LogIn/LogIn';
import SingUp from './components/SingUp/SingUp';

const pages = {
    profile: () => <Profile />,
    map: () => <Map />,
    login: setPage => <LogIn setPage={setPage} />,
    signup: setPage => <SingUp setPage={setPage} />,
};

export const App = () => {
    const [page, setPage] = React.useState('login');

    return page === 'login' || page === 'signup' ? (
        <>{pages[page](setPage)}</>
    ) : (
        <>
            <Header setPage={setPage} />
            {pages[page](setPage)}
        </>
    );
};

export default App;
