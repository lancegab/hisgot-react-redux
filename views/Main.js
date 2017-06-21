import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import {render} from 'react-dom' ;
import {Router, Route, Link} from 'react-router';

import Categories from '../views/Categories';
import CategoryItem from '../views/CategoryItem';

import Interface from '../views/Interface'

import Topics from '../views/Topics';
import Messages from '../views/Messages';

import axios from 'axios';

export default class Forum extends Component{
  constructor(){
    super();
    this.state = {
      categories : [],
      topics : [],
      messages : [],
      currentCategory : null,
      currentTopic: null,
      currentMessage: null
    };

  }

  findCategories(){
    console.log("Finding categories");
    var _this = this;
    Interface.findCategories().then(function(ctgry){
      _this.setState({categories : ctgry});
    });
    document.getElementById("categoryDropdown").classList.toggle("show");
  }

  updateCategory(id){
    console.log("Why do I get clicked?");
    console.log(id);
  }

  findTopics(id){
  }


  render(){
    return(
              <div className="wrapper">
                <Categories categories = {this.state.categories} findCategories = {this.findCategories.bind(this)} updateCategory = {this.updateCategory.bind(this)}/>
                <Topics />
                <Messages />
              </div>
    )
  }
}

module.exports = Forum;
