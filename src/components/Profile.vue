<template>
  <main>
    <h1 class="mt-3 text-center">
      Your profile
    </h1>
      <div class="row mt-3">
        <div class="col">
          <h2 id="user_name" class="text col mt-3">Your name: {{ user.username }}</h2>
          <h4 id="country" class="text col">Country: </h4>
          <h4 id="country" class="text col">Email: </h4>
        </div>
        <div class="col">
          <h2 class="mt-3 mb-3">Percent of problems solved:</h2>
          <circle-progress class="circle_progress"
                           :percent="(this.attempts.length / this.problems.length) * 100"
                           :is-gradient="true"
                           :gradient="{angle: 90,
                                 startColor: '#bb86fc',
                                 stopColor: '#9400d3'}"
                           :size="150"
                           :show-percent="true"/>
        </div>
      </div>
    <h3 class="mt-3 mb-3">Recently solved</h3>
    <table class="table mb-3" id="attempts_table" style="max-width: 40rem; margin-bottom: 300px">
      <thead>
      <tr>
        <th scope="col">Attempt</th>
        <th scope="col">Title</th>
        <th scope="col">Status</th>
        <th scope="col">Language</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="attempt in Attempts" :key="attempt.id" style="vertical-align: middle">
        <td>№ {{ attempt.id }}</td>
        <td>{{ attempt.problem_name }}</td>
        <td>{{ attempt.status }}</td>
        <td>Python</td>
      </tr>
      </tbody>
    </table>
      <button class="btn mt-3 mx-1" style="background-color: #02b095; float: right" @click="logout_btn" type="button" aria-pressed="true">Logout
      </button>
  </main>
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import {mapActions, mapState} from "pinia";
import useUsersStore from "@/stores/users";
import useProblemsStore from "@/stores/problems";

export default {
  name: "ProfileBlock",
  components: {CircleProgress},
  computed: {
    ...mapState(useUsersStore, ['user', 'token', 'attempts']),
    ...mapState(useProblemsStore, ['problems']),

    Attempts() {
      return this.attempts
    },
    Problems() {
      return this.problems
    },
  },
  methods: {
    ...mapActions(useUsersStore, ['logout', 'CurrentUser', 'get_attempts']),

    logout_btn() {
      this.logout()
      localStorage.removeItem('user_token')
      console.log(this.token)
      this.$router.push('/')
    },
  },
  mounted() {
    this.CurrentUser().then(result => {
      if (!result?.username) {
        this.$router.replace({path: '/'})
      } else {
        this.get_attempts()
      }
    })
  }
}
</script>

<style scoped>

</style>