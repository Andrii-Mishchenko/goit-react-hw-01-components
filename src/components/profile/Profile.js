import React from 'react';
import PropTypes from 'prop-types'
import defaultImg from '../../components/default-image.png'

const Profile = ({name, tag, location, avatar, stats}) => (
    <div className="profile">
        <div className="description">
            <div className="thumb">
                <img
                src={avatar}
                alt="Аватар пользователя"
                className="profile-avatar"
                />
            </div>
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li className="stats-item">
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li className="stats-item">
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li className="stats-item">
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
)

Profile.defaultProps = {
    avatar: defaultImg,
   }
   
Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}

export default Profile