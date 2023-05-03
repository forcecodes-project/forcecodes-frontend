<template>
  <header-block/>
  <contacts-block/>
  <footer-block/>
</template>

<script>
import FooterBlock from "@/components/Footer.vue";
import ContactsBlock from "@/components/Contacts.vue"
import HeaderBlock from "@/components/Header.vue";
import {mapState} from "pinia";
import useUsersStore from "@/stores/users";

export default {
  name: "ContactsPage",
  components: {HeaderBlock, FooterBlock, ContactsBlock},
  computed: {
    ...mapState(useUsersStore, ['user'])
  },
}
</script>

<style scoped>

</style>