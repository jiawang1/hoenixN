import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import { SearchBar, Button } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as actions from './actions';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

 class HomeView extends Component{

    constructor(){
        super();
    }

    pressButon(){
        Actions.counter({from: 'Home'});
    }

    render(){
        return (
            <View style={styles.container}>
                <SearchBar placeholder="搜索"></SearchBar>
                <Text>this should be the home page for Wuxing site</Text>
                <Button onClick={()=>{this.pressButon()}}>to counter</Button>
            </View>
        );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect(state=>({
    test:1
}))(HomeView);