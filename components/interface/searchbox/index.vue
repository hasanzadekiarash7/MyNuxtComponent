<template>
    <div class="search__container">
        <input type="checkbox" class="checkbox" name="" id="search" hidden>
        <label for="search" class="search__before__label">
            <Icon name="mdi:magnify" />
        </label>
        <div class="search__box__content">
            <input type="text" placeholder="type here...">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.search__container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 500px;
    margin: 0 auto;
}

.search__before__label {
    position: absolute;
    z-index: 1;
    right: 210px;
    width: 80px;
    height: 40px;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 1.5rem;
    color: #000;
    font-size: 1.5rem;
    transition: all 0.5s ease-in-out;
}

.search__box__content {
    height: 40px;
    width: 100%;
    max-width: 70px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease-in-out;

    input {
        border: none;
        width: 82%;
        height: 100%;
        padding-left: 1rem;
        padding-right: 0.1rem;
        outline: none;
        font-size: 1.2rem;
        transition: all 0.5s ease-in-out;
    }
}

.checkbox:checked+.search__before__label {
    width: 50px;
    right: 70px;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
    background-color: #4ADE80;
    color: #fff;
}

.checkbox:checked~.search__box__content {
    max-width: 360px;
}
</style>