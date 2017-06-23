import {combineReducers} from 'redux'

import CategoriesReducer from './reducer-categories';
import TopicsReducer from './reducer-topics';
import MessagesReducer from './reducer-messages';

import ActiveCategoryReducer from './reducer-active-category';
import ActiveTopicReducer from './reducer-active-topic';
import ActiveMessageReducer from './reducer-active-message';

import HeadMessageReducer from './reducer-head-message';

const allReducers = combineReducers({
     categories: CategoriesReducer,
     topics: TopicsReducer,
     messages: MessagesReducer,

     activeCategory: ActiveCategoryReducer,
     activeTopic: ActiveTopicReducer,
     activeMessage: ActiveMessageReducer,

     headMessage: HeadMessageReducer
});

export default allReducers;
