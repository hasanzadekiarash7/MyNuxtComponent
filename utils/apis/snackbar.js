import { createApp } from "vue";
import snackBars from "~/components/snackBars/snackBars.vue";
export default defineNuxtPlugin((nuxttApp) => {
    return {
        provide:{
            Notif: () => {
                const Kiyarash = document.createElement('div')
                Kiyarash.id = 'notification-container'
                document.body.appendChild(Kiyarash)
                const Notif = createApp(snackBars)
                Notif.mount(Kiyarash)
            }
    }
    }
});