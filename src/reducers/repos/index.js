import { SET_REPO_LIST } from '../../actions/reposActions';

const INITIAL_STATE = {
  repoList: [],
};

const repoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_REPO_LIST:
      return { ...state, repoList: action.payload.repoList };
    default:
      return state;
  }
};

export default repoReducer;
