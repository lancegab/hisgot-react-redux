import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CategoryItem from './CategoryItem';
import {selectCategory} from '../actions/index';
import {findCategories} from '../actions/index';
import {findTopics} from '../actions/index';
import {updateCategories} from '../actions/index';
import axios from 'axios';

class Categories extends Component {

     toggleDropdown() {
          document.getElementById("categoryDropdown").classList.toggle("show");
     }

     searchCategories() {
          const _this = this;
          // console.log('searching');
          axios.get('/findCategories').then(function(response) {
               _this.props.findCategories(response.data);
          }).catch(function(error) {
               console.log(error);
          });
     }

     searchTopics(category_id) {
          const _this = this;

          var obj = {
               category: category_id
          }

          axios.post("/findTopics", obj).then(function(response) {
               _this.props.findTopics(response.data);
          }).catch(function(error) {
               console.log(error);
          });
     }

     createListItems() {
          return this.props.categories.map((categories) => {
               return (<CategoryItem {...categories} key={categories.id} name={categories.name} id={categories.id} selectCategory={this.props.selectCategory} toggleDropdown={this.toggleDropdown.bind(this)} searchTopics={this.searchTopics.bind(this)}/>)
          });
     }

     render() {
          return (
               <div className="categories">
                    <div onClick={this.props.findCategories}>
                         <button className="dropbtn" onClick={this.toggleDropdown}>Categories</button>
                    </div>
                    <div id="categoryDropdown" className="dropdown-content">
                         {this.createListItems()}
                    </div>
               </div>
          )
     }
}

function mapStateToProps(state) {
     console.log("CATEGORIES STATE ", state.categories);
     return {
          categories: state.categories,
          category: state.activeCategory
     }
}

function matchDispatchToProps(dispatch) {
     return bindActionCreators({
          selectCategory: selectCategory,
          findCategories: findCategories,
          findTopics: findTopics
     }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Categories);
