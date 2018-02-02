import React from 'react';
import DetailLabel from './DetailLabel'

const TransportDetail = ({orderInfo}) =>  (
    <div>
        <DetailLabel
            title='Recoger en'
            text={orderInfo.collect}
            icon={require('../../img/pin-blue.png')}  />
        <DetailLabel
            title='Entregar en'
            text={orderInfo.deliver}
            icon={require('../../img/pin-black.png')}  />
        <DetailLabel
            title='Cuando'
            text={orderInfo.time}
            icon={require('../../img/calendar.png')}  />
    </div>

    )


export default TransportDetail;
