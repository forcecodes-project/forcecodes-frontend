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
      </div>
      <div class="col mx-3 mt-3">
        <textarea class="col mt-1" v-model="code" placeholder="Enter your code here" rows="25" cols="90" style="background-color: #28242c; color: white"></textarea>
        <button class="btn btn-outline-light mt-1" style="float: right;" @click="send">Send your solution</button>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'EachProblem',
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
  },
  methods: {
    send() {

    }
  }
}
</script>

<style scoped>

</style>