export const selectCategory = (category) => {
  return {
    type: "CATEGORY_SELECTED",
    payload: category
  }
};

export const selectTopic = (topic) => {
  return {
    type: "TOPIC_SELECTED",
    payload: topic
  }
};

export const selectMessage = (message) => {
  return {
    type: "MESSAGE_SELECTED",
    payload: topic
  }
};

export const findCategories = (categories) => {
  return {
    type: "FIND_CATEGORIES",
    payload: categories
  }
};

// export const updateCategories = (categories) => {
//   // console.log("updaTE");
//   return {
//     type: "UPDATE_CATEGORIES",
//     payload: categories
//   }
// };

export const findTopics = (topics) => {
  return {
    type: "FIND_TOPICS",
    payload: topics
  }
};

export const findMessages = (messages) => {
  return {
    type: "FIND_MESSAGES",
    payload: messages
  }
};

export const updateHeadMessage = (message) => {
  return {
    type: "UPDATE_HEAD_MESSAGE",
    payload: message
  }
};
