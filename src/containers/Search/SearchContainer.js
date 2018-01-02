/**
 * Container for Search
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as SearchActions from '@redux/search/actions';

// Components
import Loading from '@components/general/Loading';
import SearchViewRender from './SearchView';

/* Redux ==================================================================== */
// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  results: state.results || [],
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getResults: SearchActions.getResults,
};

/* Component ==================================================================== */
class SearchListing extends Component {
  static componentName = 'SearchListing';

  static propTypes = {
    //results: PropTypes.arrayOf(PropTypes.object),
    //meal: PropTypes.string.isRequired,
    getResults: PropTypes.func.isRequired,
  }

  static defaultProps = {
    results: [],
  }

  state = {
    loading: false,
    results: [],
  }

  //componentDidMount = () => this.getThisMealsRecipes(this.props.recipes);
  //componentWillReceiveProps = props => this.getThisMealsRecipes(props.recipes);

  // /**
  //   * Pick out recipes that are in the current meal
  //   * And hide loading state
  //   */
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
  fetchResults = (query) => fetch("https://jsonplaceholder.typicode.com/posts") //this.props.getResults(query)
   .then((response) => {
     console.log("response*************", response)
     this.setState({ error: null, loading: false, results: response})
   })
   .catch(err => this.setState({ error: err.message, loading: false, results: []}))

  render = () => {
    if (this.state.loading) return <Loading />;
    return (
      <SearchViewRender
        results={this.state.results}
        reFetch={this.fetchResults} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListing);
