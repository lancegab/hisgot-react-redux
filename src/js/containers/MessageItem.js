import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import axios from 'axios';

export default class MessageItem extends Component {
     constructor() {
          super();
          this.state = {
               children: []
          };
          this.createListItems = this.createListItems.bind(this);
          this.findChildren = this.findChildren.bind(this);
     }

     findChildren() {
          var _this = this;
          var obj = {
               message: _this.props.id
          }

          axios.post('/findMessages', obj).then(function(msgs) {
               console.log(msgs.data);
               _this.setState({children: msgs.data});
          })
     }

     createListItems() {
          return this.state.children.map((messages) => {
               return (<MessageItem {...messages} key={messages.id} content={messages.content} id={messages.id} selectMessage={this.props.selectMessage}/>)
          });
     }

     render() {
          var children = this.createListItems();
          return (
               <div className="individual--messages">
                    <h4>{this.props.content}</h4>
                    <button onClick={this.findChildren}>View replies</button>

                    {children}

                    {/* <br><br>{message.sender} -
							{message.createdAt} */}

                    {/* <button onclick="showMessageField()">Reply</button>

							<form action="#" method = "get" id = "viewReplies">
								<input id = "parentMessage" type="hidden" name="message_id" value="{{message.id}}">
								// <button>View replies</button>
							</form>

							<div class="write" id="messageField">
								<div class = "form">
									<form action="/reply" method = "post">
										<input type="hidden" name="message_id" value="{{message.id}}">
										<input type="text" name="content" placeholder="Write message" autofocus>
										<button type = 'submit'>Send</button>
									</form>
								</div>
							</div>
							<ol id="replyContainer"></ol> */}
               </div>
          )
     }
}
