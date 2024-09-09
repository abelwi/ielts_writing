<template>
    <div class="mt-10">
        <h1 class="text-2xl font-medium mb-10">Kết quả chấm điểm của bạn!</h1>
        
        <div class="flex justify-between">
            <div class="w-1/5 p-2 mx-10 space-y-4">
                <!-- Hiển thị Kết quả Task Achievement -->
                <TaskAchievement />

                <!-- Hiển thị Kết quả Coherence and Cohesion -->
                <CoherenceAndCohesion />

                <!-- Hiển thị Kết quả Lexical Resource -->
                <LexicalResource />

                <!-- Hiển thị Kết quả Grammatical Range and Accuracy -->
                <GrammaticalAndAccuracy />
            </div>
            
            <div class="w-3/5 p-2 items-center"> 
                <p class="px-5 py-3 border-2 border-gray-600 rounded-xl bg-customBackground text-left">
                    {{ userAnswer }}
                </p>
            </div>
            <!-- Hiển thị Overall Band -->
            <div class="w-1/5 p-2">
                <h2 class="font-semibold">Overall Band</h2>
                <p class="text-green-600 font-semibold text-6xl mt-5">{{ resultObjects.overallBand.score }}</p>
            </div>
        </div>

        <!-- Hiển thị Nhận xét tổng thể -->
        <div class="mb-4 p-4 border rounded bg-gray-100 mt-10">
            <h2 class="font-semibold">Nhận xét tổng thể:</h2>
            <p>{{ resultObjects.overallComment }}</p>
        </div>

        <!-- Hiển thị Lỗi cần lưu ý -->
        <div class="mb-4 p-4 border rounded bg-gray-100">
            <h2 class="font-semibold">Lỗi cần lưu ý:</h2>
                <ul>
                    <li v-for="(error, index) in resultObjects.errors" :key="index">
                    {{ error }}
                    </li>
                </ul>
        </div>

    </div>
  </template>
  
  <script>
import LexicalResource from '../components/LexicalResource.vue';
import CoherenceAndCohesion from '../components/CoherenceAndCohesion.vue';
import TaskAchievement from '../components/TaskAchievement.vue';
import GrammaticalAndAccuracy from '../components/GrammaticalAndAccuracy.vue';

  export default {
    components: {
        TaskAchievement,
        CoherenceAndCohesion,
        LexicalResource,
        GrammaticalAndAccuracy,

    },
    name: 'ResultPage',
    data() {
      return {
        resultObjects: {},
        userAnswer: this.$route.query.userAnswer || '',
      };
    },
    created() {
      // Nhận object từ query string và parse lại thành object
        const resultObjects = JSON.parse(this.$route.query.resultObjects);
        this.resultObjects = resultObjects;
    }
  };

  </script>
  
  <style scoped>
    
  </style>
  