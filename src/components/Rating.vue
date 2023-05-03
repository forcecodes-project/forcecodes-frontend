<template>
  <main>
    <h1 class="text-center">Rating</h1>

    <section id="users" class="container justify-content-center row mx-auto mt-3">
      <table class="table mt-3">
        <thead>
        <tr style="text-align: center">
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Country</th>
          <th scope="col">Rank</th>
        </tr>
        </thead>
        <tbody>
        <tr style="vertical-align: middle; text-align: center">
          <td>1</td>
          <td>{{ user.username }}</td>
          <td>Country name</td>
          <td>Rank points</td>
        </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>

import useUsersStore from "@/stores/users";
import {mapActions, mapState} from "pinia";

export default {
  name: "RatingBlock",
  computed: {
    ...mapState(useUsersStore, ['user']),
  },
  methods: {
    ...mapActions(useUsersStore, ['CurrentUser']),
  },
  mounted() {
    this.CurrentUser()
  }
}
</script>

<style scoped>

</style>