<template>
  <body class="bg-gray-100 font-sans leading-normal tracking-normal">
    <nav id="header" ref="header" class="fixed w-full z-10 top-0">
      <div
        id="progress"
        ref="progress"
        class="h-1 z-20 top-0"
        style="
          background: linear-gradient(to right,#4dc0b5 var(--scroll),transparent 0);
        "
      ></div>

      <div
        class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3"
      >
        <div class="pl-4">
          <router-link
            class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
            to="/"
            >Duy's Blog</router-link
          >
        </div>

        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            @click="toggleNav"
            class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
          id="nav-content"
          ref="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <router-link
                class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                to="./write"
                >Write</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <slot></slot>

    <footer class="bg-white border-t border-gray-400 shadow">
      <div class="container max-w-4xl mx-auto flex py-8">
        <div class="w-full mx-auto flex flex-wrap">
          <div class="flex w-full md:w-1/2">
            <div class="px-8">
              <h3 class="font-bold text-gray-900">About</h3>
              <p class="py-4 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                consectetur dapibus velit ut lacinia.
              </p>
            </div>
          </div>

          <div class="flex w-full md:w-1/2">
            <div class="px-8">
              <h3 class="font-bold text-gray-900">Social</h3>
              <ul class="list-reset items-center text-sm pt-3">
                <li>
                  <a
                    class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                    href="#"
                    >Facebook</a
                  >
                </li>
                <li>
                  <a
                    class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                    href="#"
                    >Twitter</a
                  >
                </li>
                <li>
                  <a
                    class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                    href="#"
                    >Reddit</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>

<script>
export default {
  name: 'Layout',
  methods: {
    toggleNav() {
      this.$refs['nav-content'].classList.toggle('hidden');
    },
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.$refs.progress.style.setProperty(
        '--scroll',
        ((document.documentElement['scrollTop'] || document.body['scrollTop']) /
          ((document.documentElement['scrollHeight'] ||
            document.body['scrollHeight']) -
            document.documentElement.clientHeight)) *
          100 +
          '%'
      );

      if (window.scrollY > 10) {
        this.$refs['header'].classList.add('bg-white');
        this.$refs['header'].classList.add('shadow');
        this.$refs['nav-content'].classList.remove('bg-gray-100');
        this.$refs['nav-content'].classList.add('bg-white');
      } else {
        this.$refs['header'].classList.remove('bg-white');
        this.$refs['header'].classList.remove('shadow');
        this.$refs['nav-content'].classList.remove('bg-white');
        this.$refs['nav-content'].classList.add('bg-gray-100');
      }
    });
  },
};
</script>
