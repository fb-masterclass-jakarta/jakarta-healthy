import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILED, RESET_STATE} from '../Containers/Constant';
import API from '../Config/Api';
import { setScreenOpen,setScreenClose } from './general';

this.api = API.create();

export function fetchDataFasksesRsUmum(){
  return (dispatch) => {
    dispatch(getDataFaskes());
    dispatch(setScreenOpen());
    this.api.fetchUmum().then((result) => {
      console.tron.log('rs umum');
      dispatch(getDataFaskesSuccess(result.data));
      dispatch(setScreenClose());
    }).catch((err) => {
      dispatch(getDataFaskesFailed(err));
      console.tron.log(err);
    });
  };
}

export function fetchDataFasksesRsKhusus() {
  return (dispatch) => {
    dispatch(getDataFaskes());
    dispatch(setScreenOpen());
    this.api.fetchKhusus().then((result) => {
      console.tron.log('rs khusus');
      dispatch(getDataFaskesSuccess(result.data));
      dispatch(setScreenClose());
    }).catch((err) => {
      dispatch(getDataFaskesFailed(err));
      console.tron.log(err);
    });
  };
}

export function fetchDataFasksesPuskesmas() {
  return (dispatch) => {
    dispatch(getDataFaskes());
    dispatch(setScreenOpen());
    this.api.fetchPuskesmas().then((result) => {
      console.tron.log('puskesmas');
      dispatch(getDataFaskesSuccess(result.data));
      dispatch(setScreenClose());
    }).catch((err) => {
      dispatch(getDataFaskesFailed(err));
      console.tron.log(err);
    });
  };
}

export function resetState() {
  return {
    type: RESET_STATE
  };
}

function getDataFaskes(){
  return {
    type: FETCHING_DATA
  };
}

function getDataFaskesSuccess(data){
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  };
}


function getDataFaskesFailed(err) {
  return {
    type: FETCHING_DATA_FAILED,
    err
  };
}