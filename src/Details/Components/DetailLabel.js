import React from 'react';
import PropTypes from 'prop-types';

const DetailLabel = ({ icon, title, text }) => (
    <div className="label-content">
        <div>
            <img
                src={icon}
                alt={title} />
        </div>
        <div>
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