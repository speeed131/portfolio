<template>
    <div class="main-block">
        <div class="main-text">
            <vue-typer
            :text="message"
            :repeat = '0'
            type-delay = '120'
            caret-animation = 'smooth'
            ></vue-typer>
        </div>

        <vue-particles
        color="#dedede" class="main-particles"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#ffffff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        ></vue-particles>
    </div>
</template>


<script>
export default {
    data() {
        return {
            message: "Hello!\nI'm Daiki Hirose,\nThank you for visiting."
        }
    }
}
</script>


<style lang="scss" scoped>
    .main {

        &-block {
        position: relative;
        background-image: url('../../assets/home/space1-1.jpg');
        background-size: cover;
        object-fit: cover;
        height: 100%;

        }

        &-text {
            width: 100%;
            font-size: 3.6rem;
            color: #ffffff;
            position: absolute;
            text-align: center;
            top: 30%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);

        }

        &-particles {
            height: 100%;

        }
    }
</style>