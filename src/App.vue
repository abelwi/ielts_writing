<template>
  <div id="app" class="text-center mt-4 sm:mt-10">
    <div>
      <nav class="flex flex-col sm:flex-row justify-center sm:justify-between mx-4 sm:mx-16 space-y-4 sm:space-y-0">
        <router-link
          to="/"
          class="btn btn-outline px-3 sm:px-5 py-1 sm:py-2 text-md sm:text-lg rounded-lg shadow hover:shadow-xl hover:bg-secondary hover:border-secondary"
          :class="{ 'text-secondary': isHomePage, 'text-secondaryx-content': !isHomePage }"
        >
          Giới thiệu
        </router-link>
        <div class="btn btn-base-200 px-3 py-1 sm:px-5 sm:py-2 rounded-lg drop-shadow-lg shadow hover:shadow-xl hover:bg-base-300 hover:border-base-200">
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
