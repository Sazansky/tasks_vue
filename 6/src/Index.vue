<template>
  <div>
    <comp-header></comp-header>
    <div class="container">
      <div class="row">
        <div class="col col-sm-4">
          hz
        </div>
        <div class="col col-sm-8">
          <comp-form></comp-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Form from './components/Form.vue';

  export default {
    data() {
      return {
        name: ''
      }
    },
    components: {
      'comp-header': Header,
      'comp-form': Form
    }
  }
</script>
