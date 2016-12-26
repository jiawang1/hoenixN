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
import AdSection from './AdSection';
import CategorySection from './CategorySection';


export default class CategoryDetail extends Component {

  render() {

    let cat = this.props.currentCategory;

    if (!cat) {
      return null;
    }
    let groups = cat.groups;

    let sections = groups.map(g => <CategorySection group={g} />);

    return (
      <ScrollView>
        <AdSection ad={cat.ad}/>
        {sections}
      </ScrollView>
    );
  
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
