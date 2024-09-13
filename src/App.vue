<template>
  <div id="app" class="text-center mt-4 sm:mt-10">
    <div>
      <nav class="flex flex-col sm:flex-row justify-center sm:justify-between mx-4 sm:mx-16 space-y-4 sm:space-y-0">
        <router-link
          to="/"
          class="font-bold px-3 sm:px-5 py-1 sm:py-2 text-md sm:text-lg rounded-lg drop-shadow-lg shadow hover:shadow-xl"
          :class="{ 'text-lime-500': isHomePage, 'text-black': !isHomePage }"
        >
          Home
        </router-link>
        <div class="bg-gray-300 px-3 py-1 sm:px-5 sm:py-2 rounded-lg drop-shadow-lg shadow hover:shadow-xl">
          <router-link to="/question" class="font-semibold text-md sm:text-lg">Nhập câu hỏi mới >></router-link>
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
  transition: color 0.5s ease; /* Adjusted duration for a smoother effect */
}
</style>
