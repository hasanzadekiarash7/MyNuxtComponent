<template>
    <div>
        <Sidebar />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})
</script>

<style scoped>
@import url('/assets/main.scss');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    direction: ltr;
    background-color: #E2E8F0;
}
</style>