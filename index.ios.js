import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import Home from './app/components/Home';
//import DoctorList from './app/components/List';
//import DoctorDetail from './app/components/Detail';

export default class zoylo_poc extends Component {
  renderScene(route, navigator){
    switch(route.id){
      case 'home': return (<Home navigator={navigator} title="Home" />)
      //case 'doctorList': return (<DoctorList navigator={navigator} title="DoctorList" />)
      //case 'doctorDetail': return (<DoctorDetail navigator={navigator} res={route.res} title="DoctorDetail" />)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'home'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromTop}
      />
    );
  }
}

AppRegistry.registerComponent('zoylo_poc', () => zoylo_poc);
