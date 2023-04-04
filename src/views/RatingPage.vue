<template>
  <header-block/>
  <rating-block/>
  <footer-block/>
</template>

<script>
import HeaderBlock from "@/components/Header.vue";
import FooterBlock from "@/components/Footer.vue";
import RatingBlock from "@/components/Rating.vue"

export default {
  name: "ProblemsPage",
  components: {FooterBlock, RatingBlock, HeaderBlock}
}
</script>

<style scoped>

</style>