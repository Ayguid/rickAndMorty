<template>
<!-- Dos opciones de estilo -->
<!-- ONE -->
  <!-- <div class="col-sm-6 col-md-4 col-lg-3 mb-4 unselectable fade_in">
    <b-card class="gradient-border "
    no-body
    :img-src="character.image"
    img-alt="Image"
    img-top
    >
    <h4 slot="header" class="text-center">{{character.name}}</h4>
    <b-card-body>
      <b-card-title>Species: {{character.species}}</b-card-title>
      <b-card-sub-title class="mb-2">Location: {{character.location.name}}</b-card-sub-title>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>STATUS: <span :class="character.status == 'Dead' ? 'red_text' : 'green_text'">{{character.status}}</span></b-list-group-item>
      <b-list-group-item>CREATED: {{character.created}}</b-list-group-item>
    </b-list-group>
  </b-card>
</div> -->
<!-- TWO -->
<div class="col-sm-6 col-md-4 col-lg-3 mb-4 unselectable fade_in ">
    <div class="hovereffect ">
        <img class="img-responsive" :src="character.image" alt="">
            <div class="overlay">
                <h2>{{character.name}}</h2>
                <h3>Species: {{character.species}}</h3>
                <h3>Location: {{character.location.name}}</h3>
                <h3>STATUS: <span :class="character.status == 'Dead' ? 'red_text' : 'green_text'">{{character.status}}</span></h3>
                <h3>CREATED: {{character.created}}</h3>
            </div>
    </div>
</div>


</template>

<script>
export default {
  props: ['character'],
  name: 'Character',
}
</script>
