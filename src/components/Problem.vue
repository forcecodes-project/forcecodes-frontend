<template>
  <main>
    <div class="card border mt-3" style="max-width: 30rem;">
      <div class="card-header" style="border-bottom: solid 1px">{{ title }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ description }}</h5>
        <p class="card-text">Complexity: {{ difficulty }}</p>
        <p style="font-size: 14px" class="card-text">Author id: {{ author_id }}</p>
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
    // status: {
    //   type: String,
    //   required: true
    // }
  },
}
</script>

<style scoped>

</style>