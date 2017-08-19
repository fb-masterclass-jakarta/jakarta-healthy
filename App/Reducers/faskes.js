import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILED, RESET_STATE } from '../Containers/Constant';

const INITIAL_STATE = {
  isFetching: false,
  open:false,
  dataFaskes:[],
  error:false,
  errorMessage:null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      state = {
        ...state,
        isFetching: true
      };
      break;
    case FETCHING_DATA_SUCCESS:
      state = {
        ...state,
        open:true,
        dataFaskes: action.data
      };
      break;
    case FETCHING_DATA_FAILED:
      state = {
        ...state,
        isFetching: false,
        open: false,
        errorMessage: action.err
      };
      break;
    case RESET_STATE:
      state = INITIAL_STATE;
      break;
    default:
      break;
  }
  return state;
};
