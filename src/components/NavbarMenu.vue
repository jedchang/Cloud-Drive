<template>
  <div class="navbar-menu">
    <div class="container">
      <div class="menu-item">
        <a
          href="javascript:;"
          class="logo"
          @click="homeHandler"
        >
          <img
            src="../assets/ic-logo-drive.svg"
            alt=""
          >
        </a>
        <!-- 如果 store.state 中的名稱相等，就顯示 active -->
        <a
          href="javascript:;"
          class="btn btn-starred"
          :class="{'active' : this.$store.state.currentNavbar === 'starred'}"
          @click="starredHandler"
        >STARRED</a>
        <a
          href="javascript:;"
          class="btn btn-trash"
          :class="{'active' : this.$store.state.currentNavbar === 'trash'}"
          @click="trashHandler"
        >TRASH</a>
      </div>
      <div class="search-item">
        <input
          type="text"
          placeholder="Search"
        >
        <a
          href="javasctipt:;"
          class="btn-search"
        ><i class="material-icons">search</i></a>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 vuex
import Vuex from 'vuex';

export default {
  name: 'NavbarMenu',
  props: {
    msg: String
  },
  data() {
    return {};
  },
  methods: {
    starredHandler() {
      if (this.$router.currentRoute.path === '/starred') return;
      // 用 store.commit 調用 mutations 中的 setCurrentNavbar()
      // 傳入 'starred' 來改變 state 資料
      this.$store.commit('setCurrentNavbar', 'starred');
      this.$router.push('/starred');
    },
    trashHandler() {
      if (this.$router.currentRoute.path === '/trash') return;
      // 用 store.commit 調用 mutations 中的 setCurrentNavbar()
      // 傳入 'starred' 來改變 state 資料
      this.$store.commit('setCurrentNavbar', 'trash');
      this.$router.push('/trash');
    },
    homeHandler() {
      // 判斷若是在首頁就不做任何動作 不然在首頁 router 又到首頁會報錯
      if (this.$router.currentRoute.path === '/') return;
      this.$store.commit('setCurrentNavbar', 'home');
      this.$router.push('/');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-menu {
  width: 100%;
  box-shadow: 0 2px 0 #d5d5d5;
  background-color: #fff;
  position: relative;
}

.container {
  width: 1110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .logo {
    display: block;
  }
  .btn {
    font-size: 16px;
    text-decoration: none;
    color: #000000;
    padding: 37px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    transition: all 0.4s;
    &:hover {
      color: #2a8cfd;
    }
  }
  .btn.active {
    color: #2a8cfd;
    cursor: default;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #2a8cfd;
    }
  }
  .btn-starred {
    margin-left: 64px;
  }
  .btn-trash {
    margin-left: 32px;
  }
}

.search-item {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  input[type='text'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 540px;
    height: 48px;
    padding: 15px 55px 15px 25px;
    border-radius: 24px;
    background-color: #efefef;
    border: 2px solid #efefef;
    outline: 0;
    transition: all 0.4s;
    &:focus {
      color: #2a8cfd;
      border: 2px solid #2a8cfd;
    }
    &:focus ~ a > i {
      color: #2a8cfd;
    }
  }
  // placeholder color
  ::-webkit-input-placeholder {
    color: #d4d4d4;
  }
  :-moz-placeholder {
    color: #d4d4d4;
  }
  ::-moz-placeholder {
    color: #d4d4d4;
  }
  :-ms-input-placeholder {
    color: #d4d4d4;
  }

  .btn-search {
    position: absolute;
    top: 12px;
    right: 24px;
    transition: all 0.4s;
    i {
      color: #000;
      transition: all 0.4s;
    }
  }
}
</style>
