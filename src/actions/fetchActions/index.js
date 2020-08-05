export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';

export function setFetchStatus(flag) {
  return {
    type: SET_FETCH_STATUS,
    payload: { flag: flag }
  };
}
