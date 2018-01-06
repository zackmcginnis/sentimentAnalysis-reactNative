/**
 * Recipe Listing Screen
 *  - Shows a list of receipes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import PropTypes from 'prop-types';
import {
  View,
  ListView,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';
import { ErrorMessages } from '@constants/';

// Components
import { Spacer, Text, Button } from '@ui/';

// Containers
//import RecipeCard from '@containers/recipes/Card/CardContainer';

// Components
import Error from '@components/general/Error';


class ResultListItem extends Component {
  _onPress = () => {
    //this.props.onPressItem(this.props.id);
  };

  render() {
    //const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: 'black' }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
/* Export Component ==================================================================== */
export default ResultListItem;
