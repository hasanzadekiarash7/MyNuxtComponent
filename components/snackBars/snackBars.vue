<template>
    <div>
        <transition name="accordion-item" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave"
            @after-leave="onAfterEnter" @before-leave="onEnter">
            <div class="snackbar" v-if="notif" ref="snackbar">
                <div class="snackbar--container">
                    <div class="snackbar--container-text">
                        <Icon name="mdi:check" />
                        <span>{{ massage }}</span>
                    </div>
                    <div class="snackbar--container-button" v-if="IsRemoveing">
                        <button>dismis</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">    
import { ref } from 'vue';
const notif = ref(false)
const snackbar = ref()
interface snackbar {
    massage: String,
    IsRemoveing?: Boolean,
}
defineProps<snackbar>()
function close() {
    notif.value = false
}
function onEnter(el: any) {
    el.style.height = el.scrollHeight + 'px'
}
function onAfterEnter(el: any) {
    el.style.height = el.scrollHeight + 'px'
}
function onLeave(el: any) {
    setTimeout(() => {
        snackbar.value.parentNode.remove()
    }, 2000)
}
onMounted(() => {
    notif.value = true
    setTimeout(() => {
        close()
    }, 3000);
})
</script>

<style lang="scss" scoped>
.snackbar {
    height: 0;
    overflow: hidden;
    display: flex;
    position: absolute;
    bottom: 0;
    right: 35%;
    margin-top: 16px;
    min-width: 450px;
    border-radius: 8px;
    justify-content: center;
    &--container {
        position: relative;
        display: flex;
        padding: 16px;
        height: 46px;
        justify-content: space-between;
        background-color: rgba($color: #000000, $alpha: 0.7);
    }

    &--text {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
    }
}

.accordion-item-enter-active,
.accordion-item-leave-active {
    will-change: height;
    transition: all .5s ease;
    overflow: hidden;
}

.accordion-item-enter,
.accordion-item-leave-to {
    height: 0 !important;
    margin-top: 0;
}
</style>

<!-- <script>
import DIcon from "~/components/Component/IconSVG/DIcon.vue";
import DButton from "~/components/Component/Button/DButton.vue";

export default {
    name: "DSnackbar",
    data() {
        return {
            show_Status: false
        }
    },
    props: {
        label: {
            type: String
        },
        action: {
            type: Array
        },
        NClass: {
            type: String
        },
        icon: {
            type: String
        }
    },
    methods: {
        Close() {
            this.show_Status = false
        },
        enterTransition(el) {
            el.style.height = el.scrollHeight + 'px'
        },
        beforeLeaveTransition(el) {
            el.style.height = el.scrollHeight + 'px'
        },
        leaveTransition() {
            this.removeElement()
        },
        removeElement() {
            setTimeout(() => {
                this.$refs.notify.parentNode.remove()
            }, 2000)
        }
    },
    mounted() {
        this.show_Status = true
        setTimeout(() => {
            this.Close()
        }, 3000)
    },
    components: { DButton, DIcon }
}
</script> -->