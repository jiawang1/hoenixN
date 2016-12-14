import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../features/session/SessionState';
import store from '../common/configStore';
import { Router, Scene } from 'react-native-router-flux';
import CounterView from '../features/counter/CounterView';
import ColorViewContainer from '../features/colors/ColorViewContainer';

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
      
            <Scene key="counter" component={CounterView} title="counter" initial={true} />
            <Scene key="color" component={ColorViewContainer} title="color"/>
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
