import React from 'react';
import PropTypes from 'prop-types';
import './user-info.scss';

const UserInfo = ({ user = {} }) => {
  const { id, name, purchases } = user;

  return (
    <div className="user-info-container">
      User-Info
      <span>{id}</span>
      <span>{name}</span>
      <span>{purchases}</span>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    purchases: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserInfo;
