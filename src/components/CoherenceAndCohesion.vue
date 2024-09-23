<template>
    <div tabindex="0" 
    class="collapse collapse-arrow bg-secondary drop-shadow-lg shadow-inner border-secondary border rounded-xl"
    >
      <input type="checkbox" />
      <div class="collapse-title text-md font-semibold">
        Mạch lạc và liên kết (CC): {{ resultObjects.coherenceCohesion.score }}
      </div>
      <div class="collapse-content">
        <p>{{ resultObjects.coherenceCohesion.comment }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CoherenceAndCohesion',
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
  