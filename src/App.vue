<template>
  <div id="app" >

    <Nav @episode-find="filterByEpisode" :found="found"/>

    <div v-if="loading" class="modal spinner_container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>

    <div class="container-fluid content-row ">
      <div class="row">
        <Character v-for="character in characters" :character="character" :key='character.id'/>
      </div>
    </div>
    <div class="footer">
      <div class="">
        <div class="mt-3 text-center " >
          <b-pagination class="" align="center" size="lg" :total-rows="pages*characters.length" :per-page="pages"
          v-model="currentPage" @input="getCharacters"/>
        </div>
        <back-to-top text="Back to top" right="" bottom="" visibleoffset="100"></back-to-top>
      </div>
    </div>

  </div>
</template>

<script>
import BackToTop from 'vue-backtotop'
import Character from './components/Character.vue'
import Nav from './components/Nav.vue';
import {my_Funcs} from "./js/my_Funcs.js"

export default {
  name: 'app',
  data(){
    return  {
      characters:[],
      episodes: [],
      pages:'',
      currentPage: 1,
      found:'',
      loading:false
    }
  },
  components: {
    Character, Nav, BackToTop
  },
  methods: {
    getCharacters: function(){
      my_Funcs.getCharacters(this);
    },
    filterByEpisode: function(value){
      my_Funcs.filterByEpisode(this, value);
    }
  },
  created() {
    this.getCharacters();
  }
}
</script>
