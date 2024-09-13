<template>
    <div class="mt-10">
        <h1 class="text-xl sm:text-2xl font-medium sm:mb-5">Kết quả chấm điểm của bạn!</h1>
        
        <div class="flex flex-col sm:flex-row justify-center sm:justify-between space-y-4">
            <div class="w-4/5 sm:w-1/5 p-2 mx-8 space-y-4 mt-5 sm:mt-28">
                <!-- Hiển thị Kết quả Task Achievement -->
                <TaskAchievement />

                <!-- Hiển thị Kết quả Coherence and Cohesion -->
                <CoherenceAndCohesion />

                <!-- Hiển thị Kết quả Lexical Resource -->
                <LexicalResource />

                <!-- Hiển thị Kết quả Grammatical Range and Accuracy -->
                <GrammaticalAndAccuracy />
            </div>
            
            <div class="w-5/6 sm:w-3/5 p-2 mx-9 items-center"> 
              <p 
                class="px-3 sm:px-5 py-3 border-2 border-gray-300 rounded-lg bg-slate-200 text-left mb-5"
                style="white-space: pre-wrap; overflow-wrap: break-word; word-break: break-word;"
              >
                <span class="font-semibold">Câu hỏi:</span> {{ question }}
              </p>

              <p class="px-3 sm:px-5 py-3 border-2 border-gray-400 rounded-xl bg-customBackground text-left">
                <span class="font-semibold">Câu trả lời của bạn:</span> {{ userAnswer }}
              </p>
            </div>

            <!-- Hiển thị Overall Band -->
            <div class="w-1/3 sm:w-1/5 mx-32 sm:mx-2">
              <h2 class="font-semibold text-slate-600 mt-1 sm:mt-24">Overall Band:</h2>
              <p class="bg-green-500 sm:mx-14 py-5 rounded-lg border-gray-300 border-2 text-gray-200 font-semibold text-5xl sm:text-6xl mt-5">{{ resultObjects.overallBand.score }}</p>
            </div>
            <!-- <div class="w-1/5">
                <h2 class="font-semibold text-slate-600">Overall Band:</h2>
                <p class="bg-green-500 mx-14 py-5 rounded-lg border-gray-300 border-2 text-gray-200 font-semibold text-6xl mt-5">{{ resultObjects.overallBand.score }}</p>
            </div> -->
        </div>

        <!-- Hiển thị Nhận xét tổng thể -->
        <div class="mb-4 p-4 border rounded bg-gray-100 mt-10">
            <h2 class="font-semibold">Nhận xét tổng thể:</h2>
            <p>{{ resultObjects.overallComment }}</p>
        </div>

        <!-- Hiển thị Lỗi cần lưu ý -->
        <div class="mb-4 p-4 border rounded bg-gray-100">
            <h2 class="font-semibold">Những câu cần lưu ý:</h2>
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
        question: this.$route.query.question || '',
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
  