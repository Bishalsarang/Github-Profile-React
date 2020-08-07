/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Icons
import { FaBloggerB } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { BsBriefcase } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';

// UI COmponents
import Loader from '../common/Loader';

// Import Redux Actions
import { setProfile } from '../../actions/profileActions';
import { setFetchStatus } from '../../actions/fetchActions';

// Utils, Constants and API
import * as API from '../../Services/API';
import * as constant from '../../constants/constants';
import { isObjectEmpty, getDayMonth } from '../../utils';

// Styles
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
    updated_at: updatedAt,
    avatar_url: avatarUrl,
    created_at: createdAt,
    public_repos: publicRepos,
    followers_url: followersUrl,
    following_url: followingUrl,
  } = profile;

  const getUserInfo = async () => {
    setFetchStatus(true);
    const response = await API.fetchUrl(constant.API_USER_URL).then((response) => response);

    return response;
  };

  useEffect(() => {
    if (isObjectEmpty(profile)) {
      getUserInfo().then((response) => {
        if (response) {
          setProfile(response.data);
          setFetchStatus(false);
        }
      });
    }
  }, [setProfile]);

  return (
    <div className="profile">
      {isFetching || isObjectEmpty(profile) ? (
        <Loader />
      ) : (
        <div className="info">
          <div className="avatar-image-wrapper">
            <img className="avatar-img" src={avatarUrl} alt={`${login} Avatar`}></img>
          </div>
          <h3 className="name">{name}</h3>
          <span className="username">@{login}</span>
          {bio && <span className="bio"> {bio}</span>}
          {company && (
            <span className="company">
              <BsBriefcase /> {company}
            </span>
          )}
          {blog && (
            <span className="blog">
              <a href={blog} title="Website">
                <FaBloggerB /> {blog}
              </a>
            </span>
          )}
          {email && <span className="email">Email: {email}</span>}
          {location && (
            <span className="location">
              <GrLocation />
              {location}
            </span>
          )}
          {
            <a href={followersUrl} title={`${login} followers`}>
              <span className="followers">Followers: {followers}</span>
            </a>
          }
          {
            <a href={followingUrl} title={`${login} following`}>
              <span className="following">Following: {following}</span>
            </a>
          }

          {publicRepos && (
            <span className="public_repos">
              <RiGitRepositoryLine />
              Repositories {publicRepos}
            </span>
          )}
          {updatedAt && <span className="updated_at">Updated: {getDayMonth(updatedAt)}</span>}
          {createdAt && <span className="created_at">Created: {getDayMonth(createdAt)}</span>}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.fetch.isFetching,
  profile: state ? state.profile.profile : {},
});

const mapDispatchToProps = (dispatch) => ({
  setProfile: (value) => dispatch(setProfile(value)),
  setFetchStatus: (flag) => dispatch(setFetchStatus(flag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
