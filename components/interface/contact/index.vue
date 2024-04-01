<template>
    <div class="contact__container">
        <div class="contact__row">
            <div class="contact__row4">
                <div class="contact__tab">
                    <Icon name="mdi:map-marker" size="40" bg-color="green" color="#22C55E" />
                    <h6 class="contact__tab__title">location</h6>
                    <p class="contact__tab__content">
                        Lorem ipsum dolor
                        <br />
                        sit amet consectetur.
                    </p>
                </div>
                <div class="contact__tab">
                    <Icon name="mdi:phone" size="40" bg-color="green" color="#22C55E" />
                    <h6 class="contact__tab__title">phone</h6>
                    <p class="contact__tab__content">
                        Lorem ipsum dolor
                        <br />
                        sit amet consectetur.
                    </p>
                </div>
                <div class="contact__tab">
                    <Icon name="mdi:email" size="40" bg-color="green" color="#22C55E" />
                    <h6 class="contact__tab__title">email</h6>
                    <p class="contact__tab__content">
                        Lorem ipsum dolor
                        <br />
                        sit amet consectetur.
                    </p>
                </div>
            </div>
            <div class="divider"></div>
            <form class="contact__row8">
                <h3 class="contact__content__title">send us a message</h3>
                <p class="contact__content__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                    libero officia, cum quaerat velit animi illo omnis?
                </p>
                <div class="contact__field__wrraper">
                    <input type="text" class="contact__field__input" placeholder="enter your name" />
                    <input type="email" class="contact__field__input" placeholder="enter your email" />
                    <textarea class="contact__field__textarea" rows="4" placeholder="enter your message"></textarea>
                </div>
                <button class="contact__content__btn">send</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
/* container */
.contact__container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact__row {
    width: 100%;
    max-width: 1200px;
    max-height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #F9FAFB;
    padding: 1rem 2.5rem;

    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        max-width: 100%;
        padding: 1rem;
        max-height: 100%;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        max-width: 100%;
        padding-top: 14rem;
        max-height: 1500px;
    }
}

.contact__row4 {
    flex-grow: 32%;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    text-align: center;

    @media screen and (max-width: 1200px) {
        display: flex;
        flex-grow: 100%;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
}

/* tab */
.contact__tab {
    padding-right: 1rem;

    @media screen and (max-width: 1200px) {
        padding: 0;
    }
}

.contact__tab__title {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0 !important;
}

.contact__tab__content {
    width: 14rem;
    text-align: center;
    margin: 0 !important;
}

/* divider */

.divider {
    border: 1px solid #22C55E;
    height: 20rem;
    margin: 3rem 0;

    @media screen and (max-width: 1200px) {
        display: none;
    }
}


/* content */

.contact__row8 {
    flex-grow: 68%;
    padding: 1rem 1.5rem 0;

    @media screen and (max-width: 1200px) {
        flex-grow: 120%;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
    }
}

.contact__content__title {
    font-weight: 600;
    font-size: 2rem;
    white-space: warp;
}

.contact__content__description {
    width: 80%;
}

.contact__field__wrraper {
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
}

.contact__field__input {
    border: none;
    outline: none;
    background-color: #E4E4E7;
    border-radius: 2px;
    padding: 0.7rem 0.5rem;

    &::placeholder {
        color: #0C0A09;
    }
}

.contact__field__textarea {
    background-color: #E4E4E7;
    border-radius: 2px;
    padding: 0.4rem 0.5rem;
    resize: none;

    &::placeholder {
        color: #0C0A09;
    }
}

.contact__content__btn {
    margin-top: 1.4rem;
    background-color: #22C55E;
    padding: 0.1rem 2rem;
    font-size: 1.2rem;
    border-radius: 3px;
    color: #DCFCE7;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        background-color: #16A34A;
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        padding: 0.3rem 1rem;
    }
}
</style>