
import * as NavigationState from '../navigation/NavigationState';
import * as actions from './actions';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import DeveloperMenu from '../../components/DeveloperMenu';
import { Actions } from 'react-native-router-flux';
import {Button} from 'antd-mobile';

import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const CounterView = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired
  },
  increment() {
    const {increment} = this.props.actions;
    increment();
  },
  reset() {
    const {reset} = this.props.actions;
    reset();
  },
  random() {
    const {random} = this.props.actions;
    random();
  },
  bored() {
      Actions.color();
  },

  renderUserInfo() {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfilePhoto}
          source={{
            uri: this.props.userProfilePhoto,
            width: 80,
            height: 80
          }}
        />
        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
      </View>
    );
  },
  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;

    return (
      <View style={styles.container}>

        {this.renderUserInfo()}

        <TouchableOpacity
          onPress={this.increment}
          style={[styles.counterButton, loadingStyle]}>
          <Text style={styles.counter}>
            {this.props.counter}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.reset}>
          <Text style={styles.linkButton}>
            Reset
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.random}>
          <Text style={styles.linkButton}>
            Random
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={(...args)=>this.bored(...args)} accessible={true}>
          <Text style={styles.linkButton}>
            {'I\'m bored!'}
          </Text>
        </TouchableOpacity>
        <Button>test</Button>
        <DeveloperMenu />
      </View>
    );
  }
});

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});

export default connect(
  state => ({
    counter: state.IcounterState ? state.IcounterState.getIn([ 'value']):0,
    loading: state.IcounterState ? state.IcounterState.getIn(['loading']):false
  }), 
  dispatch=>({
    actions: bindActionCreators({ ...actions }, dispatch)
  })
)(CounterView);
