<template>
  <header class="container-fluid">
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
</template>

<script>
export default {
  name: "HeaderBlock",
  methods: {
    show_menu() {
      let token = localStorage.getItem('user_token')
      console.log(token)
      if (token !== null) {
        let menu_items = document.getElementsByClassName("no_auth_link")
        while (menu_items.length > 0) {
          menu_items.item(0).parentNode.removeChild(menu_items.item(0))
        }
      } else {
        let menu_items = document.getElementsByClassName("profile_link")
        while (menu_items.length > 0) {
          menu_items.item(0).parentNode.removeChild(menu_items.item(0))
        }
      }
    }
  },
  mounted() {
    // this.show_menu()
  }
}
</script>

<style scoped>

</style>