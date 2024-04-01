<template>
    <div class="login__circle"></div>
    <div class="login__container">
        <div class="login__row">
            <form action="" class="login__form">
                <h3 class="login__form__title">login page</h3>
                <div class="login__form__wrraper">
                    <label for="username">username</label>
                    <input type="email" id="username">
                </div>
                <div class="login__form__wrraper">
                    <label for="password">password</label>
                    <input type="password" id="password">
                </div>
                <button class="login__form__btn">login</button>
                <p class="login__form__sginIn">create new account</p>
            </form>
            <div style="flex-basis: 20%;">
                <img src="/assets/images/preview.gif" alt="" width="300px" height="395px">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.login__circle {
    background-color: #3F3F46;
    width: 60rem;
    bottom: -55%;
    left: -15%;
    height: 60rem;
    border-radius: 50%;
    position: fixed;
    z-index: 0;
}

.login__container {
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login__row {
    border: 3px solid #E5E7EB;
    border-radius: 5px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 3rem;
    width: 925px;
    height: 395px;
    z-index: 1;
    backdrop-filter: blur(10px);
}

.login__form {
    padding: 25px 50px;
    flex-basis: 21%;
}

.login__form__title {
    font-size: 2rem;
    text-align: center;
    color: #F3F4F6;
    margin-top: 0;
}

.login__form__wrraper {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;

    input {
        border: 3px solid #E4E4E7;
        outline: none;
        border-radius: 20px;
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
        margin-bottom: 1.5rem;
        width: 440px;
        color: #fff;
    }

    label {
        color: #E4E4E7;
        padding-left: 0.8rem;
    }
}

.login__form__btn {
    background-color: #F3F4F6;
    width: 100%;
    border-radius: 20px;
    font-size: 1.4rem;
    padding: 0.2rem 0;
    font-weight: 600;
    margin-top: 0.6rem;
    border: none;
    outline: none;
    cursor: pointer;
}

.login__form__sginIn {
    text-align: center;
    color: #F3F4F6;
    font-size: 1.3rem;
    margin-top: 1rem;
}
</style>