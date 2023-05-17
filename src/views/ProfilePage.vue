<template>
  <header-block/>
  <profile-block/>
  <footer-block/>
</template>

<script>
import HeaderBlock from "@/components/Header.vue";
import FooterBlock from "@/components/Footer.vue";
import ProfileBlock from "@/components/Profile.vue"
import {mapActions, mapState} from "pinia";
import useUsersStore from "@/stores/users";

export default {
  name: "ProfilePage",
  components: {FooterBlock, ProfileBlock, HeaderBlock},
  computed: {
    ...mapState(useUsersStore, ['user', 'attempts'])
  },
  methods: {
    ...mapActions(useUsersStore, ['get_attempts']),
  },
}
</script>

<style scoped>

</style>