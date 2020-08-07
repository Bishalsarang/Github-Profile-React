import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';

import UserItem from '../userItem';
import Loader from '../common/Loader';

import { setFetchStatus } from '../../actions/fetchActions/index';
import { setFollowersList, setFollowingList } from '../../actions/usersActions';

import * as API from '../../Services/API';

import * as constant from '../../constants/constants';

import { isArrayEmpty } from '../../utils';

const UsersList = (props) => {
  const {
    isFetching,
    followersList,
    followingList,
    setFetchStatus,
    setFollowersList,
    setFollowingList,
    selectedComponent,
  } = props;

  let list = followingList;
  let setList = setFollowingList;
  let URL = constant.API_FOLLOWING_URL;

  if (selectedComponent === 'follower') {
    list = followersList;
    setList = setFollowersList;
    URL = constant.API_FOLLOWER_URL;
  }

  const getUsersList = async () => {
    setFetchStatus(true);
    const response = await API.fetchUrl(URL).then((response) => response);

    return response;
  };

  useEffect(() => {
    if (isArrayEmpty(list)) {
      getUsersList().then((response) => {
        if (response) {
          setList(response.data);
          setFetchStatus(false);
        }
      });
    }
  }, []);

  const showFollower = () => {
    return (
      <ul>
        {followersList.map((user) => (
          <LazyLoad key={user.id} placeholder={<Loader />}>
            <UserItem key={user.id} url={user.url} />
          </LazyLoad>
        ))}
      </ul>
    );
  };

  const showFollowing = () => {
    return (
      <ul>
        {followingList.map((user) => (
          <LazyLoad key={user.id} placeholder={<Loader />}>
            <UserItem key={user.id} url={user.url} />
          </LazyLoad>
        ))}
      </ul>
    );
  };

  if (isFetching) {
    return <Loader />;
  }

  return <div className="UsersList">{selectedComponent === 'follower' ? showFollower() : showFollowing()}</div>;
};

const mapStateToProps = (state) => ({
  isFetching: state.fetch.isFetching,
  followersList: state ? state.users.followersList : [],
  followingList: state ? state.users.followingList : [],
});

const mapDispatchToProps = (dispatch) => ({
  setFetchStatus: (flag) => dispatch(setFetchStatus(flag)),
  setFollowersList: (value) => dispatch(setFollowersList(value)),
  setFollowingList: (value) => dispatch(setFollowingList(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
