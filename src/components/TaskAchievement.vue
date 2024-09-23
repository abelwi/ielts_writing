<template>
    <div tabindex="0" 
    class="collapse collapse-arrow bg-secondary border drop-shadow-lg shadow-inner border-secondary rounded-xl"
    > 
      <input type="checkbox" />
      <div class="collapse-title text-md font-semibold">
        Trả lời đúng câu hỏi đề bài (TA): {{ resultObjects.taskAchievement.score }}
      </div>
      <div class="collapse-content">
        <p>{{ resultObjects.taskAchievement.comment }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskAchievement',
    data() {
      return {
        resultObjects: {},
      };
    },
    created() {
        const resultObjects = JSON.parse(this.$route.query.resultObjects);
        this.resultObjects = resultObjects;
    }
  };
  </script>
  