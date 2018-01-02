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
import ResultsViewRender from './ResultsView';

// Containers
//import RecipeCard from '@containers/recipes/Card/CardContainer';

// Components
import Error from '@components/general/Error';

/* Component ==================================================================== */
class SearchView extends Component {
  static componentName = 'RecipeListing';

  static propTypes = {
    //query: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
    reFetch: PropTypes.func
  }

  static defaultProps = {
    reFetch: null,
  }

  constructor() {
    super();

    this.state = {
      query: '',
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
    * Refetch Data (Pull to Refresh)
    */
  reFetch = (query) => {
    if (this.props.reFetch) {
      this.setState({ isRefreshing: true });

      this.props.reFetch(query)
        .then(() => {
          this.setState({ isRefreshing: false });
        });
    }
  }

  render = () => {
    //const { recipes } = this.props;
    const { isRefreshing, dataSource } = this.state;
    console.log("logging search view **********************")
    console.log("***************************")

    // if (!isRefreshing && (!recipes || recipes.length < 1)) {
    //   return <Error text={ErrorMessages.recipe404} />;
    // }

    return (
      <View style={[AppStyles.container]}>
      <SearchBar
        lightTheme
        round
        onChangeText={(query) => this.setState({query})}
        onClearText={ () => this.setState({query: ''})}
        placeholder='Type Here...'
        value={this.state.query} />
        <Button small title={'Search'} onPress={() => this.reFetch(this.state.query)} />
        <ResultsViewRender
          results={this.state.results}
        />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default SearchView;
