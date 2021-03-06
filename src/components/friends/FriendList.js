import React from 'react';
import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'


const FriendList =({friends}) =>(
    <ul className="friend-list">
        {friends.map(({avatar, name, isOnline,id})=>(
            <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
            />
        ))}
    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
        })
    )
}

export default FriendList