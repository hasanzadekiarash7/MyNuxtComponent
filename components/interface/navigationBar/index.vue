<template>
    <div class="container">
        <div class="navigation">
            <div class="navigation__logo">
                <img src="/assets/images/nuxtlogo.png" alt="">
            </div>
            <div class="navigation__links">
                <ul class="navigation__items" ref="nav">
                    <li class="navigation__item active">
                        <NuxtLink href="/uknownNav" class="navigation__buttons">داشبورد</NuxtLink>
                    </li>
                    <li class="navigation__item">
                        <NuxtLink to="/account-info" class="navigation__buttons">حساب کاربری</NuxtLink>
                    </li>
                    <li class="navigation__item">
                        <NuxtLink to="/sidebar" class="navigation__buttons">پیام ها</NuxtLink>
                    </li>
                    <li class="navigation__item">
                        <NuxtLink to="/progress" class="navigation__buttons">درباره ما</NuxtLink>
                    </li>
                    <li class="navigation__item">
                        <NuxtLink href="" class="navigation__buttons">ورود</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="navigation__userSettings">
                <div class="navigation__icons mobile-none">
                    <Icon name="mdi:cog-outline" />
                </div>
                <div class="navigation__icons mobile-none">
                    <Icon name="mdi:bell-outline" />
                </div>
                <div class="navigation__icons mobile-none">
                    <Icon name="mdi:magnify" />
                </div>
                <div class="navigation__status">
                    <span class="navigation__status__content">آنلاین</span>
                </div>
                <div class="naivgation__profile">
                    <img src="/assets/images/vue.png" alt="">
                </div>
                <div class="navigation__mobile">
                    <Icon :name="showNavigation ? 'mdi:close' : 'mdi:menu'" class="navigation__icons" @click="showNav"
                        style="cursor: pointer;" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const showNavigation = ref(false)
const nav = ref()
const hello = ref()
const hello1 = ref()
const hello2 = ref()
const hello3 = ref()
const hello4 = ref()
function showNav() {
    showNavigation.value = !showNavigation.value
    if (showNavigation.value) {
        // nav.value.style.right = "0px"
        nav.value.style.right = '0px'
    } else {
        nav.value.style.right = '-250px'
    }
}
</script>

<style lang="scss" scoped>
// @import url('/assets/main.scss');
.navigation {
    background-color: #fff;
    max-width: 1400px;
    margin: 0 auto;
    border-radius: 5px;
    height: 50px;
    margin-top: 1rem;
    box-shadow: 0px 2px 8px 0 rgba(66, 66, 66, 0.3);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

}

.navigation__logo {
    // width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    flex-grow: 0.2;

    img {
        max-width: 10rem;
        max-height: 2rem;
    }

    @media only screen and (max-width: 830px) {
        flex-flow: 0.1;
        padding-top: 0.7rem;
        padding-left: 0;
        padding-right: 0.3rem;

        img {
            max-width: 6rem;
        }
    }
}

.navigation__links {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 650px) {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: space-between;
    }
}

.navigation__items {
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    @media only screen and (max-width: 1200px) {
        gap: 1rem;
    }

    @media only screen and (max-width: 830px) {
        gap: 0.5rem;
    }

    @media only screen and (max-width: 650px) {
        position: fixed;
        top: 0;
        right: -200px;
        bottom: 0;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 3rem;
        padding-top: 2rem;
        padding-right: 1.5rem;
        background-color: red;
        // max-width: 70rem;
        width: 150px;
        transition: all 0.5s ease-in-out;
    }

}

.navigation__item {
    font-size: 1rem;
}

.active {
    background: linear-gradient(70deg, #26A69A 50%, #00695C);
    padding: 0.1rem 1rem;
    border-radius: 22px;
    font-size: 1.1rem;

    @media only screen and (max-width: 830px) {
        padding: 0 0.5rem;
    }

    @media only screen and (max-width: 650px) {
        padding: 0.2rem 1.5rem;
        font-size: 1.1rem;
    }

    a {
        color: #fff;
    }
}

.navigation__buttons {
    text-decoration: none;
    color: black;
    font-weight: 300;

    @media only screen and (max-width: 830px) {
        font-size: 0.9rem;
        padding: 0 !important;
    }

    @media only screen and (max-width: 650px) {
        font-size: 1.1rem;
    }
}

.navigation__userSettings {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    padding-left: 1rem;
    flex-grow: 1;

    @media only screen and (max-width: 830px) {
        flex-grow: 0;
    }

    @media only screen and (max-width: 650px) {
        justify-content: center;
        gap: 0.2rem;
        padding: 0.4rem
    }

    @media only screen and (max-width: 350px) {
        gap: 0.5rem;
    }
}

.navigation__icons {
    font-size: 25px;
}

.navigation__status {
    background-color: #E8F5E9;
    padding: 0 1rem;
    font-size: 0.9rem;
    border-radius: 2px;
}

.navigation__status__content {
    color: #66BB6A;
}

.naivgation__profile {
    max-width: 100%;
    border-radius: 50%;
    box-shadow: 1px 2px 5px 2px rgba(33, 33, 33, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;

    img {
        max-width: 1.5rem;
        max-height: 1.5rem;
    }
}

.navigation__mobile {
    display: none;

    @media only screen and (max-width: 650px) {
        display: block;
    }
}

.mobile-none {
    @media only screen and (max-width: 350px) {
        display: none;
    }
}
</style>