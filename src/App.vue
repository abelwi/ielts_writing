<template>
  <div id="app" class="text-center mt-10">
    <div>
      <nav class="flex justify-between mx-16">
        <router-link
          to="/"
          class="font-bold px-5 pt-2 text-lg rounded-lg drop-shadow-lg shadow hover:shadow-xl"
          :class="{ 'text-lime-500': isHomePage, 'text-black': !isHomePage }"
        >
          Home
        </router-link>
        <div class="bg-gray-300 px-5 py-2 rounded-lg drop-shadow-lg shadow hover:shadow-xl">
          <router-link to="/question" class="font-semibold text-lg">Nhập câu hỏi mới >></router-link>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const route = useRoute();
    
    // Compute whether we are on the HomePage
    const isHomePage = computed(() => route.path === '/');

    return {
      isHomePage,
    };
  },
};
</script>

<style>
/* Add a transition effect to the color change */
.router-link {
  transition: color 1s ease; /* Adjust the duration and easing function here */
}
</style>
