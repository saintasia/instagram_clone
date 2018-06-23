// a reducer takes in 2 things

// 1) the action (info about what happened)
// 2) copy of current state
// 3) new state

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes');
      //return updated state
      const i = action.index;
      return [
        //es6 spread
        ...state.slice(0, i), //before the one we're updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), //after the one we're updating
      ]
    default:
      return state;
  }
}

export default posts;
