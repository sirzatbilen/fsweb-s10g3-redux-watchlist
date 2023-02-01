import { FAV_ADD, FAV_DELETE } from "../action/action";

const initialState = {
  favMovies: JSON.parse(localStorage.getItem("film")) || [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FAV_ADD:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    case FAV_DELETE:
      return {
        ...state,
        favMovies: state.favMovies.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}
