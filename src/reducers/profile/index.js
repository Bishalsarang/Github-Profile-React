import { SET_PROFILE } from '../../actions/profileActions';

const INITIAL_STATE = {
  profile: {},
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.payload.profile };
    default:
      return state;
  }
};

export default profileReducer;
