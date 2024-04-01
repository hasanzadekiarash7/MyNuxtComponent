<template>
    <div>
        <form action="">
            <div class="otp-style">
                <input t type="text" class="otp-style-input" v-for="(el, ind) in digits" :key="el + ind"
                    v-model="digits[ind]" @keydown="handleKeyDown($event, ind)" :autofocus="ind === 0" maxlength="1">
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
    default: String,

    digitCount: {
        type: Number,
        required: true
    }
});

const digits = reactive([])

if (props.default && props.default.length === props.digitCount) {
    for (let i = 0; i < props.digitCount; i++) {
        digits[i] = props.default.charAt(i)
    }
} else {
    for (let i = 0; i < props.digitCount; i++) {
        digits[i] = null;
    }
}

const otpCont = ref(null)
const handleKeyDown = function (event, index) {
    if (event.key !== "Tab" &&
        event.key !== "ArrowRight" &&
        event.key !== "ArrowLeft"
    ) {
        event.preventDefault();
    }

    if (event.key === "Backspace") {
        digits[index] = null;

        if (index != 0) {
            (otpCont.value.children)[index - 1].focus();
        }

        return;
    }

    if ((new RegExp('^([0-9])$')).test(event.key)) {
        digits[index] = event.key;

        if (index != props.digitCount - 1) {
            (otpCont.value.children)[index + 1].focus();
        }
    }
    if (isDigitsFull()) {
        emit('update:otp', digits.join(''))
    }
}
const emit = defineEmits(['update:otp']);

const isDigitsFull = function () {
    for (const elem of digits) {
        if (elem == null || elem == undefined) {
            return false;
        }
    }

    return true;
}
</script>
<style scoped lang="scss">
.otp-style {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
}

.otp-style-input {
    width: 68px;
    height: 63px;
    border: 1px solid gray;
    border-radius: 6px;
    font-size: 22px;
    text-align: center;

    &:hover {
        border-color: black;
    }

    &:focus {
        border-color: red;
    }
}
</style>