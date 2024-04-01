<template>
    <div class="page404__container">
        <!-- <client-only>
            <Vue3Lottie class="side" :animation-data="alert" width="200px" />
        </client-only>
        <client-only>
            <Vue3Lottie class="side1" :animation-data="alert" width="200px" />
        </client-only>
        <client-only>
            <Vue3Lottie class="side2" :animation-data="alert" width="200px" />
        </client-only>
        <client-only>
            <Vue3Lottie class="side3" :animation-data="alert" width="200px" />
        </client-only> -->
        <template v-if="error.statusCode === 404">
            <div class="page404__box">
                <client-only v-if="isBest">
                    <Vue3Lottie :animation-data="error404" />
                </client-only>
                <client-only v-else>
                    <Vue3Lottie :animation-data="error404V2" />
                </client-only>
                <p>Sorry, that page doesn't exist.</p>
                <p @click="handleError" class="active">go back home</p>
            </div>
        </template>
        <template v-else>
            <div>
                <h1>Dang</h1>
                <p>
                    <strong>{{ error.message }}</strong>
                </p>
                <p>It looks like something broke.</p>
                <p>Sorry about that.</p>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
const error = useError();
const isBest = ref(true)
import { Vue3Lottie } from 'vue3-lottie';
import error404 from './assets/images/Animation - 1711961211174.json';
import alert from './assets/images/alert.json';
import error404V2 from './assets/images/Animation - 1711960284229.json';
const handleError = () => {
    clearError({
        redirect: '/',
    });
};
onMounted(() => {
    setTimeout(() => {
        isBest.value = false
    }, 10000);
})
</script>

<style lang="scss" scoped>
.page404__container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #E7E5E4, #44403C);
    position: relative;
}

.page404__box {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;

    p {
        color: #E7E5E4;

    }
}

.active {
    color: #A8A29E;
    animation: upDown 1s infinite ease-in-out;
    cursor: pointer;

    &:hover {
        color: #FDA4AF;
        transition: all 0.5s ease-in-out;
    }
}

@keyframes upDown {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0px);
    }
}

.side {
    position: absolute;
    top: -36%;
    left: 0;
}

.side1 {
    position: absolute;
    top: -36%;
    right: 0;
}

.side2 {
    position: absolute;
    bottom: -36%;
    left: 0;
}

.side3 {
    position: absolute;
    bottom: -36%;
    right: 0;
}
</style>