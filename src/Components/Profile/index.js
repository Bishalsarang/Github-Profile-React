import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as API from '../../Services/API';
import * as constant from '../../constants/constants';

const Profile = (props) => {
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
  } = props.profile;

  useEffect(() => {
    console.log('Fetching');
    getUserInfo().then((response) => props.setProfile(response));
  }, []);

  const getUserInfo = async () => {
    const response = await API.fetchUser(constant.USER_NAME).then((response) => {
      return response.data;
    });
    return response;
  };

  return (
    <div className="Profile">
      <span className="name">Name: {name}</span>
      <span className="username">Username: {login}</span>

      {company && <span className="company">{company}</span>}
      {bio && <span className="bio">{bio}</span>}
      {blog && <span className="blog">{blog}</span>}
      {email && <span className="email">{email}</span>}
      {location && <span className="location">{location}</span>}
      {hireable && <span className="hireable">{hireable}</span>}
      {updated_at && <span className="updated_at">{updated_at}</span>}
      {followers && <span className="followers">{followers}</span>}
      {following && <span className="following">{following}</span>}

      {public_repos && <span className="public_repos">{public_repos}</span>}
      {public_gists && <span className="public_gists">{public_gists}</span>}
      <img src={avatar_url} alt={`${login} Photo`} className="picture"></img>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state ? state.profile : {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (value) =>
      dispatch({
        type: 'SET_PROFILE',
        payload: { profile: value }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
