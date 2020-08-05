import { createStore } from 'redux';

export const SET_PROFILE = 'SET_PROFILE';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';

const INITIAL_STATE = {
  profile: {},
  isFetching: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.payload.profile, isFetching: false };

    case SET_FETCH_STATUS:
      return { ...state, isFetching: action.payload.flag };

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
