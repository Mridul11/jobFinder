import React from 'react';
import {View } from 'react-native';
import{Text} from 'react-native-elements';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {text : 'Welcome to JobApp' },
  {text : 'Use this to get a job'},
  {text : 'set your location, then swipe away'}
];

class WelcomeScreen extends React.Component{
  render(){
    return(
        <Slides data={SLIDE_DATA}/>
    )
  }
}

export default WelcomeScreen;
