import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from '../actions/types';

export default function(state ={}, action){
  switch(action.type){
    case 'facebook_login_success':
      return {...state, token: action.payload}
    case 'facebook_login_fail':
      return {...state, token : null}
    default:
      return state;
    }
}
