/**
 * Recipe Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/**
  * Get this User's Favourite Recipes
  */
export function getFavourites(dispatch) {
  // if (Firebase === null) return () => new Promise(resolve => resolve());
  //
  // const UID = Firebase.auth().currentUser.uid;
  // if (!UID) return false;
  //
  // const ref = FirebaseRef.child(`favourites/${UID}`);
  //
  // return ref.on('value', (snapshot) => {
  //   const favs = snapshot.val() || [];
  //
    return dispatch({
      type: 'FAVOURITES_REPLACE',
      data: [],
    });
  // });
}

/**
  * Reset a User's Favourite Recipes in Redux (eg for logou)
  */
export function resetFavourites(dispatch) {
  return dispatch({
    type: 'FAVOURITES_REPLACE',
    data: [],
  });
}

/**
  * Update My Favourites Recipes
  */
export function replaceFavourites(newFavourites) {
  // if (Firebase === null) return () => new Promise(resolve => resolve());
  //
  // const UID = Firebase.auth().currentUser.uid;
  // if (!UID) return false;
  //
  // return () => FirebaseRef.child(`favourites/${UID}`).set(newFavourites);
}

/**
  * Get Meals
  */
export function getMeals() {
  // if (Firebase === null) return () => new Promise(resolve => resolve());
  //
  // return dispatch => new Firebase.Promise((resolve) => {
  //   const ref = FirebaseRef.child('meals');
  //
  //   return ref.once('value').then((snapshot) => {
  //     const meals = snapshot.val() || {};
  //
      return {
        type: 'MEALS_REPLACE',
        data: [],
      };
  //   });
  // });
}

/**
  * Get Recipes
  */
export function getRecipes() {
  // if (Firebase === null) return () => new Promise(resolve => resolve());
  //
  // return dispatch => new Firebase.Promise((resolve) => {
  //   const ref = FirebaseRef.child('recipes');
  //
  //   return ref.on('value', (snapshot) => {
  //     const recipes = snapshot.val() || {};
  //
      return {
        type: 'RECIPES_REPLACE',
        data: [],
      };
  //   });
  // });
}

export function getResults() {
  //return fetch('https://jsonplaceholder.typicode.com/posts/1')
  //return dispatch => fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then( (response) => {
    //   return {
    //     type: 'RESULTS_REPLACE',
    //     data: []
    //   };
    // })
}
