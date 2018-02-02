import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description }) => (
    <div>
        <p>{description}</p>
    </div>
)

export default Description

Description.propTypes = {
    description: PropTypes.string.isRequired,
}