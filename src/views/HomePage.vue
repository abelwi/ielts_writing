<template>
  <div>
    <div class="flex justify-center items-center flex-col">
      <div>
        <div class="flex justify-center">
          <img class="w-40 h-40 mt-10 sm:w-52 sm:h-52" src="/home_logo.png" alt="home_logo">
        </div>
        <h1 class="font-medium text-xl sm:text-3xl my-4 sm:my-7">Luyện tập Ielts Writing Task 2!</h1>
        <p class="text-sm sm:text-md font-light text-center">Một trang web giúp bạn cải thiện trình độ Writing task 2 của mình!</p>
        <div class="mb-4 sm:mb-7 mt-10 sm:mt-16 flex justify-center">
          <router-link
            to="/question"
            class="btn btn-wide btn-secondary px-8 py-3 sm:px-14 sm:py-4 rounded-lg drop-shadow-xl shadow hover:shadow-xl"
          >
            BẮT ĐẦU NÀO
          </router-link>
        </div>
      </div>
    </div>
    <div class="mt-10 sm:mt-10 bg-base-300 w-full sm:h-56 p-4 shadow-inner">
      <!-- <div class="bg-gray-300 w-full sm:h-44 p-4 shadow-inner"> -->
        <p class="font-semibold text-left ml-2 sm:ml-8 pt-2">P/s:</p>
        <p class="text-left mx-2 sm:mx-14 font-thin">Mình là Lam - người tạo chiếc web nhỏ này cho cậu, hi vọng nó sẽ giúp cậu phần nào.
          Sẽ có khá nhiều thiếu sót, cậu hãy cho mình biết để mình cải thiện nha! ^^
        </p>

        <p class="text-right mt-5 mr-4 sm:mr-10">Liên hệ mình qua facebook này nè >>
          <a href="https://www.facebook.com/huyenhuong.nguyen.77" target="_blank" class="link link-primary">
            Đây nè!!!
          </a>
        </p>
      <!-- </div> -->
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
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}
</style>
