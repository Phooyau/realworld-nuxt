<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link
          class="navbar-brand"
          :to="{ name: 'home' }"
          exact
        >conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link
              class="nav-link"
              :to="{ name: 'home' }"
              exact
            >Home</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{ name: 'editor' }"
              >
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{ name: 'settings' }"
              >
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <a
                href="javascript:"
                class="nav-link"
                @click="handleLogout"
              >Sign Out</a>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{
                  name: 'profile',
                  params: {
                    username: user.username
                  }
                }"
              >
                <img :src="user.image" class="user-pic">
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>

          <template v-else>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{ name: 'login' }"
              >Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{ name: 'register' }"
              >Sign up</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <nuxt-child></nuxt-child>

    <footer>
      <div class="container">
        <nuxt-link
          class="logo-font"
          :to="{ name: 'home' }"
        >conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'LayoutIndex',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    handleLogout() {
      this.$store.commit('setUser', null)
      Cookie.remove('rw_user')
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>

</style>