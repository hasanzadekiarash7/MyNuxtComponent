<template>
    <div class="container">
        <section class="flex">
            <nav class="row">
                <Icon @click="showIn" :name="!hasSideBar ? 'mdi:menu' : 'mdi:close'" size="28"
                    class="header__sidebar" />
                <div class="logo">
                    <Icon name="mdi:account-group" class="logo__styles" />
                    <p>همزاد</p>
                </div>
                <ul class="links" ref="showLinks">
                    <li class="link__item">
                        <NuxtLink to="/uknown" class="link__item__linkStyle">صفحه اصلی</NuxtLink>
                    </li>
                    <li class="link__item">
                        <NuxtLink to="" class="link__item__linkStyle">درباره ما</NuxtLink>
                    </li>
                    <li class="link__item">
                        <NuxtLink to="" class="link__item__linkStyle">مشاهده چت ها</NuxtLink>
                    </li>
                    <li class="link__item">
                        <NuxtLink to="/table" class="link__item__linkStyle">همزاد خود</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="login__side">
                <NuxtLink class="button__login">ورود</NuxtLink>
                <NuxtLink class="button__signIn">ثبت نام</NuxtLink>
            </div>
        </section>
        <section class="detials">
            <k-header-details />
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const hasSideBar = ref(false)
const showLinks = ref()
function showIn() {
    hasSideBar.value = !hasSideBar.value
    if (hasSideBar.value) {
        showLinks.value.style.right = '0px'
    } else {
        showLinks.value.style.right = '-250px'
    }
}
</script>

<style lang="scss" scoped>
@import url('/assets/main.scss');

.flex {
    display: flex;
    flex-flow: row-reverse wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;
}

.row {
    display: flex;
    flex-flow: row-reverse wrap;
    align-items: center;
    justify-content: center;
}

.logo {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    margin-right: 1.5rem;

    svg {
        font-size: 30px;
        color: #EF5350;
    }

    p {
        font-size: 0.8rem;
        text-align: center;
        margin: -5px 0;
    }
}

.header__sidebar {
    display: none;
    margin-right: 1rem;
    font-size: 2.5rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

.links {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
}

.link__item__linkStyle {
    color: #37474F;
    cursor: pointer;
    padding: 0 1rem;
    text-decoration: none;
}

.login__side {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
}

.button__login {
    outline: none;
    border: none;
    padding: 0.3rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: #EF5350;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    color: #fff;
}

.button__signIn {
    outline: none;
    border: 3px solid #EF5350;
    padding: 0.2rem 0.8rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    color: #37474F;
    margin-right: -1rem
}
</style>