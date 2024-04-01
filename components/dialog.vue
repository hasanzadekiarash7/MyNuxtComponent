<template>
    <transition>
        <div :class="backgroundClass" v-if="showDialog" class="mainDDialog" />
    </transition>
    <transition name="bounce" appear>
        <div id="dialog" @click="clickOutDialog" v-if="showDialog" class="mainDDialog--card">
            <slot />
        </div>
    </transition>
</template>
<script>
export default {
    name: "DDialog",
    props: {
        modelValue: {
            type: Boolean,
            default: true
        },
        present: {
            type: Boolean
        },
        backgroundClass: {
            type: Object
        }
    },
    data() {
        return {
            showDialog: this.modelValue
        }
    },
    methods: {
        clickOutDialog(e) {
            e.stopPropagation()
            if (e.target.id === 'dialog' && !this.present) {
                this.showDialog = false
                this.$emit('close')
                this.$emit('update:modelValue', false)
            }
        }
    },
    watch: {
        modelValue(newVal) {
            this.showDialog = newVal
            if (newVal) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'unset'
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.mainDDialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(2.5px);
    z-index: 5;

    &--card {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 6;
    }
}

.bounce-enter-active {
    animation: bounce-in 0.2s;
}

.bounce-leave-active {
    animation: bounce-in 0.2s reverse;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

.filterDialog {
    backdrop-filter: blur(307.5px) !important;
}
</style>
