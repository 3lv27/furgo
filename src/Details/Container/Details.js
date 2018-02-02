import React, { Component } from 'react';

import Map from '../Components/Map';
import './Details.css';

class Details extends Component {

    render() {
        const mapProps = <div style={{ height: 100 + '%' }} />;

        return (
            <div className="wrapper">
                <h2>Details</h2>
                <Map
                 containerElement={mapProps}
                 mapElement={mapProps} />
            </div>
        )
    }
}

export default Details