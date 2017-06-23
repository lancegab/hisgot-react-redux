import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TopicItem from './TopicItem'
import {selectTopic} from '../actions/index'
import {updateHeadMessage} from '../actions/index'
import axios from 'axios';
class Topics extends Component {
     createListItems() {
          return this.props.topics.map((topics) => {
               return (<TopicItem {...topics} key={topics.id} headline={topics.headline} id={topics.id} selectTopic={this.props.selectTopic} updateHeadMessage={this.props.updateHeadMessage}/>)
          });
     }
     render() {
          return (
               <div className="topics">
                    {this.createListItems()}
               </div>
          )
     }
}

function mapStateToProps(state) {
     return {topics: state.topics, topic: state.activeTopic}
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
          selectTopic: selectTopic,
          updateHeadMessage: updateHeadMessage
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Topics);
