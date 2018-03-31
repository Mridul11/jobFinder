import React from 'react';
import{View, Text, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-elements';
import { MapView } from 'expo';
import {connect} from 'react-redux';
import {fetchJobs} from '../actions/job_action';

class MapScreen extends React.Component{
  state = {
    mapLoaded : false,
    region:{
      longitude: -122 ,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    }
  }

  componentWillMount(){
    this.setState({ mapLoaded:true })
  };

   onRegionChange(region){
    console.log(region)
    this.setState({ region });
  }

  onBtnPressed =()=>{
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck');
    });
  }

  render(){
    if(!this.state.mapLoaded){
      return(
        <View style={{flex:1, justifyContent:'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <View style={{flex:1}}>
        <MapView
          style={{flex:1}}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
        />
        <View style={styles.buttonStyle}>
          <Button
          large
          title="set my position"
          backgroundColor='#009688'
          icon={{ name:'search' }}
          onPress={this.onBtnPressed}/>
        </View>
      </View>
    );
  }
}

const styles={
  buttonStyle :{
    position:'absolute',
    bottom : 20,
    left : 0,
    right:0
  }
}

export default connect(null, {fetchJobs})(MapScreen);
