import { ref, onMounted, watch } from "vue";
export const validation = () => {
    const time = ref(1000)
    const massage = ref(false)
    function Email(val: any) {
        setTimeout(() => {
            val = (val && val.includes('@')) || false
                val = (val && val.match(/[0-9]/g)) || false
        }, time.value);
    }
    return { time, massage, Email }
}