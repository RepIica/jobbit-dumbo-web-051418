export const getHobbits = (data) => {
  return {
    type: 'LOAD_HOBBITS',
    payload: {
      hobbits: data
    }
  }
}

export const selectHobbit = (hobbit) => {
  return {
    type: 'SELECT_HOBBIT',
    payload: {
      hobbit
    }
  }
}
export const updateHobbit = (hobbit) => {
  return {
    type: 'UPDATE_HOBBIT',
    payload: {
      hobbit
    }
  }
}
