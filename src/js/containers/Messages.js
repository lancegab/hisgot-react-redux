import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MessageItem from './MessageItem';
import {selectMessage} from '../actions/index'
import {findMessages} from '../actions/index'
class Messages extends Component {
     render() {
          return (
               <div className="contents">
                    <div className="messages">
                         <MessageItem id={this.props.headMessage.id} content={this.props.headMessage.content} children={this.props.headMessage.children}/>
                    </div>
               </div>
          )
     }
}

function mapStateToProps(state) {
     return {
          messages: state.messages,
          message: state.activeMessage,
          headMessage: state.headMessage,
          topic: state.activeTopic
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
          selectMessage: selectMessage,
          findMessages: findMessages
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Messages);
