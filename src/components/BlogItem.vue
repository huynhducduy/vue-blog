<template>
  <div>
    <hr
      v-if="first !== true"
      class="border-b-1 border-gray-400 mt-4 mb-4
      mx-4"
    />
    <div class="flex mb-4">
      <!--Divider-->

      <div
        class="w-1/4"
        :style="
          'background-image:url(' +
            blog.thumbnail +
            '); background-size: cover; background-position: 50% 50%; border-radius: 0 20px 20px 0'
        "
      ></div>
      <div
        class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style="font-family: Georgia, serif;"
      >
        <!--Title-->
        <div class="font-sans">
          <a :href="'./' + blog.id">
            <h1
              class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
            >
              {{ blog.title }}
            </h1>
          </a>
          <p class="text-sm md:text-base font-normal text-gray-600">
            Published 19 February 2019
          </p>
        </div>
        <!--Post Content-->
        <!--Lead Para-->
        <p class="py-6">
          {{ blog.description }}
        </p>
        <!--/ Post Content-->
      </div>
    </div>
  </div>
</template>

<!--<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class BlogItem extends Vue {
  @Prop() private blog!: object;
}
</script>-->

<script>
export default {
  name: 'BlogItem',
  props: ['blog', 'first'],
};
</script>
