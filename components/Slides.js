import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Text, Badge} from 'react-native-elements';

class Slides extends Component{

  renderSlides(){
      return this.props.data.map((slide) => {
        return (
            <View
              style={{alignItems:'center', justifyContent:'center'}}
               key={slide.text}>
              <Badge
                containerStyle={{ backgroundColor: 'violet'}} >
                 <Text h4>{slide.text}</Text>
              </Badge>
            </View>
              );
          });
    }

  render(){
    // console.log(this.props)
    return(
      <ScrollView
        horizontal
        style={{flex:1}}
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

export default Slides;
