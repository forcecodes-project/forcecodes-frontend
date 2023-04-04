<template>
  <div class="card border" style="max-width: 30rem; margin: 40px;">
    <div class="card-header border-white">{{ title }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ description }}</h5>
      <p class="card-text">Author id: {{ author_id }}</p>
    </div>
  </div>
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
    }
  },
}
</script>

<style scoped>

</style>