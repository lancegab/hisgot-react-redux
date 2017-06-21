import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import {render} from 'react-dom' ;
import {Router, Route, Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MessageItem from './MessageItem';
import {selectMessage} from '../actions/index'
class Messages extends Component{
  //add message displays here
  createListItems(){
    return this.props.messages.map((messages) => {
      return (
            <MessageItem key={messages.id}{...messages} content={messages.content} id={messages.id} selectMessage={this.props.selectMessage}/>
        )
    });
  }


  render(){
    return(
      <div className="contents">
        <div className="messages">
          <MessageItem id={this.props.headMessage.id} content={this.props.headMessage.content}/>
          {this.createListItems()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    messages: state.messages,
    message: state.activeMessage,
    headMessage: state.headMessage,
    topic: state.activeTopic
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectMessage: selectMessage
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Messages);
