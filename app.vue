<template>
  <div dir="rtl">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import MyCheckbox from "~/components/kCheckbox.vue";
</script>
<style>
@import url('/assets/fonts/font.scss');

body {
  margin: 0;
  font-family: "vazir regular", sans-serif;
  font-size: 16px;
  background-color: #F5F5F5;
}
</style>