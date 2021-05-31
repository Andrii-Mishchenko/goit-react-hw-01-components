import React from 'react';
import PropTypes from 'prop-types'
import StatisticsItem from './StatisticsItem'

const Statistics = ({title, stats})=>(
    <section className="statistics">
        {title &&<h2 className="title">{title}</h2>}

        <ul className="stat-list">
            {stats.map(({id, label, percentage})=>(
                <StatisticsItem
                label={label}
                percentage={percentage}
                key={id}
                />
            ))}
        </ul>
    </section>
)

Statistics.defaultProps = {
    title: ''
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired, 
    })).isRequired,
}

export default Statistics