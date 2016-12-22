import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../features/session/SessionState';
import store from '../common/configStore';
import { Router, Scene } from 'react-native-router-flux';
import CounterView from '../features/counter/CounterView';
import HomeView from '../features/home/HomeView';
import ProductDetailView from '../features/productDetail/ProductDetailView';
import CartView from '../features/cart/CartView';

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
           <Scene key="home" hideNavBar={true} component={HomeView} title="五星" initial={true} />
           <Scene key="counter" component={CounterView} title="counter" />
           <Scene key="productDetail" hideNavBar={false} component={ProductDetailView} title="商品详情"/>
           <Scene key="cart" hideNavBar={false} component={CartView} title="购物车"/>
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
