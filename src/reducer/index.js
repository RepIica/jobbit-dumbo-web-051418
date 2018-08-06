const initialState = {
  hobbits: [],
  selectedHobbit: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOAD_HOBBITS':
    console.log(action)
    return {
      ...state,
      hobbits: action.payload.hobbits
    }

    case 'SELECT_HOBBIT':
    console.log(action.payload.hobbit)
    return {
      ...state,
      selectedHobbit: action.payload.hobbit
    }

    case 'UPDATE_HOBBIT':
    
    return {

    }

    default:
    return state
  }

};

export default reducer
