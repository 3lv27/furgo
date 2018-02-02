import React, { Component } from 'react';
import { withScriptjs, 
         withGoogleMap, 
         GoogleMap, 
         Marker } from 'react-google-maps'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
     defaultZoom={12}
     defaultCenter={{ lat: 41.3831561, lng: 2.150847 }}>
        <Marker position={{ lat: 41.3831561, lng: 2.150847 }} />
        <Marker position={{ lat: 41.405692, lng: 2.184991 }} />
    </GoogleMap>
))


class Map extends Component {

    render() {
        const mapStyle = <div style={{ height: `100%` }} />
        const mapHeight = <div style={{ height: `400px` }} />
        const mapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDkhjeRZylmVJfPPCiGDJeQS6oioLSuAtk&callback=initMap";

        return (
            <div className="wrapper">
                <MyMapComponent
                 isMarkerShown
                 googleMapURL={mapURL}
                 loadingElement={mapStyle}
                 containerElement={mapHeight}
                 mapElement={mapStyle}
                />
            </div>
        )
    }
}

export default Map