import React, {PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import { SearchBar, Button, Carousel,Grid,TabBar,List,Popup,WhiteSpace,Icon,Tag,Radio,Flex,SegmentedControl,Tabs } from 'antd-mobile';
import Dimensions from 'Dimensions';


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

import * as NavigationState from '../navigation/NavigationState';


const subCategories = [
  {code:"sub-cat001", name:"子类购", rankUrl: "page001", },
  {code:"sub-cat002", name:"子类", rankUrl: "page001", },
  {code:"sub-cat003", name:"子类", rankUrl: "page001", },
  {code:"sub-cat004", name:"子类述", rankUrl: "page001", },
  {code:"sub-cat005", name:"子类述", rankUrl: "page001", },
  {code:"sub-cat006", name:"子类述", rankUrl: "page001", },
  {code:"sub-cat007", name:"子类述", rankUrl: "page001", },
  {code:"sub-cat008", name:"子类述", rankUrl: "page001", }
];

 const itemsPerRow = 3;


export default class CategorySection extends Component {

  
  renderGrid(categories) {
    let rows = [];
    let row = [];

    for (let i=0; i<categories.length; i++) {
      if (i % itemsPerRow === 0) {
        row = [];
        rows.push(row);
      }
      row.push(categories[i]);
    }
    let left = categories.length % itemsPerRow;
    if (left !== 0) {
      for (i=(itemsPerRow - left); i>0; i-- ) {
        row.push({left: true})
      }
    }

    return rows.map(row => {
      let items = row.map(item => {

        if (!item.left) {
          return (
            <View style={[styles.gridCell, {backgroundColor: '#ff0'}]}>
              <Image source={require('./../../image/pad2.png')} />
              <Text>{item.name}</Text>
            </View>
          );
        } else {
          return (
            <View style={[styles.gridCell, {backgroundColor: '#ff0'}]}>
            </View>
          )
        }
      })

      return (
        <View style={[styles.gridRow, {backgroundColor: '#ff0'}]}>
          {items}
        </View>
      )
    })
    
  }


  render() {
    let {group} = this.props;

    return (
      <View>
        <View style={[styles.title, {backgroundColor: '#ff0'}]}>
          <Text>{group.name}</Text>
          <Text><Image source={require('./../../image/rank.png')} />排行榜> </Text>
        </View>
        <View style={[styles.gridContainer, {backgroundColor: '#ff0'}]}>
          {this.renderGrid(group.subCategories)}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  title:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  gridContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  gridRow:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  gridCell:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }

});
