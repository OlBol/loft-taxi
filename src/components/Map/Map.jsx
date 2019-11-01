import React from 'react';
import styled from 'styled-components';
import mapbox from 'mapbox-gl';
import * as config from './config';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.mapNode = React.createRef();
        this.state = {
            map: '',
        };
    }

    componentDidMount() {
        mapbox.accessToken = config.token;

        const currentMap = new mapbox.Map(config.getInit(this.mapNode.current));

        this.setState({ map: currentMap });
    }

    render() {
        return (
            <>
                <MapContainer ref={this.mapNode} />
            </>
        );
    }
}

const MapContainer = styled.div`
    width: 100%;
    height: calc(100vh - 85px);
`;

export default Map;
