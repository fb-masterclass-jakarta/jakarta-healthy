import { OPEN_LOADING, CLOSE_LOADING } from '../Containers/Constant';

export function setScreenOpen(){
  return {
    type: OPEN_LOADING,
  };
}

export function setScreenClose() {
  return {
    type: CLOSE_LOADING,
  };
}