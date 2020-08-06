import { combineReducers } from 'redux';

import repoReducer from './repos';
import fetchReducer from './fetch';
import usersReducer from './users';
import profileReducer from './profile';

const reducer = combineReducers({
  repo: repoReducer,
  fetch: fetchReducer,
  users: usersReducer,
  profile: profileReducer,
});

export default reducer;
