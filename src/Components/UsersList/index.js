import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setFetchStatus } from '../../actions/fetchActions/index';

import * as API from '../../Services/API';
import * as constant from '../../constants/constants';
import { setFollowersList, setFollowingList } from '../../actions/usersActions';
import { isArrayEmpty } from '../../utils';
import UserItem from '../UserItem';

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

  let URL = constant.API_FOLLOWING_URL;
  let setList = setFollowingList;
  let list = followingList;

  if (selectedComponent === 'follower') {
    URL = constant.API_FOLLOWER_URL;
    setList = setFollowersList;
    list = followersList;
  }

  const getUsersList = async () => {
    console.log('here');
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
    } else {
      console.log('already fetched');
    }
  }, []);

  const showFollower = () => {
    return (
      <ul>
        {followersList.map((user) => (
          <UserItem key={user.id} url={user.url} />
        ))}
      </ul>
    );
  };

  const showFollowing = () => {
    return (
      <ul>
        {followingList.map((user) => (
          <UserItem key={user.id} url={user.url} />
        ))}
      </ul>
    );
  };

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
