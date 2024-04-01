<template>
    <div class="faq__container">
        <div class="faq__expansion">
            <div class="faq__expansion__question" @click="hasFAQ = !hasFAQ">
                <h4 class="faq__expansion__title">Lorem ipsum dolor sit amet consectetur.</h4>
                <Icon :name="hasFAQ ? 'iconamoon:arrow-down-2-bold' : 'iconamoon:arrow-up-2-bold'" size="28"
                    color="#fafafa" />
            </div>
            <div :class="[hasFAQ ? 'faq__expansion__answer__open' : '']" class="faq__expansion__answer">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, facere!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aperiam.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const hasFAQ = ref(false)
</script>

<style lang="scss" scoped>
.faq__container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // direction: rtl;

}

.faq__box {
    background-color: #fafafa;
    max-width: 500px;
    max-height: 500px;
    padding: 1.5rem 2rem;
}

.faq__expansion {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
}

.faq__expansion__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4ADE80;
    width: 100.5%;
    padding: 0 0.5rem;
    border-radius: 0.2rem;
    cursor: pointer;
}

.faq__expansion__title {
    margin: 0.5rem 0.1rem;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1.5px;
}

.faq__expansion__answer {
    background-color: #4ADE80;
    width: 100.4%;
    height: 0px;
    border-radius: 0.2rem;
    position: relative;
    top: -5px;
    padding: 0 9px;
    transition: all 0.5s ease-in-out;
    opacity: 0;

    p {
        opacity: 0;
    }
}

.faq__expansion__answer__open {
    height: 100px;
    opacity: 1;

    p {
        opacity: 1;
    }

    transition: all 0.5s ease-in-out;
}
</style>