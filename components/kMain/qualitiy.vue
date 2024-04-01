<template>
    <div class="container">
        <p class="quality__header">بهترین دوست</p>
        <h6 class="quality__title">چگونه همزاد بهترین دوست شما در دنیا می شود</h6>
        <div class="quality__items">
            <div class="quality__item">
                <img src="/assets/images/7-STEPS-TO-CREATING-A-SUCCESSFUL-WEBSITE.jpg" alt="">
            </div>
            <div class="quality__item">
                <img src="/assets/images/afford_package.png" alt="">
            </div>
            <div class="quality__item">
                <img src="/assets/images/flat-design-ui-ux-landing-page_23-2149093998.avif" alt="">
            </div>
            <div class="quality__item">
                <img src="/assets/images/Image_08.jpg" alt="">
            </div>
            <div class="quality__item">
                <img src="/assets/images/Web-Design-Process-from-Start-to-Finish-1280x720.webp" alt="">
            </div>
            <div class="quality__item">
                <img src="/assets/images/images.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import url('/assets/main.scss');

.quality__header {
    text-align: center;
    margin-top: 3rem;

    @media only screen and (max-width: 576px) {
        max-width: 100%;
        font-size: 0.8rem;
    }
}

.quality__title {
    text-align: center;
    margin-top: 0rem;

    @media only screen and (max-width: 576px) {
        font-weight: 600;
        max-width: 100%;
        font-size: 1rem;
    }
}

.quality__items {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin: 5rem 0;

    @media only screen and (max-width: 1200px) {
        max-width: 960px;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 576px) {
        max-width: 100%;
        justify-content: center;
        margin: 1rem;
    }
}

.quality__item {
    flex-basis: 20rem;

    img {
        width: 100%;
        height: 10rem;
        object-fit: cover;
        border-radius: 3px;
        border: 1px solid rgba($color: #000000, $alpha: 0.1);

        @media only screen and (max-width: 576px) {
            width: 100%;
        }
    }
}
</style>