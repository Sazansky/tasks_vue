<template>
  <div class="wrapper">
    <div class="example">
      <form @submit.prevent="formSended"
            v-if="!isSend"
      >
        <div class="progress">
          <div class="progress-bar" :style="progressBar"></div>
        </div>
        <div>
          <comp-input v-for="(item, index) in  info"
                      :name="item.name"
                      :value.sync="item.value"
                      :pattern="item.pattern"
                      :key="index"
                      @changeStatus="onChangeData(index, $event)"
          >
          </comp-input>
        </div>
        <button class="btn btn-primary" :disabled="done < info.length">
          Send Data
        </button>
      </form>
      <div v-else>
        <table class="table table-bordered">
          <tr v-for="item in info">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Input from "./components/Input";

  export default {
    data() {
      return {
        info: [
          {
            name: 'Name',
            value: 'Vitaliy',
            pattern: /^[a-zA-Z ]{2,30}$/
          },
          {
            name: 'Phone',
            value: '',
            pattern: /^[0-9]{7,14}$/
          },
          {
            name: 'Email',
            value: '',
            pattern: /.+/
          },
          {
            name: 'Some Field 1',
            value: '',
            pattern: /.+/
          },
          {
            name: 'Some Field 2',
            value: '',
            pattern: /.+/
          }
        ],
        controls: [],
        isSend: false,
        done: 0
      }
    },
    created() {
      for (let i = 0; i < this.info.length; i++) {
        this.controls.push(false);
      }
    },
    methods: {
      onChangeData(index, status) {
        this.controls[index] = status;

        let done = 0;

        for (let i = 0; i < this.controls.length; i++) {
          if (this.controls[i]) {
            done++;
          }
        }

        this.done = done;
      },
      formSended() {
        this.isSend = true
      }
    },
    computed: {
      progressBar() {
        return {
          width: (this.done / this.info.length * 100) + '%'
        }
      }
    },
    components: {
      'comp-input': Input
    }
  }
</script>

<style scoped>

</style>
