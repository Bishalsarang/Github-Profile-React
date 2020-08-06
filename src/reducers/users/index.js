import { SET_FOLLOWERS_LIST, SET_FOLLOWING_LIST } from '../../actions/usersActions';

const INITIAL_STATE = {
  followersList: [],
  followingList: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FOLLOWERS_LIST:
      return { ...state, followersList: action.payload.followersList };
    case SET_FOLLOWING_LIST:
      return { ...state, followingList: action.payload.followingList };

    default:
      return state;
  }
};

export default usersReducer;
