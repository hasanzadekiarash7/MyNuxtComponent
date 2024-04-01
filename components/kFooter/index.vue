<template>
    <section class="footer__signIn">
        <div class="container">
            <div class="footer__warpper">
                <h6 class="footer__sginIn__content">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h6>
                <div class="footer__sginIn__field">
                    <input type="email" placeholder="ایمیل خود را وارد کنید">
                    <NuxtLink class="footer__sginIn__button">
                        <Icon name="mdi:send" class="footer__signIn__icon"></Icon>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <section class="footer__details">
        <div class="container">
            <div class="footer__content">
                <p class="footer__content__copyright">copyright 2024&copy;</p>
                <p class="footer__content__text">کمپانی همزاد تقدیم می کند</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.footer__signIn {
    background-color: #EF9A9A;
    color: #F5F5F5;
    padding: 3rem;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
        padding: 0;
    }
}

.footer__warpper {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
        margin: 1rem;
    }
}

.footer__sginIn__field {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    flex-basis: 20rem;
    background-color: #F5F5F5;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem;
    border-radius: 3px;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
        margin: 1rem;
    }

    input {
        border: none;
        outline: none;
        width: 80%;
        padding: 0.4rem 0.6rem;

        @media only screen and (max-width: 768px) {
            max-width: 100%;
            justify-content: center;
            align-items: center;
            flex-basis: 100%;
            font-size: 0.8rem;
        }
    }
}

.footer__sginIn__button {
    background-color: #81C784;
    padding: 0.3rem 0.7rem;
    border-radius: 5px;
}

.footer__details {
    max-width: 80rem;
    margin: 0 auto;
}

.footer__content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1.7rem 1rem;

    @media only screen and (max-width: 768px) {
        justify-content: center;
        gap: 10px;
        margin-top: 1rem;
    }
}

.footer__sginIn__content {
    @media only screen and (max-width: 992px) {
        font-size: 0.9rem
    }

    @media only screen and (max-width: 768px) {
        text-align: center;
        line-height: 1.2rem;
        margin-top: 1rem;
    }
}

.footer__signIn__icon {
    transform: rotate(180deg);
    font-size: 1.8rem;
}
</style>