<template>
    <div class="media__container">
        <div class="media__wrapper">
            <div class="media__buttons">
                <div class="media__button__tooltip">youtube</div>
                <Icon name="mdi:youtube" size="40" class="media__button" />
            </div>
            <div class="media__buttons">
                <div class="media__button__tooltip">telegram</div>
                <Icon name="mdi:telegram" size="40" class="media__button" />
            </div>
            <div class="media__buttons">
                <div class="media__button__tooltip">whatsapp</div>
                <Icon name="mdi:whatsapp" size="40" class="media__button" />
            </div>
            <div class="media__buttons">
                <div class="media__button__tooltip">github</div>
                <Icon name="mdi:github" size="40" class="media__button" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.media__container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.media__wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.media__buttons {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
    cursor: pointer;

    &:hover {
        &:first-child {
            .media__button {
                background-color: #DC2626;
                color: #FEF2F2;
            }

            .media__button__tooltip {
                background-color: #DC2626;
                color: #FEF2F2;

                &::before {
                    background-color: #DC2626;
                    color: #FEF2F2;
                }
            }
        }

        &:nth-child(2) {
            .media__button {
                background-color: #38BDF8;
                color: #E0F2FE;
            }

            .media__button__tooltip {
                background-color: #38BDF8;
                color: #E0F2FE;

                &::before {
                    background-color: #38BDF8;
                    color: #E0F2FE;
                }
            }
        }

        &:nth-child(3) {
            .media__button {
                background-color: #4ADE80;
                color: #DCFCE7;
            }

            .media__button__tooltip {
                background-color: #4ADE80;
                color: #DCFCE7;

                &::before {
                    background-color: #4ADE80;
                    color: #DCFCE7;
                }
            }
        }

        &:last-child {
            .media__button {
                background-color: #000;
                color: #fff;
            }

            .media__button__tooltip {
                background-color: #000;
                color: #fff;

                &::before {
                    background-color: #000;
                    color: #fff;
                }
            }
        }
    }
}

.media__button__tooltip {
    background-color: #000;
    color: #fff;
    padding: 0.4rem 1.2rem;
    border-radius: 2rem;
    opacity: 0;
    position: absolute;
    top: -1rem;

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 1rem;
        height: 1rem;
        background-color: #000;
        bottom: -7px;
        left: 50%;
        transform: translate(-50%) rotate(45deg);
        z-index: -1;
    }
}

.media__button {
    outline: none;
    border: none;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.5s ease-out;

    &:hover {
        background-color: black;
        color: #fff;
    }
}

.media__buttons:hover .media__button__tooltip {
    opacity: 1;
    transition: all 0.3s ease-in 350ms;
    top: -3rem;
}
</style>