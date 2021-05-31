import React from 'react';
import PropTypes from 'prop-types'

const StatisticsItem =({label, percentage, id})=> (
    <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
    </li>
);

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default StatisticsItem