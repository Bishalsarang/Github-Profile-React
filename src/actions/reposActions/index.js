export const SET_REPO_LIST = 'SET_REPO_LIST';

export const setRepoList = (value) => {
  return {
    type: SET_REPO_LIST,
    payload: { repoList: value }
  };
};
