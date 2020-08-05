import React from 'react';

import * as API from '../../Services/API';
import * as constant from '../../constants/constants';

const Profile = () => {
  const getUserInfo = () => {
    API.fetchUser(constant.USER_NAME).then((response) => response.data);
  };

  return (
    <div className="Profile">
      <span className="username"></span>
      <span className="username"></span>
      <span className="username"></span>
      <span className="username"></span>
    </div>
  );
};

export default Profile;
