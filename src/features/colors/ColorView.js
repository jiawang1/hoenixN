import React, {PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import { SearchBar, Button, Carousel,Grid,TabBar,List,Popup,WhiteSpace,Icon,Tag,Radio,Flex,SegmentedControl,Tabs } from 'antd-mobile';
import Dimensions from 'Dimensions';
//import { SegmentedControls } from 'react-native-radio-buttons';
import {
  Text,ScrollView,
  Image,TouchableHighlight,TouchableWithoutFeedback,
  View,WebView,
  StyleSheet
} from 'react-native';

import * as NavigationState from '../navigation/NavigationState';
const RadioItem = Radio.RadioItem;
const TabPane = Tabs.TabPane;
const color = () => Math.floor(255 * Math.random());

const data = [
      { value: 0, label: '博士' },
      { value: 1, label: '本科' },
      { value: 2, label: '高中' },
    ];

/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
const options = [
    "Option 1",
    "Option 2"
  ]



class ColorView extends Component{
  
  constructor(){
        super();
        this.state = {
        background: `rgba(${color()},${color()},${color()}, 1)` ,
        selectedTab:'blueTab',
        hidden: false,
        sel: '',
        value: 1,
      };
    }


    onChange(value) {
    this.setState({
      value,
    });
  }
  onNextPress() {
    const index = this.props.index;
    this.props.dispatch(NavigationState.pushRoute({
      key: `Color_${index + 1}`,
      title: `Color Screen #${index + 1}`
    }));
  }
  openPopup() {
    Popup.show(<View >
      <List renderHeader={()=>this.renderHeader()}>
      </List>
      <View style={{marginBottom:65}}>
      <Flex style={{paddingTop:15,paddingLeft:15,paddingRight:15}}>
          <Flex.Item><Tag style={styles.tag}>49寸智能4k</Tag></Flex.Item>
          <Flex.Item><Tag style={styles.tag}>50寸智能4k</Tag></Flex.Item>
          <Flex.Item><Tag style={styles.tag}>55寸智能4k</Tag></Flex.Item>
      </Flex>
      <Flex style={{paddingTop:15,paddingLeft:15,paddingRight:15}}>
          <Flex.Item><Tag style={styles.tag}>49寸智能4k</Tag></Flex.Item>
          <Flex.Item><Tag style={styles.tag}>50寸智能4k</Tag></Flex.Item>
          <Flex.Item><Tag style={styles.tag}>55寸智能4k</Tag></Flex.Item>
      </Flex>
      {/* 
      <List style={{height:200}}>
      <Radio>
          <RadioItem key='1'>49寸智能4k</RadioItem>
          <RadioItem key='2'>50寸智能4k</RadioItem>
          <RadioItem key='3'>55寸智能4k</RadioItem>
        </Radio>
          
      </List>
      */}
      </View>
      <Button style={{margin:10,position:'absolute',bottom:10,right:10}}type="primary" onClick={() => this.onClose()}>加入购物车</Button>

    </View>, { animationType: 'slide-up' });
  }
  
  renderHeader() {
    return (
        <View style={{ height:80 }}>
          <Image style={{width:60,height:60,position: 'absolute', left:10,top:5 }} source={{uri: 'http://m.360buyimg.com/n12/jfs/t3778/245/902901777/147756/5b1618be/5817f014N6710b01e.jpg!q70.jpg'}} />
          <Text style={{paddingLeft:10,color:'red',fontSize:16, position: 'absolute', left:80,top:5 }}>¥ 2000.00</Text>
          <Text style={{position: 'absolute', right: 3,top:5, }} onPress={() => this.onClose()}>关闭 </Text> 
        </View>
      )
  }

  
  onClose() {
    let sel = "cancel";
    this.setState({ sel });
    Popup.hide();
  }

  render() {

    const index = this.props.index;
    const text = `View #${index}`;
    return (
      <View style={[styles.container, {backgroundColor: '#fff'}]}>    
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
        >
          <TabBar.Item
          title="店铺"
          key="店铺"
          icon={require('./../../image/store.png')}
          selectedIcon={require('./../../image/store.png')}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
              this.setState({
              selectedTab: 'blueTab',
              });
          }}
          >
          <Tabs defaultActiveKey="2">
          <TabPane tab="商品" key="1">
      <ScrollView>
      <View style={styles.imageContainer}>
        <Carousel style={styles.carousel} infinite dots={false}> 
          <Image style={styles.image} source={{uri: 'http://m.360buyimg.com/n12/jfs/t3778/245/902901777/147756/5b1618be/5817f014N6710b01e.jpg!q70.jpg'}} />
          <Image style={styles.image} source={{uri: 'http://m.360buyimg.com/n12/jfs/t3415/166/1887465515/142495/edec4024/5837a76bN90915d39.jpg!q70.jpg'}} />
          <Image style={styles.image} source={{uri: 'http://m.360buyimg.com/n12/jfs/t3133/14/1568885205/215983/d5a5af0/57cfb628N297332ea.jpg!q70.jpg'}} />
          <Image style={styles.image} source={{uri: 'http://m.360buyimg.com/n12/jfs/t3247/279/3074453513/51884/dc637ab1/57eb7e1dN47558c9e.jpg!q70.jpg'}} />
          <Image style={styles.image} source={{uri: 'http://m.360buyimg.com/n12/jfs/t1012/326/1264711423/73166/b202b27e/558d18b0N081671be.jpg!q70.jpg'}} />            
        </Carousel>
      </View>
      
        {/* 
        <Text onPress={(...args)=>{this.onNextPress(...args)}}>
          {text}
        </Text>*/}
        <Text style={{padding:10,color:'#333'}}>海信（Hisense）LED55EC520UA 55英寸 VIDAA3 14核 炫彩4K智能电视(黑色)</Text>
        <Text style={{paddingLeft:10,color:'red',fontSize:20}}>¥ 2000.00</Text>
        
        <WhiteSpace size="sm" />
        <TouchableHighlight underlayColor='#fff' onPress={()=>{this.openPopup()}}>
            <View style={{height:30}}> 
              <Text>已选： 55寸智能4K 1件 增值保障</Text>
            </View> 
        </TouchableHighlight>
       
        </ScrollView>
          </TabPane>
          <TabPane tab="详情" key="2">
            <ScrollView>
                  <Image style={styles.image1} source={{uri: 'http://img20.360buyimg.com/vc/jfs/t3607/19/2447688804/78982/68db50/585255aeNe7d00ab1.jpg'}} />
                  <Image style={styles.image1} source={{uri: 'http://img20.360buyimg.com/vc/jfs/t3070/77/4741582297/80386/5a2608ef/585255aeNfb6d0072.jpg'}} />
                  <Image style={styles.image1} source={{uri: 'http://img20.360buyimg.com/vc/jfs/t3847/279/2212985187/80559/45a17706/585255afNc573e38f.jpg'}} />
                  <Image style={styles.image1} source={{uri: 'http://img20.360buyimg.com/vc/jfs/t3211/268/4725636792/80353/573be1/585255afNb87a3101.jpg'}} />
                  <Image style={styles.image1} source={{uri: 'http://img20.360buyimg.com/vc/jfs/t3151/91/4700017216/80617/f28c29ad/585255afNf8b9fb22.jpg'}} />            
            </ScrollView>
          </TabPane>
          <TabPane tab="评价" key="3">
            <View style={styles.imageContainer}>
        
        <Image style={styles.image} source={{uri: 'http://m.360buyimg.com/n12/jfs/t3778/245/902901777/147756/5b1618be/5817f014N6710b01e.jpg!q70.jpg'}} />
      </View>
          </TabPane>

      
      </Tabs>          
          </TabBar.Item>
          <TabBar.Item
          icon={require('./../../image/basket.png')}
          selectedIcon={require('./../../image/basket.png')}
          title="购物车"
          key="购物车"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
              this.setState({
              selectedTab: 'redTab',
              });
          }}
          >
          </TabBar.Item>
          
          <TabBar.Item
          title="加入购物车"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
              this.setState({
              selectedTab: 'yellowTab',
              });
          }}
          >
          </TabBar.Item>
          
          </TabBar>
                
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 54,
    // justifyContent: 'center',
    // alignItems: 'center'
  },image:{
    width: Dimensions.get('window').width-40,
    height: Dimensions.get('window').width-40
  },image1:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },carousel: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },imageContainer:{
    height: Dimensions.get('window').width,
    padding:20,
  },tag:{
    // marginTop:20
  }
});

export default connect(state=>({
    test:1
}))(ColorView);