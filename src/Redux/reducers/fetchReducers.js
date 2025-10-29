import { ADD_TO_HIPHOP, ADD_TO_POP, ADD_TO_ROCK, ADD_TO_SEARCH } from "../actions";

const initialState = {
  pop: [],
  rock: [],
  hiphop: [],
  artistSearched: [],
};
const arrayPlaylist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case ADD_TO_ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case ADD_TO_HIPHOP:
      return {
        ...state,
        hiphop: action.payload,
      };
    case ADD_TO_SEARCH:
      return {
        ...state,
        artistSearched: action.payload,
      };
    default:
      return state;
  }
};
export default arrayPlaylist;
