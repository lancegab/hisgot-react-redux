import axios from 'axios';
import Interface from './interface';

// function searchCategories(state){
//   console.log('searching');
//   axios.get('/findCategories')
//     .then(function(response){
//       console.log("findCategories()", response.data);
//       categoriesReducer(state , {type: 'UPDATE_CATEGORIES', payload: response.data});
//     })
//     .catch(function (error){
//       console.log(error);
//     });
// }

function categoriesReducer(state=[], action){
  switch (action.type) {
    // case "FIND_CATEGORIES":
    //   searchCategories(state);
    //   return state;
    //   break;

    case "FIND_CATEGORIES":
      // console.log("UPDATE");
      state = action.payload;
      return state;
      break;

    default:
      console.log("DEFAULT ", state);
      return state;
  }


}

export default categoriesReducer;
