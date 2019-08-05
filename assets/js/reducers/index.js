import { SET_LOADED } from '../actions';

const initialState = {
  isAnimating: true
}

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case SET_LOADED:
      return { ...state, isAnimating: false };
    default:
      return state;
  }
}