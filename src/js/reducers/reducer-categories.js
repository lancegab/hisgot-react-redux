export default function(state = [], action) {
     switch (action.type) {
          case "FIND_CATEGORIES":
               state = action.payload;
               return state;
               break;
          default:
               return state;
     }
}
