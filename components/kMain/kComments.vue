<template>
    <div class="comments__background">
        <h5 class="comments__title">نظر کاربران درباره همزاد</h5>
        <p class="comments__content">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
        <div class="comments__warpper">
            <div class="comments__comments__wrraper">
                <div class="comments__comments__box">
                    <p class="comments__comments__content">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                        با
                        استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        و
                        برای شرایط فعلی تکنولوژی مورد نیاز</p>
                    <hr />
                    <div class="comments__comments__user">
                        <img src="/assets/images/vue.png" alt="" class="comments__user__profile">
                        <p class="comments__user__fullname">لورم ایپسوم متن ساختگی با</p>
                    </div>
                </div>
                <div class="comments__comments__box">
                    <p class="comments__comments__content">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                        با
                        استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        و
                        برای شرایط فعلی تکنولوژی مورد نیاز</p>
                    <hr />
                    <div class="comments__comments__user">
                        <img src="/assets/images/nuxt.png" alt="" class="comments__user__profile">
                        <p class="comments__user__fullname">لورم ایپسوم متن ساختگی با</p>
                    </div>
                </div>
                <div class="comments__comments__box">
                    <p class="comments__comments__content">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                        با
                        استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        و
                        برای شرایط فعلی تکنولوژی مورد نیاز</p>
                    <hr />
                    <div class="comments__comments__user">
                        <img src="/assets/images/javascript.png" alt="" class="comments__user__profile">
                        <p class="comments__user__fullname">لورم ایپسوم متن ساختگی با</p>
                    </div>
                </div>
            </div>
            <div class="comments__company__logo">
                <img src="/assets/images/vue.png" alt="componay logo">
                <img src="/assets/images/nuxt.png" alt="componay logo">
                <img src="/assets/images/javascript.png" alt="componay logo">
                <img src="/assets/images/html.png" alt="componay logo">
                <img src="/assets/images/css.png" alt="componay logo">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import url('/assets/main.scss');

.comments__background {
    background-color: #EF9A9A;
    color: #F5F5F5;
}

.comments__title {
    text-align: center;
    margin-top: 3rem;
    padding-top: 3rem;
    font-weight: 600;

    @media only screen and (max-width: 576px) {
        max-width: 100%;
        line-height: 1.4rem;
        font-size: 1rem;
        margin: 0;
        padding: 0.7rem;
    }
}

.comments__content {
    text-align: center;
    line-height: 3rem;

    @media only screen and (max-width: 576px) {
        max-width: 100%;
        line-height: 1.4rem;
        font-size: 0.8rem;
        margin: 1rem 0;
    }
}

.comments__warpper {
    max-width: 84rem;
    margin: 0 auto;
    flex-grow: 2;
}

.comments__comments__wrraper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-grow: 2;

}

.comments__comments__box {
    background-color: white;
    color: black;
    max-width: 20rem;
    border-radius: 5px;

    @media only screen and (max-width: 576px) {
        max-width: 100%;
        margin: 5px;
    }
}

.comments__comments__content {
    padding: 0.5rem 0.7rem;
    margin-bottom: 5rem;
    font-size: 0.8rem;
    line-height: 1.4rem;
    text-align: justify;
}

.comments__comments__user {
    display: flex;
    gap: 20px;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0.4rem 0.5rem;
}

.comments__user__profile {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 3px solid white;
    background-color: white;
}

.comments__user__fullname {
    margin-bottom: 0;
}

.comments__company__logo {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 4rem;
    padding-bottom: 2rem;

    @media only screen and (max-width: 576px) {
        max-width: 100%;
        margin: 5px;
        flex-flow: column wrap;
        justify-content: center;
    }

    img {
        max-width: 8rem;
        max-height: 3rem;

        @media only screen and (max-width: 576px) {
            max-width: 100%;
            // max-height: 10%;
            max-height: 5rem;
            gap: 20px;
            margin: 5px;
        }
    }
}
</style>