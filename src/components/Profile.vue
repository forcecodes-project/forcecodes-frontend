<template>
  <div style="margin-left: 40px">
    <h1 class="mb-3">
      Your profile
    </h1>
    <div class="container" style="margin-left: 0">
      <div class="row">
        <h2 id="user_name" class="text col">Your name: {{ user.username }}</h2>
        <div class="col">
          <h3>Percent of problems solved:</h3>
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
    </div>
    <h3 class="mt-3">Recently solved</h3>
    <table class="table" id="attempts_table" style="max-width: 40rem;">
      <thead>
      <tr>
        <th scope="col">Attempt</th>
        <th scope="col">Author id</th>
        <th scope="col">Status</th>
        <th scope="col">Language</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="attempt in Attempts" :key="attempt.id" style="vertical-align: middle">
        <td>№ {{ attempt.id }}</td>
        <!--        TODO: передавать с бэка название задачи, а не айди автора + когда решена-->
        <td>{{ attempt.author_id }}</td>
        <td>{{ attempt.status }}</td>
        <td>{{ attempt.language }}</td>
      </tr>
      </tbody>
    </table>
    <div>
      <button class="btn btn-success mt-3 mx-1" @click="logout_btn" type="button" aria-pressed="true">Logout
      </button>
    </div>
  </div>
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