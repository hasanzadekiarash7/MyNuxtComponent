<template>
    <div class="table__container">
        <table class="table__boxTable">
            <thead class="table__boxTable__header">
                <tr class="table__header__wrapper">
                    <th class="table__header__item">name</th>
                    <th class="table__header__item">favorite</th>
                    <th class="table__header__item">likes</th>
                    <th class="table__header__item">followers</th>
                    <th class="table__header__item">stars</th>
                </tr>
            </thead>
            <tbody class="table__boxTable__main">
                <tr class="table__main__wrapper">
                    <td class="table__main__item active">chatgpt</td>
                    <td class="table__main__item">200,000,000</td>
                    <td class="table__main__item">150,000,000</td>
                    <td class="table__main__item">enterprise</td>
                    <td class="table__main__item">
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                    </td>
                </tr>
                <tr class="table__main__wrapper">
                    <td class="table__main__item active">copilot</td>
                    <td class="table__main__item">9,000,000</td>
                    <td class="table__main__item">90,000,000</td>
                    <td class="table__main__item">high</td>
                    <td class="table__main__item">
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star-half" size="24" />
                    </td>
                </tr>
                <tr class="table__main__wrapper">
                    <td class="table__main__item active">gemini</td>
                    <td class="table__main__item">1,250,000</td>
                    <td class="table__main__item">3,000,000</td>
                    <td class="table__main__item">upper middle</td>
                    <td class="table__main__item">
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star-outline" size="24" />
                    </td>
                </tr>
                <tr class="table__main__wrapper">
                    <td class="table__main__item active">deltatech</td>
                    <td class="table__main__item">10</td>
                    <td class="table__main__item">20</td>
                    <td class="table__main__item">low</td>
                    <td class="table__main__item">
                        <Icon name="mdi:star" size="24" />
                        <Icon name="mdi:star-outline" size="24" />
                        <Icon name="mdi:star-outline" size="24" />
                        <Icon name="mdi:star-outline" size="24" />
                        <Icon name="mdi:star-outline" size="24" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.table__container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right bottom, #4ADE80, #F87171);
}

.table__boxTable {
    width: 100%;
    height: 100%;
    max-width: 700px;
    max-height: 400px;
    background-color: #0C0A09;
    border-radius: 5px;
}

.table__boxTable__header {
    background-color: #0C0A09;
    color: #fff;
    border-collapse: collapse;
}

.table__header__wrapper {
    padding: 170px;
    border-collapse: collapse;
}

.table__header__item {
    padding: 10px;

}

.table__main__wrapper {
    border: 10px solid black;
    text-align: center;
    color: #fff;

    &:nth-child(odd) {
        background-color: #78716C;
    }

    &:nth-child(even) {
        background-color: #44403C;
    }
}

.table__main__item {
    padding: 0.5rem 1rem;
    color: #BBF7D0;
    transition: all 0.5s ease-in-out;

    &:first-child {
        color: #4ADE80;
    }

    &:hover {
        color: #fff;
        background-color: #4ADE80;
        transform: translateY(3px) translateX(3px);
        box-shadow: -4px -3px 10px 1px rgba($color: #4ADE80, $alpha: 0.7);
    }
}
</style>