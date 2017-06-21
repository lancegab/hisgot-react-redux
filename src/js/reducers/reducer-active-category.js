export default function(state=null, action){
  switch (action.type) {
    case "CATEGORY_SELECTED":
      console.log("CATEGORY_SELECTED");
      return action.payload;
      break;
  }
  return state;
}
