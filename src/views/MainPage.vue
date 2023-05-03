<template>
	<header-block />
  <main-block />
	<footer-block />
</template>

<script>
import HeaderBlock from '@/components/Header.vue'
import FooterBlock from '@/components/Footer.vue'
import MainBlock from "@/components/Main.vue";
import {mapState} from "pinia";
import useUsersStore from "@/stores/users";

export default{
	name: 'MainPage',
	components: {HeaderBlock, MainBlock, FooterBlock},
  computed: {
    ...mapState(useUsersStore, ['token'])
  }
}
</script>