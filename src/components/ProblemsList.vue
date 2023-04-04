<template>
  <h4 style="margin-left: 40px">Problems list</h4>
  <div class="mt-3 mb-3" style="margin-left: 40px">
    <button class="btn btn-link" style="color: violet" @click="console.log('Cherti')">Pick one</button> <!-- Horosh --->
  </div>

  <div class="btn-group" role="group" style="margin-left: 40px">
    <div>
      <button type="button" class="btn btn-success mx-2" @click="console.log('Kurwa')" aria-pressed="true">Difficulty
      </button>
    </div>
    <div>
      <button type="button" class="btn btn-success mx-2" @click="console.log('#HateThis')" aria-pressed="true">Status
      </button>
    </div>
    <div>
      <button type="button" class="btn btn-success mx-2" @click="console.log('Suka')" aria-pressed="true">Tags
      </button>
    </div>
    <div class="input-group mx-3">
      <div class="form-outline">
        <input type="search" id="form1" class="form-control" placeholder="Search..."/>
        <label class="form-label" for="form1"></label>
      </div>
    </div>
  </div>

  <section id="problems" class="container justify-content-center row mx-auto mt-3">
    <table class="table" id="problems_table">
      <thead>
      <tr>
        <th scope="col">Status</th>
        <th scope="col">Title</th>
        <th scope="col">Solution</th>
        <th scope="col">Acceptance</th>
        <th scope="col">Difficulty</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="problem in Problems" :key="problem.id" style="vertical-align: middle">
        <td>status icon</td>
        <td><button class="btn btn-link" @click="this.$router.push(`/problem/${problem.id}`)" style="color: white">{{ problem.title }}</button></td>
        <td>solution icon</td>
        <td>91%</td>
        <td>easy</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import useProblemsStore from "@/stores/problems";
import {mapActions, mapState} from "pinia";

export default {
  name: "ProblemsBlock",
  computed: {
    ...mapState(useProblemsStore, ['problems']),
    Problems() {
      return this.problems
    }
  },
  methods: {
    ...mapActions(useProblemsStore, ['loadProblems']),
  },
  mounted() {
    this.loadProblems();
  }
}
</script>

<style scoped>

</style>