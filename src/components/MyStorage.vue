<template>
  <div class="my-storage">
    <div class="container">
      <div class="title">STORAGE</div>
      <div class="size-wrap">
        <p class="current-size">15 GB</p>
        <p class="total-size">200 GB</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyStorage',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-storage {
  width: 100%;
  background-color: #fff;
}

.container {
  width: 1110px;
  padding: 24px 15px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin-right: 16px;
}

.size-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    content: '/';
    position: absolute;
    top: 0;
    left: 50px;
  }
  .current-size {
    margin-right: 15px;
  }
}
</style>
