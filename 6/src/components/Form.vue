<template>
  <div>
    <form @submit.prevent="onSubmit"
          v-if="!formSended"
    >
      <div class="progress">
        <div class="progress-bar" :style="progressBar"></div>
      </div>
      <div>
        <comp-input v-for="(item, index) in info"
                   :name="item.name"
                   :value="item.value"
                   :pattern="item.pattern"
                   :key="index"
                   @update:value="onChangeValue(index, $event)"
                   @changeStatus="onChangeStatus(index, $event)"
        >
        </comp-input>
      </div>
      <button class="btn"
              :class="btnClass"
              :disabled="validCnt < info.length"
      >
        {{ btnText }}
      </button>
    </form>
    <div v-else>
      <table class="table table-bordered">
        <tr v-for="(item) in info">
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

  import Input from './Input.vue';
  import { mapGetters } from "vuex";

  export default {
    methods: {
      onChangeValue(index, value) {
        this.$store.commit('setInfoValue', {
          i: index,
          val: value
        });
      },
      onChangeStatus(index, isValid) {
        this.$store.commit('setInfoStatus', {
          i: index,
          status: isValid
        });
      },
      onSubmit() {
        this.$store.dispatch('submit');
      }
    },
    computed: {
      ...mapGetters([
        'info',
        'validCnt',
        'formSended',
        'formProcess'
      ]),
      progressBar() {
        return {
          width: (this.validCnt / this.info.length * 100) + '%'
        }
      },
      btnClass() {
        return this.formProcess ? 'btn-default' : 'btn-primary';
      },
      btnText() {
        return this.formProcess ? 'Loading...' : 'Send Data';
      }
    },
    components: {
      'comp-input': Input
    }
  }
</script>
