export const SET_REPO_LIST = 'SET_REPO_LIST';

/**
 * SetRepoLost: Action that sets Repo List.
 *
 * @param {List} value List  containing repos data.
 */
export const setRepoList = (value) => ({
  type: SET_REPO_LIST,
  payload: { repoList: value },
});
