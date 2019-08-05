import actionType from '../../root/actionType';

const intialState = {
  hotDods: [],
};

export const reducerHome = (state = intialState, action) => {
  switch (action.type) {
    case actionType.SET_HOT_DOGS:
      return {
        ...state,
        hotDods: action.payload
      };
    default:
      return state;
  }
};
