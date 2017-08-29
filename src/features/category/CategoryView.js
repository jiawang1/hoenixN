import React, {PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import { SearchBar, Carousel,Grid,TabBar,List,Popup,WhiteSpace,Icon,Tag,Radio,Flex,SegmentedControl,Tabs } from 'antd-mobile';
import Dimensions from 'Dimensions';

import {
  Text,
  Button,
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
import CategoryDetail from './CategoryDetail';



const RadioItem = Radio.RadioItem;
const TabPane = Tabs.TabPane;
const color = () => Math.floor(255 * Math.random());


const data = [
      { value: 0, label: '博士' },
      { value: 1, label: '本科' },
      { value: 2, label: '高中' },
    ];


const categories = [
  {code:"cat001", name:"推荐分类"},
  {code:"cat002", name:"潮流女装"},
  {code:"cat003", name:"品牌男装"},
  {code:"cat004", name:"分类描述"},
  {code:"cat005", name:"分类描述"},
  {code:"cat006", name:"分类描述"},
  {code:"cat007", name:"分类描述"},
  {code:"cat008", name:"分类描述"},
  {code:"cat009", name:"分类描述"},
  {code:"cat010", name:"分类描述"},
  {code:"cat011", name:"分类描述"},
  {code:"cat012", name:"分类描述"},
  {code:"cat013", name:"分类描述"},
  {code:"cat014", name:"分类描述"},
  {code:"cat015", name:"分类描述"},
  {code:"cat016", name:"分类描述"}
];

const currentCategory = {
  code: "cat001",
  name: "推荐分类",
  ad: {
    url: "ad001",
    img: "aaaa.png"
  },
  groups: [
    {
      code:"sub-cat001", 
      name:"热卖选购", 
      rankUrl: "page001", 
      subCategories: [
        {code:"sub-cat001", name:"子类购", rankUrl: "page001" },
        {code:"sub-cat002", name:"子类", rankUrl: "page001" },
        {code:"sub-cat003", name:"子类", rankUrl: "page001" },
        {code:"sub-cat004", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat005", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat006", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat007", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat008", name:"子类述", rankUrl: "page001" }
      ]
    },
    {
      code:"sub-cat002", 
      name:"羽绒服", 
      rankUrl: "page001", 
      subCategories: [
        {code:"sub-cat001", name:"子类购", rankUrl: "page001" },
        {code:"sub-cat002", name:"子类", rankUrl: "page001" },
        {code:"sub-cat003", name:"子类", rankUrl: "page001" },
        {code:"sub-cat004", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat005", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat006", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat007", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat008", name:"子类述", rankUrl: "page001" }
      ]
    },
    {
      code:"sub-cat004", name:"分类描述", rankUrl: "page001", 
      subCategories: [
        {code:"sub-cat001", name:"子类购", rankUrl: "page001" },
        {code:"sub-cat002", name:"子类", rankUrl: "page001" },
        {code:"sub-cat003", name:"子类", rankUrl: "page001" },
        {code:"sub-cat004", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat005", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat006", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat007", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat008", name:"子类述", rankUrl: "page001" }
      ]
    },
    {
      code:"sub-cat005", name:"分类描述", rankUrl: "page001", 
      subCategories: [
        {code:"sub-cat001", name:"子类购", rankUrl: "page001" },
        {code:"sub-cat002", name:"子类", rankUrl: "page001" },
        {code:"sub-cat003", name:"子类", rankUrl: "page001" },
        {code:"sub-cat004", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat005", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat006", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat007", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat008", name:"子类述", rankUrl: "page001" }
      ]
    },
    {
      code:"sub-cat006", name:"分类描述", rankUrl: "page001", 
      subCategories: [
        {code:"sub-cat001", name:"子类购", rankUrl: "page001" },
        {code:"sub-cat002", name:"子类", rankUrl: "page001" },
        {code:"sub-cat003", name:"子类", rankUrl: "page001" },
        {code:"sub-cat004", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat005", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat006", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat007", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat008", name:"子类述", rankUrl: "page001" }
      ]
    },
    {
      code:"sub-cat007", 
      name:"分类描述", 
      rankUrl: "page001",
      subCategories: [
        {code:"sub-cat001", name:"子类购", rankUrl: "page001" },
        {code:"sub-cat002", name:"子类", rankUrl: "page001" },
        {code:"sub-cat003", name:"子类", rankUrl: "page001" },
        {code:"sub-cat004", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat005", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat006", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat007", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat008", name:"子类述", rankUrl: "page001" }
      ]
    },
    {
      code:"sub-cat008", name:"分类描述", rankUrl: "page001", 
      subCategories: [
        {code:"sub-cat001", name:"子类购", rankUrl: "page001" },
        {code:"sub-cat002", name:"子类", rankUrl: "page001" },
        {code:"sub-cat003", name:"子类", rankUrl: "page001" },
        {code:"sub-cat004", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat005", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat006", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat007", name:"子类述", rankUrl: "page001" },
        {code:"sub-cat008", name:"子类述", rankUrl: "page001" }
      ]
    },
  {
    code:"sub-cat009", 
    name:"分类描述", 
    rankUrl: "page001", 
    subCategories: [
      {code:"sub-cat001", name:"子类购", rankUrl: "page001" },
      {code:"sub-cat002", name:"子类", rankUrl: "page001" },
      {code:"sub-cat003", name:"子类", rankUrl: "page001" },
      {code:"sub-cat004", name:"子类述", rankUrl: "page001" },
      {code:"sub-cat005", name:"子类述", rankUrl: "page001" },
      {code:"sub-cat006", name:"子类述", rankUrl: "page001" },
      {code:"sub-cat007", name:"子类述", rankUrl: "page001" },
      {code:"sub-cat008", name:"子类述", rankUrl: "page001" }
    ]
  }
]

}

class CategoryView extends Component{
  
  constructor() {
    super();

    this.state = {
      background: `rgba(${color()},${color()},${color()}, 1)` ,
      selectedTab:'blueTab',
      hidden: false,
      sel: '',
      value: 1,
      currentCategory: null
    };
  }

  selectCategory(currentCategory) {
    console.log("select--->", currentCategory);
    //select current category and set to state
    
    this.setState({currentCategory});
  }
  render() {

    const index = this.props.index;

    let catBtns = categories.map((c, i) => <Button key={c.code} title={c.name} onPress={()=>this.selectCategory(c)}>{c.name}</Button>);
    
    return (
      <View style={[styles.container, {backgroundColor: '#fff'}]}>
        <View
          style={[styles.category, {backgroundColor: '#f0f'}]} >
          <ScrollView>
            {catBtns}
          </ScrollView>
        </View>
        <View style={[styles.subCategory, {backgroundColor: '#00f'}]} >
          <CategoryDetail currentCategory={currentCategory} />
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 54,
    flexDirection: 'row'
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  category: {
    flex: 1,
  },

  subCategory: {
    flex: 3,
  },

  image:{
    width: Dimensions.get('window').width-40,
    height: Dimensions.get('window').width-40
  },
  
  image1:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },
  
  carousel: {

    
  },
  
  imageContainer:{
    height: Dimensions.get('window').width,
    padding:20,
  },
  
  tag:{
    // marginTop:20
  }
});

export default connect(state=>({
    test:1
}))(CategoryView);