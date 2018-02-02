import React, { Component } from 'react';

import Map from '../Components/Map';
import Description from '../Components/Description';
import TransportDetail from '../Components/TransportDetail';
import DetailLabel from '../Components/DetailLabel';
import './Details.css';

class Details extends Component {

    state = {
        username: this.props.data.orders[0].username,
        profilePict: this.props.data.orders[0].profilePict,
        description: this.props.data.orders[0].description,
        orderInfo: this.props.data.orders[0]
    }


    render() {
        const mapProps = <div style={{ height: 100 + '%' }} />;
        const { username, profilePict, description, orderInfo } = this.state;


        return (
            <div className="wrapper">
                <DetailLabel
                 title={username}
                 icon={profilePict} />
                <Description description={description}/>
                <Map
                 containerElement={mapProps}
                 mapElement={mapProps} />
                <TransportDetail orderInfo={orderInfo} />
            </div>
        )
    }
}

export default Details