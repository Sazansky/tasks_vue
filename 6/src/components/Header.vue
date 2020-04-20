<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Site</h1>
          <h4 v-if="formSended">Hello, {{ name }}!</h4>
          <hr>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'name',
        'formSended'
      ])
    },
  }
</script>
