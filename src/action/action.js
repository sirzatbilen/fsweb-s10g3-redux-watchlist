export const FAV_ADD = "FAV_ADD";
export const FAV_DELETE = "FAV_DELETE";

export const favAdd = (newMovie) => ({
  type: FAV_ADD,
  payload: newMovie,
});

export const favDelete = (id) => ({
  type: FAV_DELETE,
  payload: id,
});
