import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../common/Loader';
import { isObjectEmpty } from '../../utils';
// import { SET_PROFILE, SET_FETCH_STATUS } from '../../store';

import { setProfile } from '../../actions/profileActions';
import { setFetchStatus } from '../../actions/fetchActions';

import * as API from '../../Services/API';
import * as constant from '../../constants/constants';

import './style.css';

const Profile = ({ profile, isFetching, setProfile, setFetchStatus }) => {
  const {
    name,
    bio,
    blog,
    login,
    email,
    company,
    location,
    hireable,
    updated_at,
    followers,
    following,
    avatar_url,
    created_at,
    public_repos,
    public_gists,
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
          <h2>Profile</h2>
          <span className="name">Name: {name}</span>
          <span className="username">Username: {login}</span>

          {company && <span className="company">Company: {company}</span>}
          {bio && <span className="bio">Bio: {bio}</span>}
          {blog && <span className="blog">Blog: {blog}</span>}
          {email && <span className="email">Email: {email}</span>}
          {location && <span className="location">Location: {location}</span>}
          {hireable && <span className="hireable">Hireable: {hireable}</span>}
          {updated_at && <span className="updated_at">Updated at: {updated_at}</span>}
          {created_at && <span className="created_at">Created at: {created_at}</span>}
          {followers && <span className="followers">Followers: {followers}</span>}
          {following && <span className="following">Following: {following}</span>}

          {public_repos && <span className="public_repos">Public Repos: {public_repos}</span>}
          {public_gists && <span className="public_gists">Public Gists: {public_gists}</span>}
          <img src={avatar_url} alt={`${login} Photo`} className="picture"></img>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state ? state.profile.profile : {},
    isFetching: state.fetch.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (value) => dispatch(setProfile(value)),

    setFetchStatus: (flag) => dispatch(setFetchStatus(flag))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
