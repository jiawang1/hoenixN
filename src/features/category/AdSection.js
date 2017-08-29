import React, {PropTypes,Component} from 'react';

import {
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  ListView,
  WebView,
  StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions';


export default class AdSection extends Component {

  render() {

    let {ad} = this.props;
    if (!ad) {
      return null;
    }
    let uri = ad.url;
    //let jumpUri = "";

    uri = "http://m.360buyimg.com/n12/jfs/t3778/245/902901777/147756/5b1618be/5817f014N6710b01e.jpg!q70.jpg";

    return (
      <View >
        <Image style={styles.image} source={{uri}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image:{
    width: Dimensions.get('window').width-40,
    height: Dimensions.get('window').width-40
  },
  
  image1:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  }

});
