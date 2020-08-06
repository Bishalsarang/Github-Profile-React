export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';

/**
 * SetFetchStatus: sets the status if data is being fetched.
 *
 * @param {Boolean} flag
 */
export function setFetchStatus(flag) {
  return {
    type: SET_FETCH_STATUS,
    payload: { flag },
  };
}
