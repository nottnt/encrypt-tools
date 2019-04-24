export default (state = {}, action) => {
  switch (action.type) {
  case 'SIMPLE_ACTION':
    return {
      result: action.payload
    }
  case 'SET_VALUE':
    return {
      ...state,
      [action.fieldId]: action.value
    }
  default:
    return state
  }
}