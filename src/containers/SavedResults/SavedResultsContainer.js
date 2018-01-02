/**
 * Container for Search and Results
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
//import * as ResultsActions from '@redux/results/actions';

// Components
import Loading from '@components/general/Loading';
import SavedResultsViewRender from './SavedResultsView';

/* Redux ==================================================================== */
// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  //recipes: state.recipe.recipes || [],
});

// Any actions to map to the component?
const mapDispatchToProps = {
  //getRecipes: ResultsActions.getRecipes,
};

/* Component ==================================================================== */
class SavedResultsListing extends Component {
  static componentName = 'SavedResultsListing';

  static propTypes = {
    //recipes: PropTypes.arrayOf(PropTypes.object),
    //meal: PropTypes.string.isRequired,
    //getRecipes: PropTypes.func.isRequired,
  }

  static defaultProps = {
    //recipes: [],
  }

  state = {
    loading: false,
    //recipes: [],
  }

  //componentDidMount = () => this.getThisMealsRecipes(this.props.recipes);
  //componentWillReceiveProps = props => this.getThisMealsRecipes(props.recipes);

  /**
    * Pick out recipes that are in the current meal
    * And hide loading state
    */
  // getThisMealsRecipes = (allRecipes) => {
  //   if (allRecipes.length > 0) {
  //     const recipes = allRecipes.filter(recipe =>
  //       recipe.category.toString() === this.props.meal.toString(),
  //     );
  //
  //     this.setState({
  //       recipes,
  //       loading: false,
  //     });
  //   }
  // }

  /**
    * Fetch Data from API
    */
    render = () => {
      //if (this.state.loading) return <Loading />;

      return (
        <SavedResultsViewRender />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedResultsListing);
