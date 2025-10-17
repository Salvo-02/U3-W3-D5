export const ADD_TO_POP = "ADD_TO_POP";
export const ADD_TO_ROCK = "ADD_TO_ROCK";
export const ADD_TO_HIPHOP = "ADD_TO_HIPHOP";

const myApi = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
export const fillMusicSection = async (artistName, typeSelec) => {
  return async (dispatch, getState) => {
    console.log(getState);

    try {
      const response = await fetch(myApi + artistName);
      if (response.ok) {
        let { data } = await response.json();
        const Array = [];
        for (let i = 0; i < 4; i++) {
          Array.push(data[i]);
        }
        dispatch({ type: typeSelec, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
