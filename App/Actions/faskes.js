import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILED, RESET_STATE } from '../Containers/Constant';
import API from '../Config/Api';

this.api = API.create();

export function fetchDataFasksesRsUmum(){
  return (dispatch) => {
    dispatch(getDataFaskes());
    this.api.fetchUmum().then((result) => {
      dispatch(getDataFaskesSuccess(result.data));
    }).catch((err) => {
      dispatch(getDataFaskesFailed(err));
      console.tron.log(err);
    });
  };
}

export function fetchDataFasksesRsKhusus() {
  return (dispatch) => {
    dispatch(getDataFaskes());
    this.api.fetchKhusus().then((result) => {
      dispatch(getDataFaskesSuccess(result.data));
    }).catch((err) => {
      dispatch(getDataFaskesFailed(err));
      console.tron.log(err);
    });
  };
}

export function fetchDataFasksesPuskesmas() {
  return (dispatch) => {
    dispatch(getDataFaskes());
    this.api.fetchPuskesmas().then((result) => {
      dispatch(getDataFaskesSuccess(result.data));
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