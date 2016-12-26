import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import {View, StyleSheet, ActivityIndicator, Image, Text} from 'react-native';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../features/session/SessionState';
import store from '../common/configStore';
import { Router, Scene } from 'react-native-router-flux';
import CounterView from '../features/counter/CounterView';
import HomeView from '../features/home/HomeView';
import ProductDetailView from '../features/productDetail/ProductDetailView';
import CartView from '../features/cart/CartView';
import CategoryView from '../features/category/CategoryView';



const TabIcon = (props)=>(<View><Image source={require('./../image/home.png')}/><Text style={{color: props.selected ? 'red' :'black'}}>{props.title}</Text></View>);

const AppView = React.createClass({
  propTypes: {
    isReady: PropTypes.bool.isRequired
  },
  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  },

  render() {
    if (!this.props.isReady) {
      return (
        <View>
          <ActivityIndicator style={styles.centered}/>
        </View>
      );
    }

    return (
        <Router>
          <Scene key="root">
                <Scene key="homeContainer" tabs={true} initial={true} tabBarStyle={{backgroundColor:'whitesmoke'}}>
                          <Scene key="home"  title="首页" icon={TabIcon} initial={true} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
                              <Scene key="tab1_1" component={HomeView} hideNavBar={true} title="首页" />
                              <Scene key="tab1_2" component={CartView} title="Tab #1_2" titleStyle={{color:'black'}}/>
                          </Scene>
                          <Scene key="cartContainer"  title="购物车" icon={TabIcon}>
                              <Scene key="cart" hideNavBar={false} component={CartView} title="购物车"/>
                          </Scene>
                          <Scene key="category" component={CategoryView} title="分类"  icon={TabIcon}/>
                          <Scene key="tab4" component={CounterView} title="Tab #4" hideNavBar={true} icon={TabIcon}/>
                          <Scene key="tab5" component={CounterView} title="Tab #5" icon={TabIcon} />
                  </Scene >
                  <Scene key="productDetailContainer" tabs={true}>
                     <Scene key="productDetail" component={ProductDetailView} initial={true} icon={TabIcon} title="商品详情"/>
                  </Scene>
                
              {/*__DEV__ && <DeveloperMenu />*/}
          </Scene>
      </Router>
   );
  }
});

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default connect(
  state => {
      return {
    isReady: state.IsessionState ? state.IsessionState.getIn(['isReady']) !== undefined?state.IsessionState.getIn(['isReady']):false:false
  };}
)(AppView);
