import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

export default class TopicItem extends Component {
     render() {
          return (
               <div onClick={() => this.props.selectTopic(this.props)}>
                    <button id="index-card" className="topic-button" onClick= {()=>this.props.updateHeadMessage(this.props)}>
                         {this.props.headline}
                    </button>
               </div>
          )
     }
}
