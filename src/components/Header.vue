<template>
  <header v-if="token">
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Contact us</router-link>
          </li>
          <li class="nav-item profile_link">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item profile_link">
            <router-link class="nav-link" to="/problems">Go to problems</router-link>
          </li>
          <li class="nav-item profile_link">
            <router-link class="nav-link" to="/rating">Rating</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <header v-else>
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item no_auth_link">
            <router-link class="nav-link" to="/auth">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Contact us</router-link>
          </li>
          <li class="nav-item profile_link">
            <router-link class="nav-link" to="/problems">Go to problems</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapState} from "pinia";
import useUsersStore from "@/stores/users";

export default {
  name: "Header block",
  computed: {
    ...mapState(useUsersStore, ['token']),
  }
}
</script>

<style scoped>

</style>