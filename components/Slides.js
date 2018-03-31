import React, {Component} from 'react';
import {ScrollView, View, Dimensions, pagingEnabled} from 'react-native';
import {Text, Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component{

  renderLastSlide(index){
    if(index === this.props.data.length -1){
      return(
        <Button
          title ="Onwards"
          raised
          buttonStyle ={styles.buttonStyle}
          onPress = {this.props.onComplete}
        />
      );
    }
  }

  renderSlides(){
      return this.props.data.map((slide, index) => {
        return (
            <View
               key={slide.text}
               style={[styles.slideStyle, { backgroundColor: slide.color }]}
              >
                 <Text h4 style={styles.textStyle}>{slide.text}</Text>
                 {this.renderLastSlide(index)}
            </View>
              );
          });
    }

  render(){
    return(
      <ScrollView
        horizontal
        style={{flex:1}}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles ={
  slideStyle :{
    alignItems:'center',
      justifyContent:'center',
      width:SCREEN_WIDTH
  },
  textStyle :{
    color : 'white'
  },
  buttonStyle :{
    marginTop : 10,
    backgroundColor : "#ff7b25"
  }
}

export default Slides;
