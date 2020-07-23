<template>
  <div id="app">
    <Layout>
      <router-view />
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
