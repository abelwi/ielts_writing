<template>
    <div class="flex justify-center items-center space-x-4"> <!-- Add space between the components -->
      <div 
        class="relative w-64 transition-all duration-300 ease-out transform hover:shadow-xl
        rounded-xl bg-customOrange drop-shadow-lg shadow-inner px-3"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="hover ? 'h-64' : 'h-16'" 
      >
        <h1 class="font-semibold text-center pt-3">Task Achievement (TA): {{ resultObjects.taskAchievement.score }}</h1>
        
        <p 
          class="text-center transition-opacity duration-300 px-2 break-words"
          :class="{ 'opacity-100': hover, 'opacity-0': !hover }"
        >
        {{ resultObjects.taskAchievement.comment }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskAchievement',
    data() {
      return {
        resultObjects: {},
        hover: false,
      };
    },
    created() {
        const resultObjects = JSON.parse(this.$route.query.resultObjects);
        this.resultObjects = resultObjects;
    }
  };
  </script>
  