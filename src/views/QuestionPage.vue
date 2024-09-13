<template>
  <div class="flex justify-center items-center">
    <div class="text-center py-10 mt-16 w-5/6 sm:w-1/2 border-2 border-gray-900 rounded-xl" id="box">
      <h1 class="text-xl sm:text-2xl font-semibold text-center">Luyện tập writing task 2!</h1>
      <p class="mt-12 mb-3 text-left ml-7 sm:ml-20 font-semibold">Câu hỏi:</p>
      <div class="mb-10 mx-5 sm:mx-32 flex flex-row" id="type_text">
        <textarea 
          class="w-4/5 basis-11/12 text-md sm:text-lg border-b-2 border-gray-400 focus:border-black focus:outline-none font-serif"
          v-model="text" 
          @input="adjustHeight" 
          required 
          placeholder="Nhập câu hỏi của bạn..."
        ></textarea>
        <img class="w-4 sm:w-5 h-4 sm:h-5 ml-2 mt-4 cursor-pointer" v-if="text"  src="/clear_button.png" alt="clear" @click="clearText">
      </div>
      <button 
        :class="{
          'bg-lime-300': text.trim() === '', 
          'bg-lime-500 hover:bg-lime-600 active:bg-lime-700 transform active:scale-95 transition-transform duration-100': text.trim() !== '', 
        }"
        class="px-20 sm:px-32 py-2 sm:py-3 font-bold rounded-xl shadow-xl shadow-lime-500/50"
        id="test"
        @click="checkText"
      >
        Bắt đầu
      </button>



    </div>
  </div>
  <!-- <router-link to="/writing">Câu trả lời</router-link> -->
</template>

<script>
export default {
name: 'QuestionPage',

data() {
    return {
      text: '',
      displayText: ''
    };
  },
  methods: {
    adjustHeight(event) {
      const textarea = event.target;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    },
    clearText() {
      this.text = '';
    },
    checkText() {
      if (this.text === '') {
        alert('Bạn chưa nhập câu hỏi!')
      } else {
        this.$router.push({ 
          path: '/writing', 
          query: { question: this.text } 
        });
      }
    }
  }
};
</script>

<style scoped>
textarea {
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  resize: none;
}
textarea:focus {
  box-shadow: none;
}
button {
  transition: background-color 0.3s ease
}
button.hover {
  background-color: #86efac;
}
</style>