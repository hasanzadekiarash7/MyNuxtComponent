<template>
    <!-- <div class="tab__container">
        <div class="tab__wrapper">
            <div class="tab__tabs" id="1">
                <div class="tab__tabs__content" style="border: 2px solid blue; border-bottom-color: white;">
                    <Icon name="mdi:history" size="28"></Icon>
                </div>
                <div class="tab__tabs__content" id="2"
                    style="border: 2px solid blue; border-left: none; border-bottom-color: white;">
                    <Icon name="mdi:phone" size="28"></Icon>
                </div>
                <div class="tab__tabs__content" id="3"
                    style="border: 2px solid blue; border-left: none; border-bottom-color: white;">
                    <Icon name="mdi:office-building" size="28"></Icon>
                </div>
                <div class="tab__tabs__content" id="4"
                    style="border: 2px solid blue; border-left: none; border-bottom-color: white;">
                    <Icon name="tabler:clipboard" size="28"></Icon>
                </div>
            </div>
            <div class="divider"></div>
            <div class="tab__tabPanel">
                <h6 class="tab__tabPanel__title">hello world</h6>
                <p class="tab__tabPanel__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, accusamus aut suscipit, enim quod
                    ullam autem dolorum nesciunt voluptates non doloribus quae. Temporibus voluptas vitae possimus,
                    consequatur veritatis quod error facere repellat nemo saepe, eum harum. Dolores, itaque accusamus,
                    mollitia neque quidem, quae voluptatem aliquam blanditiis culpa temporibus impedit vel?
                </p>
            </div>
        </div>
    </div> -->
    <div class="container">
        <div class="row">
            <div class="card">
                <Icon size="32" name="mdi:magnify" />
                <h3>card Title</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam, accusantium error
                </p>
            </div>
            <div class="card">
                <Icon size="32" name="mdi:download" />
                <h3>card Title</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam, accusantium error
                </p>
            </div>
            <div class="card">
                <Icon size="32" name="mdi:account-multiple" />
                <h3>card Title</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam, accusantium error
                </p>
            </div>
            <div class="card">
                <Icon size="32" name="mdi:check-circle" />
                <img src="" alt="">
                <h3>card Title</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam, accusantium error
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<!-- <style lang="scss" scoped>
.tab__container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    z-index: 0;
}

.tab__wrapper {
    width: 100%;
    height: 100%;
    max-width: 50rem;
    max-height: 25rem;
    background-color: #fff;
    padding: 1.5rem 0;
}

.tab__tabs {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-left: 1rem;
}

.tab__tabs__content {
    width: 3rem;
    background-color: #fafafa;
    padding: 0.2rem 0.6rem;
    z-index: 2;
    border-collapse: collapse;
    border-bottom-color: white;
    z-index: 2;
}

.tab__tabPanel {}

.tab__tabPanel__title {}

.tab__tabPanel__content {}

.divider {
    width: 100%;
    background-color: blue;
    height: 2px;
    z-index: 1 !important;
    top: -1.5px;
    position: relative;
}
</style> -->
<style lang="scss" scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.row {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 0.5rem;
}

.card {
    border: 2px solid #fafafa;
    border-radius: 10px;
    padding-top: 1.5rem;
    padding-left: 1rem;
    position: relative;
    width: 250px;

    &:first-child {
        &::before {
            border-right: 2px solid #0EA5E9;
            border-bottom: 2px solid #0EA5E9;
            border-bottom-right-radius: 10px;
        }

        svg {
            color: #0EA5E9;
        }

        &::after {
            border-right: 2px solid #0EA5E9;
            border-bottom: 2px solid #0EA5E9;
            border-bottom-right-radius: 10px;
        }
    }

    &:nth-child(2) {
        &::before {
            border-right: 2px solid #FB923C;
            border-bottom: 2px solid #FB923C;
            border-bottom-right-radius: 10px;
        }

        svg {
            color: #FB923C;
        }

        &::after {
            border-right: 2px solid #FB923C;
            border-bottom: 2px solid #FB923C;
            border-bottom-right-radius: 10px;
        }
    }

    &:nth-child(3) {
        &::before {
            border-right: 2px solid #4ADE80;
            border-bottom: 2px solid #4ADE80;
            border-bottom-right-radius: 10px;
        }

        svg {
            color: #4ADE80;
        }

        &::after {
            border-right: 2px solid #4ADE80;
            border-bottom: 2px solid #4ADE80;
            border-bottom-right-radius: 10px;
        }
    }

    &:last-child {
        &::before {
            border-right: 2px solid #E879F9;
            border-bottom: 2px solid #E879F9;
            border-bottom-right-radius: 10px;
        }

        svg {
            color: #E879F9;
        }

        &::after {
            border-right: 2px solid #E879F9;
            border-bottom: 2px solid #E879F9;
            border-bottom-right-radius: 10px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        width: 10%;
        height: 10%;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        border-bottom-right-radius: 10px;
        left: 90%;
        top: 90%;
    }

    &::after {
        content: '';
        position: absolute;
        width: 10%;
        height: 10%;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        border-bottom-right-radius: 10px;
        right: 90%;
        bottom: 90%;
        transform: rotate(180deg);
    }

    p {
        width: 100%;
        height: 50px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
</style>