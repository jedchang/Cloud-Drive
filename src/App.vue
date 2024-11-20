<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  components: {
    Loading
  }
};
</script>


<style lang="scss">
@import '@/style/_reset.scss';

// google fonts
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap');

// Material design icons
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Open Sans', sans-serif, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  user-select: none;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// vue transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
