import { createStore } from 'redux';

export const SET_PROFILE = 'SET_PROFILE';
export const SET_REPO_LIST = 'SET_REPO_LIST';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';

const INITIAL_STATE = {
  profile: {},
  repoList: [],
  isFetching: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.payload.profile, isFetching: false };

    case SET_FETCH_STATUS:
      return { ...state, isFetching: action.payload.flag };

    case SET_REPO_LIST:
      return { ...state, repoList: action.payload.repoList, isFetching: false };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
