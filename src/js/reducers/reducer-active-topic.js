export default function(state = {}, action) {
     switch (action.type) {
          case "TOPIC_SELECTED":
               console.log("TOPIC_SELECTED ", action.payload);
               return action.payload;
               break;
          default:
               return state;
               break;
     }

}
