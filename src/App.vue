<template>
  <div id="app">
    <Layout>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </Layout>
  </div>
</template>

<style lang="scss"></style>

<script>
// @ is an alias to /src
import Layout from '@/components/Layout.vue';

export default {
  name: 'Home',
  components: {
    Layout,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
