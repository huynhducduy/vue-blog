<template>
  <!--Container-->
  <div class="container w-full md:max-w-3xl mx-auto pt-20">
    <BlogItem :blog="blogs[0]" :first="true" />
    <div v-for="blog in blogs.slice(1)" :key="blog.id">
      <BlogItem :blog="blog" />
    </div>
  </div>
  <!--/container-->
</template>

<script>
// @ is an alias to /src
import BlogItem from '@/components/BlogItem.vue';

export default {
  name: 'Home',
  components: {
    BlogItem,
  },
  data: function() {
    return {
      blogs: [
        {
          id: 1,
          title: 'test',
          description: 'test description',
          thumbnail: 'https://picsum.photos/200',
        },
        {
          id: 2,
          title: 'test 2',
          description: 'test description 2',
          thumbnail: 'https://picsum.photos/200?a',
        },
      ],
    };
  },
};
</script>
