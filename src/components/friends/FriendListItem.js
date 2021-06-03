import React from 'react';
import defaultImg from '../../components/default-image.png'
import PropTypes from 'prop-types'



const FriendListItem =({avatar, name, isOnline, id})=> {

    const statusClasses = ['status'];

    if (!isOnline) {
        statusClasses.push('offline');
    }

    return (
        <li className="item" key={id}>
            <span className={statusClasses.join(' ')}/>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    );
}

FriendListItem.defaultProps = {
 avatar: defaultImg,
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}


export default FriendListItem