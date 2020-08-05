import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../common/Loader';
import { isObjectEmpty, getDayMonth } from '../../utils';

// Import Redux Actions
import { setProfile } from '../../actions/profileActions';
import { setFetchStatus } from '../../actions/fetchActions';

// Import Icons
import { BsBriefcase } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { FaBloggerB } from 'react-icons/fa';
import { GrLocation, GrUpdate } from 'react-icons/gr';

import * as API from '../../Services/API';
import * as constant from '../../constants/constants';
import {} from '../../utils';

import './style.css';

const Profile = ({ profile, isFetching, setProfile, setFetchStatus }) => {
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
    updated_at,
    avatar_url,
    created_at,
    public_repos,
    twitter_username
  } = profile;

  useEffect(() => {
    if (isObjectEmpty(profile)) {
      console.log('Fetching', profile);
      getUserInfo().then((response) => {
        if (response) {
          setProfile(response.data);
          setFetchStatus(false);
        }
      });
    } else {
      console.log('Already fetched');
    }
  }, [setProfile]);

  const getUserInfo = async () => {
    setFetchStatus(true);
    const response = await API.fetchUrl(constant.API_USER_URL).then((response) => response);
    return response;
  };

  return (
    <div className="Profile">
      {isFetching ? (
        <Loader />
      ) : (
        <div className="info">
          <div className="avatar-image-wrapper">
            <img className="avatar-img" src={avatar_url} alt={`${login} Avatar`}></img>
          </div>
          <h3 className="name">{name}</h3>
          <span className="username">@{login}</span>
          {company && (
            <span className="company">
              <BsBriefcase /> {company}
            </span>
          )}
          {bio && <span className="bio">Bio: {bio}</span>}
          {blog && (
            <span className="blog">
              <FaBloggerB /> {blog}
            </span>
          )}
          {email && <span className="email">Email: {email}</span>}
          {location && (
            <span className="location">
              <GrLocation />
              {location}
            </span>
          )}
          {followers && <span className="followers">Followers: {followers}</span>}
          {following && <span className="following">Following: {following}</span>}
          {public_repos && (
            <span className="public_repos">
              <RiGitRepositoryLine />
              Repositories {public_repos}
            </span>
          )}
          {updated_at && <span className="updated_at">Updated: {getDayMonth(updated_at)}</span>}
          {created_at && <span className="created_at">Created: {getDayMonth(created_at)}</span>}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isFetching: state.fetch.isFetching,
    profile: state ? state.profile.profile : {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (value) => dispatch(setProfile(value)),
    setFetchStatus: (flag) => dispatch(setFetchStatus(flag))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
