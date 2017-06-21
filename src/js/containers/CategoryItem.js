import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import {render} from 'react-dom' ;
import {Link} from 'react-router';

export default class CategoryItem extends Component{

  render(){
    return (
      <div>
          <div onClick = {this.props.toggleDropdown}>
            {/* <button className = "category-button" onClick = {()=>this.props.selectCategory(this.props)}>{this.props.name}</button> */}
            <button className = "category-button" onClick = {()=>this.props.searchTopics(this.props.id)}>{this.props.name}</button>
          </div>
			</div>
    )
  }
}
