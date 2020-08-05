export const SET_PROFILE = 'SET_PROFILE';

export function setProfile(value) {
  return {
    type: SET_PROFILE,
    payload: { profile: value }
  };
}
