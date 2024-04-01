<template>
    <div class="container">
        <ul class="sideBar" :class="close ? 'sideBarClosed' : ''">
            <li class="sideBarItem">
                <Icon name="mdi:home" size="28" />
                <p>hello1</p>
            </li>
            <li class="sideBarItem">
                <Icon name="mdi:briefcase" size="28" />
                <p>hello2</p>
            </li>
            <li class="sideBarItem">
                <Icon name="mdi:airplane" size="28" />
                <p>hello3</p>
            </li>
            <li class="sideBarItem">
                <Icon name="mdi:phone" size="28" />
                <p>hello4</p>
            </li>
            <li class="sideBarItem">
                <Icon name="mdi:cog" size="28" />
                <p>hello5</p>
            </li>
            <li class="sideBarItem">
                <Icon name="mdi:information" size="28" />
                <p>hello6</p>
            </li>
            <Icon @click="close = !close" class="left-side"
                :name="close ? 'mdi:chevron-double-right' : 'mdi:chevron-double-left'" size="32" />
        </ul>
    </div>
</template>

<script setup lang="ts">
const close = ref(false)
</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    margin: 0 !important;
    padding: 0 !important;
}

.sideBar {
    list-style: none;
    display: flex;
    flex-flow: column wrap;
    padding: 2rem 2rem 0 2rem;
    background-color: #86EFAC;
    color: #F0FDF4;
    border: 1px solid #F0FDF4;
    border-radius: 5px;
    width: 100px;
    position: relative;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    margin: 0;
}

.Icon-name {
    position: absolute;
    z-index: 120;
    top: 190px;
    left: 320px;
    color: #A1A1AA;
}

.sideBarItem {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1.5rem;
    position: relative;

}

.sideBarClosed {
    width: 30px;
}

.sideBarClosed .left-side {
    left: 30px;
}

.left-side {
    position: fixed;
    left: 130px;
    bottom: 0;
    cursor: pointer;
}

.sideBarClosed li p {
    opacity: 0;
    transform: translate(20px);
}

.sideBarItem p {
    margin-bottom: 0;
    opacity: 1;
    transform: translate(0px);
    transition: all 0.5s ease-out;
}
</style>