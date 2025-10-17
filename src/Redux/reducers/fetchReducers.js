const initialState = {
  pop: [],
  rock: [],
  hiphop: [],
};
const arrayPlaylist = (state = initialState, action) => {
  switch (action.type) {
    case `ADD_TO_POP`:
      return {
        ...state,
        pop: action.payload,
      };
    case `ADD_TO_ROCK`:
      return {
        ...state,
        rock: action.payload,
      };
    case `ADD_TO_HIPHOP`:
      return {
        ...state,
        hiphop: action.payload,
      };
    default:
      return state;
  }
};
export default arrayPlaylist;
