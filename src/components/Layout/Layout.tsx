import React from 'react';
import Header from '../Header';
import { AuthContext } from '../AuthContext';
import Map from '../Map';
import Profile from '../Profile';

interface LayoutState {
    showMapPage: boolean;
    showProfilePage: boolean;
}

interface RoutesMap {
    [propName: string]: LayoutState;
}

const routesMap: RoutesMap = {
    map: { showMapPage: true, showProfilePage: false },
    profile: { showMapPage: false, showProfilePage: true },
};

class Layout extends React.Component {
    static contextType = AuthContext;

    state: LayoutState = {
        showMapPage: true,
        showProfilePage: false,
    };

    onChangePage = (route: string) => {
        if (route !== 'logOut') {
            this.setState(routesMap[route]);
        } else {
            this.context.logout();
        }
    };

    render() {
        const { showMapPage, showProfilePage } = this.state;
        return (
            <>
                <Header onChangePage={this.onChangePage} />
                {showMapPage && <Map />}
                {showProfilePage && <Profile />}
            </>
        );
    }
}

export default Layout;
