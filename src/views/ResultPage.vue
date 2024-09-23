<template>
    <div class="my-5 sm:my-16">        
        <div class="flex flex-col sm:flex-row justify-center sm:justify-between space-y-4 mb-3 sm:mb-10"> 
          <div class="w-5/6 sm:w-3/5 p-2 mx-8 sm:mx-10 items-center"> 
            <p 
              class="px-3 sm:px-5 py-3 border border-base-300 rounded-lg bg-base-200 text-left mb-5 shadow-inner"
            >
              <span class="font-semibold">Câu hỏi:</span> {{ question }}
            </p>

            <p class="px-3 sm:px-5 py-3 border border-base-300 rounded-xl bg-base-200 text-left shadow-inner">
              <span class="font-semibold">Câu trả lời của bạn:</span> {{ userAnswer }}
            </p>
          </div>

          <div class="w-4/5 sm:w-1/4 p-2 mx-8 sm:mx-16 space-y-4 mt-2 sm:mt-3">
            <!-- Hiển thị Overall Band -->
            <div class="mx-20 sm:mx-2">
              <h2 class="font-semibold text-slate-600 text-lg sm:text-xl ">Điển trung bình:</h2>
              <p class="sm:mx-14 py-5 rounded-lg text-success font-semibold text-6xl sm:text-7xl">{{ resultObjects.overallBand.score }}</p>
            </div>
             
            <!-- Hiển thị Kết quả Task Achievement -->
            <TaskAchievement />

            <!-- Hiển thị Kết quả Coherence and Cohesion -->
            <CoherenceAndCohesion />

            <!-- Hiển thị Kết quả Lexical Resource -->
            <LexicalResource />

            <!-- Hiển thị Kết quả Grammatical Range and Accuracy -->
            <GrammaticalAndAccuracy />

            <!-- Hiển thị Nhận xét tổng thể -->
              <OverallComment />
          </div> 
        </div>

        <!-- Hiển thị Lỗi cần lưu ý -->
        <div class="mb-4 p-4 border rounded bg-base-200">
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
import OverallComment from '../components/OverallComment.vue';

  export default {
    components: {
        TaskAchievement,
        CoherenceAndCohesion,
        LexicalResource,
        GrammaticalAndAccuracy,
        OverallComment,
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
  