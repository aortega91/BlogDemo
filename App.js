import React, { Component } from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/utils/redux/reducer'

import {createStackNavigator, createAppContainer} from 'react-navigation';

import Blog from './src/components/Blog/Blog';
import PostDetails from './src/components/Post/PostDetails';


import {globalStyle} from './src/globalStyles';

const {primaryColor} = globalStyle.themeStyle;

const store = createStore(reducer);

const MainNavigator = createStackNavigator({
    Blog: {screen: Blog},
    PostDetails: {screen: PostDetails},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft: 0,
      },
    },
  });

const NavigatorContainer = createAppContainer(MainNavigator);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NavigatorContainer/>
      </Provider>
    );
  }
}


