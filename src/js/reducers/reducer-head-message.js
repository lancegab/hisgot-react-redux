export default function(state=[], action){
  switch (action.type) {
    case "UPDATE_HEAD_MESSAGE":
      state = action.payload;
      return state;
      break;

    default:
      return state;
  }
}
