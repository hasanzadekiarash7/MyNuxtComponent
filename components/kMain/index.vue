<template>
    <div>
        <p class="works__title">همزاد چگونه کار میکند</p>
        <h6 class="works__title__details">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
        </h6>
        <div class="works__item">
            <div class="works__details">
                <h6 class="works__details__title">لورم ایپسوم</h6>
                <p class="works__details__content">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک است
                </p>
            </div>
            <div class="works__details">
                <h6 class="works__details__title">لورم ایپسوم</h6>
                <p class="works__details__content">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک است
                </p>
            </div>
            <div class="works__details">
                <h6 class="works__details__title">لورم ایپسوم</h6>
                <p class="works__details__content">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک است
                </p>
            </div>
        </div>
        <div class="works__image">
            <img src="/assets/images/Image_08.jpg" alt="همزاد چگونه کار میکند">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import url('/assets/main.scss');

.works__title {
    color: #616161;
    text-align: center;
    margin-top: 2rem;
}

.works__title__details {
    color: #111111;
    font-weight: 600;
    text-align: center;
    margin-top: 0.8rem;

    @media only screen and (max-width: 576px) {
        max-width: 100%;
        font-size: 1rem;
    }
}

.works__item {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: 2.5rem;
}

.works__details {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
}

.works__details__title {
    text-align: center;
    font-weight: 500;
    line-height: 3rem;
}

.works__details__content {
    text-align: center;
    line-height: 1.8rem;
    font-size: 0.9rem;
    font-weight: 100;
    max-width: 25rem;

}

.works__image {
    max-width: 25rem;
    margin: 0 auto;

    @media only screen and (max-width: 576px) {
        max-width: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 100%;
    }
}
</style>