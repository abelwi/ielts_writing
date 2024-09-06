<template>
    <div class="mt-10">
        <h1 class="text-2xl font-medium mb-10">Kết quả chấm điểm của bạn!</h1>
        
        <div class="flex justify-between">
            <div class="w-1/5 p-2 mx-10">
                <!-- Hiển thị Kết quả Task Achievement -->
                <div class="mb-4 p-4 border rounded-xl bg-customOrange drop-shadow-lg shadow-inner">
                    <h2 class="font-semibold">Task Achievement (TA)</h2>
                    <p>{{ resultObjects.taskAchievement.score }}</p>
                    <!-- <p>{{ resultObjects.taskAchievement.comment }}</p> -->
                </div>

                <!-- Hiển thị Kết quả Coherence and Cohesion -->
                <div class="mb-4 p-4 border rounded-xl bg-customYellow drop-shadow-lg shadow-inner">
                    <h2 class="font-semibold">Coherence and Cohesion (CC)</h2>
                    <p>{{ resultObjects.coherenceCohesion.score }}</p>
                    <!-- <p>{{ resultObjects.coherenceCohesion.comment }}</p> -->
                </div>

                <!-- Hiển thị Kết quả Lexical Resource -->
                <div class="mb-4 p-4 border rounded-xl bg-customBlue drop-shadow-lg shadow-inner">
                    <h2 class="font-semibold">Lexical Resource (LR)</h2>
                    <p>{{ resultObjects.lexicalResource.score }}</p>
                    <!-- <p>{{ resultObjects.lexicalResource.comment }}</p> -->
                </div>

                <!-- Hiển thị Kết quả Grammatical Range and Accuracy -->
                <div class="mb-4 p-4 border rounded-xl bg-customPurple drop-shadow-lg shadow-inner">
                    <h2 class="font-semibold">Grammatical Range and Accuracy (GRA)</h2>
                    <p>{{ resultObjects.grammaticalRangeAccuracy.score }}</p>
                    <!-- <p>{{ resultObjects.grammaticalRangeAccuracy.comment }}</p> -->
                </div>
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


        <div class="card">

        </div>
    </div>
  </template>
  
  <script>
  export default {
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
    .card {
        aspect-ratio: 1 / 1.6;
        border: 0.5vmin solid var(--border);
        cursor: pointer;
        position: relative;
        width: 56vmin;
    }

    .card:before {
        background: linear-gradient(
            130deg,
        

        );
        content: "";
        height: 100%;
        left: 0px;
        position: absolute;
        top: 0px;
        width: 100%;
    }
  </style>
  