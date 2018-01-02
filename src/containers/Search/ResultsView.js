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

/* Component ==================================================================== */
class ResultsView extends Component {
  static componentName = 'ResultsView';

  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.object),
    //reFetch: PropTypes.func,
  }

  static defaultProps = {
    //reFetch: null,
  }

  constructor() {
    super();

    this.state = {
      //results: 'No results to display',
      isRefreshing: true,
      // dataSource: new ListView.DataSource({
      //   rowHasChanged: (row1, row2) => row1 !== row2,
      // }),
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      //dataSource: this.state.dataSource.cloneWithRows(props.results),
      isRefreshing: false,
    });
  }

  /**
   * On Press of any menu item
   */
  onPress = (action) => {
    //this.props.closeSideMenu();
    //if (action) action(this.state.query);
  }

  /**
    * Refetch Data (Pull to Refresh)
    */
  reFetch = () => {
    if (this.props.reFetch) {
      this.setState({ isRefreshing: true });

      this.props.reFetch()
        .then(() => {
          this.setState({ isRefreshing: false });
        });
    }
  }

  render = () => {
    //const { recipes } = this.props;
    const { isRefreshing, dataSource } = this.state;
    console.log("logging results view **********************")
    console.log("***************************")

    // if (!isRefreshing && (!recipes || recipes.length < 1)) {
    //   return <Error text={ErrorMessages.recipe404} />;
    // }

    return (
      <View style={[AppStyles.container]}>
        <Text
          style={[AppStyles.textCenterAligned]}
        >
          test
          {this.state.results}
        </Text>
      </View>
    );
  }
}
/* Export Component ==================================================================== */
export default ResultsView;
