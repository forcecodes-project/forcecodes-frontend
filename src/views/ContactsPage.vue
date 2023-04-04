<template>
  <header-block/>
  <contacts-block/>
  <footer-block/>
</template>

<script>
import HeaderBlock from "@/components/Header.vue";
import FooterBlock from "@/components/Footer.vue";
import ContactsBlock from "@/components/Contacts.vue"

export default {
  name: "ContactsPage",
  components: {FooterBlock, ContactsBlock, HeaderBlock}
}
</script>

<style scoped>

</style>