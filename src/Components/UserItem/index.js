import React from 'react';

import { GrLocation } from 'react-icons/gr';
import { BsBriefcase } from 'react-icons/bs';

import './style.css';

const UserItem = () => {
  return (
    <div className="UserItem">
      <div className="avatar">
        <img src="https://avatars3.githubusercontent.com/u/47106999?s=100&v=4" alt="" className="avatar__img" />
      </div>
      <div className="info">
        <div className="intro">
          <span className="name"> Arpan Mahatra</span>
          <span className="username"> ArpanMahatra1999</span>
        </div>
        <div className="bio">
          <p>An undergraduate computer engineering student. FOI: python programming and adobe designing.</p>
        </div>
        <div className="work-location">
          <div className="work">
            <BsBriefcase />
            <span> Kathmandu University School of Engineering </span>
          </div>
          <div className="location">
            <GrLocation />
            <span>Vandol, Panauti, Kavre, Nepal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
