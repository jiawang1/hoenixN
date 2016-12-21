import React, {PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import { SearchBar, Button, Carousel,Grid,TabBar } from 'antd-mobile';
import {
  Text,
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
  render() {

    const index = this.props.index;
    const text = `View #${index}`;
    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <Text onPress={(...args)=>{this.onNextPress(...args)}}>
          {text}
        </Text>
        <Text>1273197
        </Text>
        <TabBar
                    style={{position:'absolute',bottom:20}}
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(state=>({
    test:1
}))(ColorView);