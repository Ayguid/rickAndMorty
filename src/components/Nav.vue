<template>
  <div class="">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" >
        <b-navbar-brand ><img class="logo" src="@/assets/giff.gif" alt="">&nbsp; <span class="unselectable">Rick And Morty</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="number" placeholder="Search by episode N*" v-on:input="$emit('episode-find', $event)"/>
              <b-form-input :class="found ? 'green_border' : 'red_border'" size="sm" type="text" name="  " value="In current page" disabled/>

            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: ['episodes', 'found'],
}
</script>
