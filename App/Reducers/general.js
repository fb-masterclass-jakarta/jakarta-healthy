import { OPEN_LOADING, CLOSE_LOADING } from '../Containers/Constant';

const INITIAL_STATE = {
  loadingScreen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_LOADING:
      state = {
        ...state,
        loadingScreen: true
      };
      break;
    case CLOSE_LOADING:
      state = {
        ...state,
        loadingScreen: false,
      };
      break;
  }
  return state;
};
