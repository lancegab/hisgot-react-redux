export default function(state=null, action){
  switch (action.type) {
    case "CATEGORY_SELECTED":
      console.log("CATEGORY_SELECTED");
      return action.payload;
      break;
    case "TOPIC_SELECTED":
      console.log("TOPIC_SELECTED");
      return action.payload;
      break;
    case "MESSAGE_SELECTED":
      console.log("MESSAGE_SELECTED");
      return action.payload;
      break;

    default:


  }
  return state;
}
