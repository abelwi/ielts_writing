<template>
  <div>
    <div class="flex justify-center items-center">
      <div>
        <div class="flex justify-center">
          <img class="w-52 h-52" src="/home_logo.png" alt="home_logo">
        </div>
        <h1 class=" font-medium text-3xl my-7">Luyện tập Ielts Writing Task 2!</h1>
        <p class="text-md font-light">Một trang web giúp bạn cải thiện trình độ Writing task 2 của mình!</p>
        <div class="mb-7 mt-16">
          <router-link to="/question" class="bg-lime-400 px-14 py-4 rounded-lg drop-shadow-xl shadow hover:shadow-xl shadow-lime-500/50">
            BẮT ĐẦU NÀO
          </router-link>
        </div>  
      </div>
    </div>
    <div class="mt-20">
      <div class="bg-gray-300 w-full h-44 shadow-inner">
        <p class="font-semibold text-left ml-8 pt-4">P/s:</p>
        <p class="text-left mx-14 font-thin">Mình là Lam - người tạo chiếc web nhỏ này cho cậu, hi vọng nó sẽ giúp cậu phần nào.
          Sẽ có khá nhiều thiếu sót, cậu hãy cho mình biết để mình cải thiện nha! ^^
        </p>
        <p class="text-right mt-5 mr-10">Liên hệ mình: <i>nguyen03lam@gmail.com</i></p>

      </div>
    </div>
  </div>
  

</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
:root {
  --lime: rgb(68, 214, 73);
  --yellow: rgb(200, 202, 63);
  --green: rgb(115, 186, 58);
}

h1 > .magic {
  background: linear-gradient(
    to right,
    var(--lime),
    var(--yellow),
    var(--green),
    var(--lime)
  );
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}
</style>
