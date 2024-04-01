<template>
    <div class="conatiner">
        <div class="row">
            <h6 class="uploader__title">upload</h6>
            <!-- <div class="uploader__warpper"> -->
            <ul class="uploader__list">
                <li class="uploader__list__item">
                    <img src="/assets/images/png-file-image-7.png" alt="">
                    <div class="uploader__item__details">
                        <div class="details__wrraper">
                            <span class="uploader__item__name">hello.png</span>
                            <span class="uploader__item__size">2MB</span>
                        </div>
                        <div class="uploader__item__progress">
                            <div class="progress__status"></div>
                        </div>
                    </div>
                    <div class="uploader__item__icon">
                        <Icon name="mdi:check"></Icon>
                    </div>
                </li>
                <li class="uploader__list__item">
                    <img src="/assets/images/png-file-image-7.png" alt="">
                    <div class="uploader__item__details">
                        <div class="details__wrraper">
                            <span class="uploader__item__name">hello.png</span>
                            <span class="uploader__item__size">2MB</span>
                        </div>
                        <div class="uploader__item__progress">
                            <div class="progress__status"></div>
                        </div>
                    </div>
                    <div class="uploader__item__icon">
                        <Icon name="mdi:check"></Icon>
                    </div>
                </li>
                <li class="uploader__list__item">
                    <img src="/assets/images/png-file-image-7.png" alt="">
                    <div class="uploader__item__details">
                        <div class="details__wrraper">
                            <span class="uploader__item__name">hello.png</span>
                            <span class="uploader__item__size">2MB</span>
                        </div>
                        <div class="uploader__item__progress">
                            <div class="progress__status"></div>
                        </div>
                    </div>
                    <div class="uploader__item__icon">
                        <Icon name="mdi:check"></Icon>
                    </div>
                </li>
            </ul>
            <input type="file" id="file_uploader" hidden>
            <label for="file_uploader" class="label">Darg Files</label>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.conatiner {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.row {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    background-color: #F9FAFB;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba($color: #000000, $alpha: 0.3);
    padding: 1rem;
}

.uploader__title {
    font-size: 2rem;
    color: #22C55E;
    font-weight: 600;
    width: 100%;
    height: 10px;
}

.uploader__list {
    position: relative;
    top: 5%;
    margin: 1rem;
    width: 100%;
    height: 70%;
    overflow: hidden;
    overflow-y: auto;
}

.uploader__list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    img {
        width: 50px;
        height: 50px;
    }
}

.uploader__item__details {
    width: 80%;
}

.details__wrraper {
    display: flex;
    justify-content: space-between;
}

.uploader__item__name {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.uploader__item__size {
    margin-top: 0.5rem;
}

.uploader__item__progress {
    width: 100%;
    background-color: #E5E7EB;
    height: 5px;
    border-radius: 10px;
}

.progress__status {
    width: 50%;
    background: linear-gradient(to right, #22C55E 50%, #15803D);
    height: inherit;
    border-radius: 10px;
}

.label {
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    cursor: pointer;
    border-radius: 10px;
    border: 3px dashed gray;
    padding: 2rem 0;
    width: 100%;
    font-size: 1.3rem;
    text-align: center;
}
</style>