<template>
  <header-block/>
  <problems-block/>
  <footer-block/>
</template>

<script>
import HeaderBlock from "@/components/Header.vue";
import FooterBlock from "@/components/Footer.vue";
import ProblemsBlock from "@/components/ProblemsList.vue"
import useProblemsStore from "@/stores/problems";
import {mapActions, mapState} from "pinia";
import useUsersStore from "@/stores/users";

export default {
  name: "ProblemsPage",
  components: {FooterBlock, ProblemsBlock, HeaderBlock},
  computed: {
    ...mapState(useProblemsStore, ['problems']),
    ...mapState(useUsersStore, ['token'])
  },
  methods: {
    ...mapActions(useProblemsStore, ['loadProblems']),
  },
}
</script>

<style scoped>

</style>