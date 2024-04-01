<template>
    <div class="progress-container">
        <div class="progress__box">
            <div class="progress__box__item">
                <p class="progress__item__title">html</p>
                <div class="progress__item__progress">
                    <div class="item__progress__status" :style="{ 'width': `${width}%` }">
                        <div class="tooltip">{{ width + '%' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const width = ref(0);
onMounted(() => {
    width.value = 70
})
</script>

<style lang="scss" scoped>
.progress-container {
    width: 100%;
    height: 94.3vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;
}

.progress__box {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 300px;
    background-color: #4ADE80;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    transition: all 1s ease-in-out;

}

.progress__box__item {
    display: block;
    padding-bottom: 0.5rem;
    transition: all 1s ease-in-out;
}

.progress__item__title {
    font-size: 1.3rem;
    font-weight: 600;
    display: block;
    transition: all 1s ease-in-out;
}

.progress__item__progress {
    background-color: #F0FDF4;
    width: 100%;
    height: 10px;
    border-radius: 10px;
    margin-top: -10px;
    transition: all 1s ease-in-out;
    position: relative;
}

.item__progress__status {
    height: 10px;
    border-radius: 10px;
    margin-top: -10px;
    background-color: #15803D;
    transition: all 1s ease-in-out;
    position: relative;
}

.tooltip {
    position: absolute;
    top: -30px;
    left: 90%;
    background-color: #D1FAE5;
    padding: 0.01rem 0.3rem;
    border-radius: 3px;
    z-index: 2;
    transition: all 1s ease-in-out;
}
</style>