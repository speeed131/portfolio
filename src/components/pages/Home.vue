<template>
    <div class="main-block">
        <div class="main-text">
            <vue-typer :text="message"></vue-typer>
        </div>
        <vue-particles color="#dedede"></vue-particles>


    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "         Hello!\n       I'm Daiki Hirose.\nThank you for visiting"
        }
    }
}
</script>



<style lang="scss" scoped>
    .main-block {
        position: relative;
        background-image: url('../../assets/pexels-alex-andrews-821644.jpg');
        background-size: cover;
        object-fit: cover;
        
    }

    .main-text {
        font-size: 2rem;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }

</style>