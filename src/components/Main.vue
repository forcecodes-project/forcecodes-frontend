<template>
  <main>
    <img src="src/assets/img/logo.png" alt="logo" class="center mt-3">
    <h1 class="mb-3 mt-3" style="text-align: center; font-family: 'Bold Italic Art',serif;">Experience The Power Of Knowledge</h1>
    <h2 class="mb-3 mt-3" style="text-align: center; width: 50%; margin-left: 300px; font-family: 'Rage Italic',serif">Forcecodes helps you to improve programming skills and compete with other people</h2>
    <div style="text-align: center">
      <button type="button" style="background-color: #02b095" class="btn mt-3" @click="this.$router.push('/register')" aria-pressed="true">Sign
        Up
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainBlock"
}
</script>

<style scoped>

</style>