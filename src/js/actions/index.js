import axios from 'axios';
import thunk from 'redux-thunk';

export const selectCategory = (category) => {
     return {type: "CATEGORY_SELECTED", payload: category}
};

export const selectTopic = (topic) => {
     return {type: "TOPIC_SELECTED", payload: topic}
};

export const selectMessage = (message) => {
     return {type: "MESSAGE_SELECTED", payload: topic}
};

export const findCategories = () => {
     const request = axios.get('/findCategories');
     return (dispatch) => {
          request.then(({data}) => {
               dispatch({type: 'FIND_CATEGORIES', payload: data});
          })
     }
};

export const findTopics = (topics) => {
     return {type: "FIND_TOPICS", payload: topics}
};

export const findMessages = (messages) => {
     return {type: "FIND_MESSAGES", payload: messages}
};

export const clearMessages = () => {
     return {type: "CLEAR_MESSAGES", payload: []}
};

export const findChildrenMessages = (message_id) => {
  var obj = {message : message_id};
  const request = axios.post('/findChildrenMessages', obj);
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: "FIND_CHILDREN_MESSAGES", payload: data});
    })
  }
};

export const updateHeadMessage = (topic) => {

     var obj = {
          message: topic.message_id
     }

     const request = axios.post('/findHeadMessage', obj);
     return (dispatch) => {
          request.then(({data}) => {
               var obj2 = {message: data.id};
               const request2 = axios.post('/findChildrenMessages', obj2);

               var messageHead = data;

               request2.then(({data}) => {
                    messageHead.children = data;
                    dispatch({type: "UPDATE_HEAD_MESSAGE", payload: messageHead});
               })
          })
     }
};
