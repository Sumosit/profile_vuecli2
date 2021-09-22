<template>
  <div>
    <transition name="move">
      <div class="left-nav"
           :class="{'open': show, 'close': !show, 'helper': !$cookies.get('nav-helper')}"
           @mouseenter="showNav()"
           @mouseleave="show = false">
        <router-link tag="div" to="/animations" class="ln-item"
             v-for="(nav, index) in navigation" :key="index">
          {{ nav.title }}
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "LeftSideNavigation",
  data() {
    return {
      navigation: [
        {title: 'Home'},
        {title: 'Animations'}
      ],
      show: false
    }
  },
  methods: {
    showNav() {
      this.show = true;
      this.$cookies.set('nav-helper', 'true', 60 * 60 * 24 * 30);
    }
  }
}
</script>

<style lang="scss">
@import "left-side-navigation.scss";
</style>
