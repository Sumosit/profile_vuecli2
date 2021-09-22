<template>
  <div id="app">
    <left-side-navigation/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "http://fonts.fontstorage.com/import/opengosta.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'OpenGost Type A TT';
  color: #f6f6f6;
}

body {
  background: black;
}
</style>
<script>
import LeftSideNavigation from "./components/LeftSideNavigation/LeftSideNavigation";
export default {
  components: {LeftSideNavigation}
}
</script>
