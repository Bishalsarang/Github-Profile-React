export const SET_FOLLOWERS_LIST = 'SET_FOLLOWERS_LIST';
export const SET_FOLLOWING_LIST = 'SET_FOLLOWING_LIST';

/**
 * SET_FOLLOWERS_LIST: Action that sets Followers List.
 *
 * @param {List} value List  containing set Users data.
 */
export const setFollowersList = (value) => ({
  type: SET_FOLLOWERS_LIST,
  payload: { followersList: value },
});

/**
 * SET_FOLLOWING_LIST: Action that sets FOllowings List.
 *
 * @param {List} value List  containing set Users data.
 */
export const setFollowingList = (value) => ({
  type: SET_FOLLOWING_LIST,
  payload: { followingList: value },
});
