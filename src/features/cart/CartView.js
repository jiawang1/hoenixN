import React, {PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import { WebView, StyleSheet,View,Text } from 'react-native';
import Dimensions from 'Dimensions';
import { Actions } from 'react-native-router-flux';


class CartView extends Component{

  constructor(){
    super();
  }
  render(){
      return (
        <View style={styles.cartView}>
          <WebView
            source={{uri: 'http://baidu.com'}}
            style={{marginTop: 20}}
            onMessage={(event)=>{ this.handleMessage(event)}}
           // contentInset={ {top: 10, left: 0, bottom: 0, right: 0}}
          />
        </View>
      );
  }
  handleMessage(e){
    console.log(`information from web page ${e.nativeEvent.data}`);
      Actions.productDetail();
  }
}

const styles = StyleSheet.create({
  cartView: {
    backgroundColor:"white",
    flex: 1
},
  last:{width: 100}

});


export default connect(state=>({
    cart: state.cart
}))(CartView)