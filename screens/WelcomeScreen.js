import React from 'react';
import {View } from 'react-native';
import{Text} from 'react-native-elements';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {text : 'Welcome to JobApp' , color:'#03A9F4' },
  {text : 'Use this to get a job', color:'#009688'},
  {text : 'set your location, then swipe away', color:'#ff7b25'}
];

class WelcomeScreen extends React.Component{

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render(){
    return(
        <Slides data={SLIDE_DATA}
        onComplete = {this.onSlidesComplete}/>
    )
  }
}

export default WelcomeScreen;
