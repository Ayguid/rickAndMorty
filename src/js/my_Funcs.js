
import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api/';
var characters;

export const my_Funcs  = {

  getCharacters: function(currentObject){
    currentObject.loading = true;

    axios.get(baseUrl+'character/?page='+currentObject.currentPage).then(response=> {
      currentObject.loading = false;
      currentObject.pages = response.data.info.pages;
      currentObject.characters = characters = response.data.results;
    });
  },

  filterByEpisode: function(currentObject, value){
    var filteredCharacters = [];
    var epiURL = baseUrl+"episode/";

    characters.forEach(function(element) {
      if (element.episode.includes(epiURL+value)) {
        filteredCharacters.push(element);
      }
    });

    if (filteredCharacters.length > 0) {
      currentObject.characters = filteredCharacters;
      currentObject.found = true;
    }
    else {
      currentObject.characters = characters;
      currentObject.found = false;
    }

  }

}
