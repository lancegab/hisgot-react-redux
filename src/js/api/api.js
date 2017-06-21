import React from 'react';
import {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectCategory} from '../actions/index';
import {findCategories} from '../actions/index';
import {selectTopic} from '../actions/index';
import {selectMessage} from '../actions/index';

class api extends Component{

  // searchCategories(){
  //   const _this = this;
  //   console.log('searching');
  //   axios.get('/findCategories')
  //     .then(function(response){
  //       console.log("res");
  //       _this.props.findCategories(response.data);
  //     })
  //     .catch(function (error){
  //       console.log(error);
  //     });
  // }
}

function mapStateToProps(state){
  return {
    categories: state.categories,
    messages: state.messages,
    topics: state.topics,

    category: state.activeCategory,
    topic: state.activeTopic,
    message: state.activeMessage
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectCategory: selectCategory,
    findCategories: findCategories,
    selectTopic: selectTopic,
    selectMessage: selectMessage
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(api);
