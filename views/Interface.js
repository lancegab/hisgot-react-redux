import React from 'react';
import axios from 'axios';

module.exports = {

  findCategories(){

    return axios.get('/findCategories')
      .then(function(response){
        return response.data;
      })
      .catch(function (error){
        console.log(error);
      });
  },

  updateCategory(category_id){
    console.log("here");
    return axios.post('/selectCategory', category_id)
      .then(function(response){
        return response.data;
      })
      .catch(function (error){
        console.log(error);
      })
  }
}
