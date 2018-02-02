import React from 'react';
import PropTypes from 'prop-types';

const DetailLabel = ({ icon, title, text }) => (
    <div>
        <div className="content">
            <img
                className='avatar'
                src={icon}
                alt={title} />
                
            <h3>{title}</h3>
            <p>{text}</p>
        </div>

    </div>

)

export default DetailLabel

DetailLabel.proptypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,

}