import { ADD_TO_NEWSEARCH } from "../actions";

const initialState = {
  search: "",
};
const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_NEWSEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducers;
