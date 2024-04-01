<template>
    <div class="row">
        <div class="details__image">
            <img src="/assets/images/3+Web+Design+Tips+to+Consider+When+Building+a+Successful+Blog_530X384-640w.webp"
                alt="" title="درباره همزاد">
        </div>
        <div class="details__content">
            <div class="details__content__warpper">
                <h5 class="details__title">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است
                </h5>
                <p class="details__description">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                    فعلی تکنولوژی مورد نیاز
                </p>
            </div>
            <div class="detials__buttons">
                <NuxtLink class="details__links">ثبت نام </NuxtLink>
                <NuxtLink class="details__links">همزاد چیست</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import url('/assets/main.scss');

.row {
    /* */
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;

    @media only screen and (max-width: 1200px) {
        gap: 20px;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-basis: 100%;
        justify-content: flex-start;
        align-items: flex-end;
        margin-top: 1rem;
    }
}

.details__image {
    flex-basis: 50%;

    @media only screen and (max-width: 1200px) {
        flex-basis: 40%;
    }

    @media only screen and (max-width: 768px) {
        flex-basis: 100%;
    }

    img {
        width: 100%;
    }
}

.details__content {
    flex-basis: 50%;
    align-items: center;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-basis: 100%;
        flex-direction: column;
        gap: 30px;
        text-align: center;
    }
}

.details__content__warpper {
    max-width: 30rem;
}

.details__title {
    font-size: 1.5rem;
    font-weight: 500;
    color: #212121;
    line-height: 2rem;
    text-align: justify;
    margin-bottom: 1rem;
    margin-top: 0;

    @media only screen and (max-width: 768px) {
        text-align: center;
        font-size: 1.1rem;
        font-weight: 600;
    }
}

.details__description {
    font-size: 1rem;
    line-height: 1.8rem;
    color: #616161;
    text-align: justify;

    @media only screen and (max-width: 768px) {
        text-align: center;
        font-size: 0.8rem;
    }
}

.detials__buttons {
    display: flex;
    gap: 5px;

    @media only screen and (max-width: 768px) {
        flex-direction: row;
        max-width: 720px;
    }
}

.details__links {
    outline: none;
    border: none;
    display: block;
    max-width: 8rem;
    padding: 0.3rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    background-color: #EF5350;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    color: #fff;

    // @media only screen and (max-width: 768px) {
    //     max-width: 100%;
    // }

    &:last-child {
        background-color: #4CAF50;
    }
}
</style>