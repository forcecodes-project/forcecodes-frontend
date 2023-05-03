<template>
  <header-block/>
  <problem-block
      :title="problems[parseInt($route.params.id) -1].title"
      :author_id="problems[parseInt($route.params.id) - 1].author_id"
      :description="problems[parseInt($route.params.id) - 1].description"
      :difficulty="problems[parseInt($route.params.id) - 1].difficulty"
      :acceptance="problems[parseInt($route.params.id) - 1].acceptance"
      :id="problems[parseInt($route.params.id) - 1].id"/>
  <footer-block/>
</template>

<script>
import HeaderBlock from '@/components/Header.vue'
import FooterBlock from '@/components/Footer.vue'
import ProblemBlock from "@/components/Problem.vue";
import {mapActions, mapState} from "pinia";
import useUsersStore from "@/stores/users";
import useProblemsStore from "@/stores/problems";
import {useRoute} from "vue-router";

export default {
  name: 'MainPage',
  components: {HeaderBlock, ProblemBlock, FooterBlock},
  computed: {
    ...mapState(useUsersStore, ['user', 'token']),
    ...mapState(useProblemsStore, ["problems"]),
    problemId() {
      const route = useRoute();
      return parseInt(route.params.id)
    }
  },
  methods: {
    ...mapActions(useProblemsStore, ['loadOneProblem']),
  },
  mounted() {
    this.loadOneProblem(this.problemId);
  }
}
</script>