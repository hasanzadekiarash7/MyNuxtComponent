<template>
    <div class="header__nav__container">
        <div class="nav">
            <div class="navigation__logo" style="flex-grow: 3;">
                <a href="#">Learn</a>
            </div>
            <nav class="navigation" style="flex-grow: 0;">
                <li class="navigation__item">
                    <NuxtLink to="/searchbox">home</NuxtLink>
                </li>
                <li class="navigation__item">
                    <NuxtLink to="/socialMedia">about us</NuxtLink>
                </li>
                <li class="navigation__item">
                    <NuxtLink to="/FAQs">services</NuxtLink>
                </li>
                <li class="navigation__item">
                    <NuxtLink to="/contactus">contacts</NuxtLink>
                </li>
                <li class="navigation__item">
                    <NuxtLink to="/blog">blog</NuxtLink>
                </li>
            </nav>
            <li class="navigation__item active">
                <NuxtLink to="/login">register</NuxtLink>
            </li>
        </div>
    </div>
    <div class="header__nav__container content">
        <div class="header__content__right">
            <h1>
                <span class="header__content__simple">best methods </span>
                <br>
                <span class="header__content__bold">over the america </span>
                <br>
                <span class="header__content__colored">in free price</span>
            </h1>
            <p class="header__content__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati asperiores
                reiciendis doloresprovident magni nam sunt saepe, totam rem illum, velit ex deleniti
                assumenda? Placeat provident obcaecati explicabo tenetur odio.
            </p>
            <div class="header__content__field">
                <input type="text" placeholder="enter your id">
                <button class="header__content__btn">serach Id</button>
            </div>
        </div>
        <div class="header__content__left">
            <img src="/assets/images/HD-wallpaper-learn-and-earn-success-inspirational-motivation-thumbnail.jpg" alt=""
                class="header__content__firstImage">
            <img src="/assets/images/never-stop-learning-hd-wallpaper-640x1136.jpg" alt=""
                class="header__content__secondImage">
            <div class="box__container">
                <li class="box__container__items">hello world</li>
                <li class="box__container__items">hello world</li>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header__nav__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}

.nav {
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
}

.navigation__logo {
    height: 50%;

    a {
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 500;
        color: #16A34A;
        transition: all 0.5s ease-in-out;

        &:hover {
            color: #14532D;
            transition: all 0.5s ease-in-out;
        }
    }
}

.navigation {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    list-style: none;

    @media screen and (max-width: 720px) {
        display: none;
    }
}

.navigation__item {
    font-size: 1.1rem;

    a {
        color: #4ADE80;
        text-decoration: none;
    }

    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:not(.active) {
        padding-top: 0.3rem;

        &:hover {
            color: #166534;
            transition: all 0.5s ease-in-out;
        }
    }
}

.active {
    background-color: #86EFAC;
    padding: 0.3rem 2rem;
    margin-left: 2rem;
    border-radius: 5px;
    color: #fff;
    list-style: none;

    a {
        text-decoration: none;
        color: #fff;
    }

    &:hover {
        background-color: #4ADE80;
    }

    @media screen and (max-width: 990px) {
        display: block;
    }
}

/* navigation */


/* content */

/* right */
.content {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;

    @media screen and (max-width: 990px) {
        flex-flow: column nowrap;
        gap: 5rem;
    }
}

.header__content__right {
    flex-basis: 40%;
    min-height: 100vh;

    @media screen and (max-width: 990px) {
        flex-basis: 100%;
        text-align: center;
        min-height: auto;
    }
}

h1 {
    line-height: 60px;
}

.header__content__simple {
    font-size: 3rem;
    font-weight: 300 !important;
}

.header__content__bold {
    font-size: 4rem;
    font-weight: bold;
}

.header__content__colored {
    font-size: 4rem;
    font-weight: bold;
    color: #166534;
}

.header__content__description {
    margin: 1rem 0;
    color: #333;
}

.header__content__field {
    display: flex;
    flex-flow: row nowrap;

    input {
        box-shadow: 1px 2px 10px rgba($color: #000000, $alpha: 0.4);
        padding: 0.7rem;
        outline: none;
        border-radius: 2px;
        width: 70%;

        @media screen and (max-width: 990px) {
            width: 87%;
        }
    }

    @media screen and (max-width: 990px) {
        flex-flow: column wrap;
        gap: 1rem;

        input {
            width: 100%;
        }
    }
}

.header__content__btn {
    background-color: #15803D;
    padding: 0.7rem 1.5rem;
    box-shadow: 1px 2px 10px rgba($color: #000000, $alpha: 0.4);
    color: #fff;
    display: flex;
    flex-wrap: nowrap;
    border-radius: 2px;

    &:hover {
        background-color: #14532D;
    }
}

/* content */
.header__content__left {
    flex-basis: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    align-items: flex-start;
    gap: 1rem;
    min-height: 100vh;

    @media screen and (max-width: 990px) {
        min-height: auto;
        justify-content: flex-start;
        flex-basis: 100%;
    }
}

.header__content__firstImage {
    max-height: 20.45rem;
    padding-left: 4rem;
    transform: translateY(20px);
    position: relative;

    @media screen and (max-width: 990px) {
        transform: translateY(0);
    }
}

.header__content__secondImage {
    max-height: 20.45rem;
    transform: translateY(-30px);
    position: relative;

    @media screen and (max-width: 990px) {
        transform: translateY(0);
    }
}

.box__container {
    background: linear-gradient(to right, rgba(21, 128, 61, 0.7), rgba(111, 163, 13, 0.4));
    backdrop-filter: blur(10px);
    padding: 0.1rem 3rem 0.1rem 1rem;
    position: absolute;
    top: 30%;
    right: 20%;
    width: 100%;
    max-width: 300px;
    border-radius: 10px;

    @media screen and (max-width: 990px) {
        top: 60%;
    }
}

.box__container__items {
    padding: 0.2rem 1rem;
    color: #fff;
}
</style>