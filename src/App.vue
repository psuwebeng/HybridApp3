<template>
  <div id="app">
    <div>
    <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger @click="home()">Home</md-button>
    </md-menu>

    <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger @click="all_cartoon()">All Cartoon</md-button>
    </md-menu>

    <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger @click="signup()">Sign up</md-button>
    </md-menu>

    <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger @click="login()">Log in</md-button>
    </md-menu>

    <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger @click="about()">About</md-button>
    </md-menu>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    home () {
      this.$router.push({ path: '/' })
    },
    signup () {
      this.$router.push({ path: '/signup' })
    },
    login () {
      this.$router.push({ path: '/login' })
    },
    about () {
      this.$router.push({ path: '/about' })
    },
    all_cartoon () {
      this.$router.push({ path: '/all_cartoon' })
    }
  }
}
</script>

<style>
#app {
  background: #f9f9f9;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="scss" scoped>
  .md-menu {
    margin: 24px;
  }
</style>
