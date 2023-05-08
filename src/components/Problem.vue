<template>
  <main>
    <div class="row mx-auto mt-3">
      <div class="col">
        <div class="card border mt-3 mx-3" style="max-width: 30rem;">
          <div class="card-header" style="border-bottom: solid 1px">{{ title }}</div>
          <div class="card-body">
            <h5 class="card-title">{{ description }}</h5>
            <p class="card-text">Complexity: {{ difficulty }}</p>
            <p style="font-size: 14px" class="card-text">Author id: {{ author_id }}</p>
          </div>
        </div>
        <div v-show="!token" class="col mt-3 mx-3 text-center">
          <h5>Log in to send your solution</h5>
        </div>
        <div v-show="token" class="col mt-3 mx-3 text-center">
          <h5 v-if="status === 'failed'">Your result: <span style="color: rgb(194,62,86)">{{ status.toUpperCase() }} </span></h5>
          <h5 v-else-if="status === 'success'">Your result: <span style="color: green">{{ status.toUpperCase() }} </span></h5>
          <h5 v-else style="color:#BB86FC">Send your solution to see a result</h5>
        </div>
      </div>
      <div class="col mx-3 mt-3">

        <textarea type="text" class="col mt-1" v-model="code" placeholder="Enter your code here"
                  style="background-color: #28242c; color: white" rows="25" cols="90"></textarea>

        <button class="btn btn-outline-light mt-1" style="float: right;" @click="send" :disabled="!token">Send</button>

        <button class="btn btn-outline-light mt-1 mx-3" style="float: right;" @click="save" :disabled="!token">Save</button>
      </div>
    </div>
  </main>
</template>

<script>
// import {HighCode} from 'vue-highlight-code';
// import 'vue-highlight-code/dist/style.css';

import {mapState} from "pinia";
import useUsersStore from "@/stores/users";
import useProblemsStore from "@/stores/problems";

export default {
  name: 'EachProblem',
  // components: {HighCode},
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author_id: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    difficulty: {
      type: String,
      required: true
    },
    acceptance: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      code: ""
    }
  },
  computed: {
    ...mapState(useUsersStore, ['token']),
    ...mapState(useProblemsStore, ['problems']),
  },
  methods: {
    async save() {
      window.sessionStorage.setItem("code", this.code)
    },

    async send() {

      let user_code = this.code
      let codeBlob = new Blob([user_code], {type: 'text/plain;charset=utf-8'})
      let data = new FormData()
      data.append('file', new File([codeBlob], `Task${this.title}.txt`, {type: 'text/plain'}))
      data.append('problem_id', this.id)


      const response = await fetch(`http://localhost:8000/attempts/`, {
        method: "POST",
        body: data,
        headers: {
          'accept': 'application/json',
          'Token': `${this.token}`
        }
      })
      console.log(response)
    }
  },
  mounted() {
    if (this.token) {
      this.code = window.sessionStorage.getItem("code")
    }
  }
}
</script>

<style scoped>

</style>