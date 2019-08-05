const initialState = {
  isAnimating: true
}

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }

  return state
}