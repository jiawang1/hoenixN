import React, {PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import { SearchBar, Button, Carousel,Grid,TabBar,List,Popup,WhiteSpace,Icon } from 'antd-mobile';
import Dimensions from 'Dimensions';
import {
  Text,
  Image,TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import * as NavigationState from '../navigation/NavigationState';

const color = () => Math.floor(255 * Math.random());

/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */


class ColorView extends Component{
  
  constructor(){
        super();
        this.state = {
        background: `rgba(${color()},${color()},${color()}, 1)` ,
        selectedTab:'redTab',
        hidden: false,
        sel: '',
      };
    }
  onNextPress() {
    const index = this.props.index;
    this.props.dispatch(NavigationState.pushRoute({
      key: `Color_${index + 1}`,
      title: `Color Screen #${index + 1}`
    }));
  }
  renderContent(pageText) {
        return (
        <View style={{ backgroundColor: 'white', height: 100}}>
            <View style={{ paddingTop: 60 }}><Text>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</Text></View>
        </View>
        );
    }
  openPopup() {
    Popup.show(<View style={{height:500}}>
      <List renderHeader={()=>this.renderHeader()}>
        <List.Item key={1}>49寸智能4k</List.Item>
        <List.Item key={2}>50寸智能4k</List.Item>
        <List.Item key={3}>55寸智能4k</List.Item>
      </List>
    </View>, { animationType: 'slide-up', maskClosable: true });
  }
  
  renderHeader() {
    return (
        <View style={{ position: 'relative' }}>
          <Text>委托买入</Text>
          <Text style={{position: 'absolute', right: 3, top: -5, color:'red' }} onPress={()=>this.onClose()} >
          关闭
          </Text>
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
      <View style={[styles.container, {backgroundColor: '#F8F8F8'}]}>
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
        {/* */}
        <WhiteSpace size="sm" />
        <TouchableHighlight underlayColor='#fff' onPress={()=>{this.openPopup()}}>
            <View> 
              <Text>已选： 55寸智能4K 1件 增值保障</Text>
            </View> 
        </TouchableHighlight>
        
        <TabBar
                   
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                    title="生活"
                    key="生活"
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'blueTab',
                        });
                    }}
                    data-seed="logId"
                    >
                    {this.renderContent('生活')}
                    </TabBar.Item>
                    <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                    title="口碑"
                    key="口碑"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'redTab',
                        });
                    }}
                    data-seed="logId1"
                    >
                    {this.renderContent('口碑')}
                    </TabBar.Item>
                    <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    title="朋友"
                    key="朋友"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'greenTab',
                        });
                    }}
                    >
                    {this.renderContent('朋友')}
                    </TabBar.Item>
                    <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png' }}
                    title="我的"
                    key="我的"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                        this.setState({
                        selectedTab: 'yellowTab',
                        });
                    }}
                    >
                    {this.renderContent('我的')}
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
  },carousel: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },imageContainer:{
    height: Dimensions.get('window').width,
    padding:20,
  }
});

export default connect(state=>({
    test:1
}))(ColorView);