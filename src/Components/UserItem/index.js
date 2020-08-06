import React, { useState, useEffect } from 'react';

import Loader from '../common/Loader';

import { GrLocation } from 'react-icons/gr';
import { BsBriefcase } from 'react-icons/bs';

import * as API from '../../Services/API';

import './style.css';
import { isObjectEmpty } from '../../utils';

const UserItem = ({ url }) => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getUserInfo().then((response) => {
      if (response) {
        setUser(response.data);
        setLoading(false);
      }
    });
  }, []);

  const getUserInfo = async () => {
    setLoading(true);
    const response = await API.fetchUrl(url).then((response) => response);

    return response;
  };

  const displayLoading = () => {
    return <Loader height="60px" />;
  };

  const displayUserInfo = () => {
    const {
      bio,
      name,
      blog,
      login,
      email,
      company,
      location,
      followers,
      following,
      updated_at: updatedAt,
      avatar_url: avatarUrl,
      created_at: createdAt,
      public_repos: publicRepos,
      followers_url: followersUrl,
      following_url: followingUrl,
    } = user;

    return (
      <>
        <div className="avatar">
          <img src={avatarUrl} alt={`${name} Avatar`} className="avatar__img" />
        </div>
        <div className="info">
          <div className="intro">
            <span className="name"> {name}</span>
            <span className="username"> {login}</span>
          </div>

          {bio && (
            <div className="bio">
              <p>{bio}</p>
            </div>
          )}

          <div className="work-location">
            {company && (
              <div className="work">
                <BsBriefcase />
                <span>{company} </span>
              </div>
            )}

            {location && (
              <div className="location">
                <GrLocation />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  return <div className="UserItem">{isLoading || isObjectEmpty(user) ? displayLoading() : displayUserInfo()}</div>;
};

export default UserItem;
