<template>
  <div id="app" class="text-center mt-6">
    <div class="flex justify-center items-center">
      <nav class="border-gray-600 border-2 w-1/2 p-3 rounded-xl mx-3">
        <router-link to="/" class="nav-link">Giới thiệu</router-link>
        <router-link to="/question" class="nav-link">Nhập câu hỏi mới</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.nav-link {
  margin: 0 60px;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
