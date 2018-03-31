import { AsyncStorage } from 'react-native';
import {reduxThunk} from 'redux-thunk';
import {Facebook} from 'expo';
import {FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS} from './types';

//how to use AsyncStorge ->
//AsyncStorge.setItem('fb_token', token)
//AsyncStorge.getItem('fb_token')
export const facebookLogin = () => async dispatch => {
                let token = await AsyncStorage.getItem('fb_token');
                  if(token) {
                      //dispatch an action saying fb login is done.
                      dispatch({type : FACEBOOK_LOGIN_SUCCESS, payload: token })
                  } else {
                    //start fb login process
                    doFacebookLogin(dispatch);
                  }
                }

const doFacebookLogin = async dispatch => {
       let {type , token} = await Expo.Facebook.logInWithReadPermissionsAsync('319611848566905', {
                    permission : ['public_profile']
       });

       if(type === 'cancel'){
              return dispatch({type : FACEBOOK_LOGIN_FAIL})
       }

       await AsyncStorage.setItem('fb_token', token);
       dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload : token });
} ;
