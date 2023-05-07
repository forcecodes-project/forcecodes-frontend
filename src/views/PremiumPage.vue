<template>
  <header-block/>
  <premium-block/>
  <footer-block/>
</template>

<script>
import FooterBlock from "@/components/Footer.vue";
import PremiumBlock from "@/components/Premium.vue";
import HeaderBlock from "@/components/Header.vue";

export default {
  name: "PremiumPage",
  components: {FooterBlock, PremiumBlock, HeaderBlock},
}
</script>

<style scoped>

</style>