export const SET_PROFILE = 'SET_PROFILE';

/**
 * SetProfile: Action that sets user profile.
 *
 * @param {Object} value JSON Object containing profile data.
 */
export function setProfile(value) {
  return {
    type: SET_PROFILE,
    payload: { profile: value },
  };
}
