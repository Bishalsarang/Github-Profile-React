import { combineReducers } from 'redux';

import repoReducer from './repos';
import fetchReducer from './fetch';
import profileReducer from './profile';

const reducer = combineReducers({
  repo: repoReducer,
  fetch: fetchReducer,
  profile: profileReducer,
});

export default reducer;
