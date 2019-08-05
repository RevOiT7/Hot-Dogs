import actionType from "../../root/actionType";

const {
  GET_ALL_HOT_DOGS,
  SET_HOT_DOGS,
  FETCH_HOT_DOG_REQUEST,
} = actionType;

export const getHotDogs = () => ({ type: GET_ALL_HOT_DOGS });
export const setHotDogs = (array) => ({ type: SET_HOT_DOGS, payload:  array});
export const fetchHotDogRequest = data => ({ type: FETCH_HOT_DOG_REQUEST, payload: data });

