import axios from 'axios';
import Interface from './interface';

export default function(state=[], action){

  switch (action.type) {
    case "FIND_TOPICS":
      state = action.payload;
      return state;
      break;

    default:
      return state;
      break;
    }
}
