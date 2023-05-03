<template>
  <header-block/>
  <rating-block/>
  <footer-block/>
</template>

<script>
import HeaderBlock from "@/components/Header.vue";
import FooterBlock from "@/components/Footer.vue";
import RatingBlock from "@/components/Rating.vue"
import {mapActions, mapState} from "pinia";
import useUsersStore from "@/stores/users";

export default {
  name: "ProblemsPage",
  components: {FooterBlock, RatingBlock, HeaderBlock},
  computed: {
    ...mapState(useUsersStore, ['token', 'user'])
  },
  methods: {
    ...mapActions(useUsersStore, ['CurrentUser']),
  },
}
</script>

<style scoped>

</style>