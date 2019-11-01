import React from 'react';
import Header from './components/shared/Header';
import Profile from './components/Profile/Profile';
import Map from './components/Map/Map';
import LogIn from './components/LogIn/LogIn';
import SingUp from './components/SingUp/SingUp';

// interface LayoutPages {
//     profile: any;
//     map: any;
//     login: any;
//     signup: any;
// }

const pages: any = {
    profile: () => <Profile />,
    map: () => <Map />,
    login: (setPage: any) => <LogIn setPage={setPage} />,
    signup: (setPage: any) => <SingUp setPage={setPage} />,
};

const App: React.FC = () => {
    // const [page, setPage] = React.useState('login');
    const [page, setPage] = React.useState('map');

    return page === 'login' || page === 'signup' ? (
        <>{pages[page](setPage)}</>
    ) : (
        <>
            <Header page={page} setPage={setPage} />
            {pages[page](setPage)}
        </>
    );
};

// class App extends React.Component {
//     // const [page, setPage] = React.useState('login');
//     // const [page, setPage] = React.useState('map');
//     // constructor(props) {
//     //     super(props);
//         state: LayoutPages = {
//             page: 'login'
//         };
//     // }
//
//     rendor() {
//         return page === 'login' || page === 'signup' ? (
//             <>{pages[page](setPage)}</>
//         ) : (
//             <>
//                 <Header page={page} setPage={setPage}/>
//                 {pages[page](setPage)}
//             </>
//         );
//     }
// };

export default App;
