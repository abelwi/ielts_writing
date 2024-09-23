<template>
    <div tabindex="0" 
    class="collapse collapse-arrow bg-secondary drop-shadow-lg shadow-inner border-secondary border rounded-xl"
    >
      <input type="checkbox" />
      <div class="collapse-title text-md font-semibold">
        Ngữ pháp đa dạng và chính xác (GRA): {{ resultObjects.grammaticalRangeAccuracy.score }}
      </div>
      <div class="collapse-content">
        <p>{{ resultObjects.grammaticalRangeAccuracy.comment }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GrammaticalAndAccuracy',
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
  