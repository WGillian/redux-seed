/* eslint-disable no-shadow */
const initialState = {
  isLearning: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'learning/BEGIN_LEARNING':
      return { ...state, isLearning: true }
    default:
      return state
  }
}
