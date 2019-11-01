import React from 'react';
import styled from 'styled-components';
import mapbox from 'mapbox-gl';

class Map extends React.Component {
    currentMap: any;

    mapNode: any = React.createRef<HTMLDivElement>();

    componentDidMount() {
        mapbox.accessToken =
            'pk.eyJ1Ijoib2xib2wiLCJhIjoiY2syZWhuNGoyMDF5MzNucGE5dDg4a2pmYyJ9.gOIAN2cwgDSCZ3GVgYnAAw';

        this.currentMap = new mapbox.Map({
            container: this.mapNode.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [30.318, 59.935],
            zoom: 12,
        });
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
