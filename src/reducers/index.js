import { combineReducers } from 'redux';

import repoReducer from './repos';
import fetchReducer from './fetch';
import profileReducer from './profile';

const reducer = combineReducers({
  repo: repoReducer,
  profile: profileReducer,
  fetch: fetchReducer
});

export default reducer;
