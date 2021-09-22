<template>
  <div>
    <div class="item">
      <iframe src="http://localhost:8080/astrotitle2" style="width: 100%; height: 300px;"></iframe>
      <router-link to="astrotitle2" tag="div" class="link" ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Animations",
}
</script>

<style scoped lang="scss">
@import "animations.scss";

.item {
  position: relative;

  .link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;

    &:hover {
      background: rgba(255, 255, 255, 0.6);
    }
  }

}
</style>