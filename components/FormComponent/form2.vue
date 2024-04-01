<template>
    <div>
        <form action="#" class="form" :class="[`form--${type || 'default'}`]" @submit.prevent="SubmitFunction">
            <div class="form--container" :class="[`form--container-${fromStyle}`]">
                <div class="form--inputs" v-for="item in inputCount" :key="item">
                    <q-input class="form--inputs-input" :type="inputType" :outlined="isOutliend"
                        :clearable="isClearAble ? true : false" v-model="kiyarash" :rules="[Validations]" :placeholder="placeHolder" :label="label" />
                </div>
                <div class="form--Button">
                    <button :disabled="isdisabled" class="form--Button-button" type="submit" :class="[`form--Button-button-${buttonStyle}`]">{{
                        buttonMassage }}</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { validation } from '~/utils/apis/validation/validation';
const kiyarash =ref('')
const isdisabled = ref(true)
interface KForm {
    type: String,
    fromStyle?: String,
    inputType?: String | '',
    isOutliend?: Boolean,
    isClearAble?: Boolean,
    inputCount?: Number,
    // validation?: void,
    // clickFunction?: void,
    SubmitFunction?: void,
    buttonStyle?: String | '',
    buttonMassage?: String
    placeHolder?: String,
    label?: string,
}
defineProps<KForm>()

function Validations(val:any) {
    return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
           if (!resolve(val && val.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g)|| 'your email is not valid.')) {
            if (val.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g)) {
                isdisabled.value = false
            }
           }
           }, 1000);
        })
}
</script>

<style lang="scss" scoped>
.form {
    position: relative;
    transition: all 0.5s ease-in-out;
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    &--default {
        background-color: #fafafa;
    }

    &--container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 35px 15px;
        padding-top: 20px;

        &-one{
            display: grid;
            grid-template-columns: auto;
        }

        &-two {
            display: grid;
            grid-template-columns: auto auto;
        }

        &-three {
            display: grid;
            grid-template-columns: auto auto auto;
        }

        &-four {
            display: grid;
            grid-template-columns: auto auto auto auto;
        }

        position: relative;

    }

    &--inputs {
        position: relative;
        width: 100%;
        height: 100%;
        &-input {
            width: 500px;
        }
    }
    &--Button{
        width: 100%;
        position: relative;
        height: 100%;
        font-size: 18px;
        &-button{
            width: 100%;
            border: none;
            outline: none;
            border-radius: 3px;
            background-color: blue;
            color: #fafafa;
            height: 40px;
            cursor: pointer;
            &:disabled{
                background-color: grey;
                cursor: none;
            }
        }
    }
}
</style>