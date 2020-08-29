<template>
    <div class="main-text">
        <vue-typer :text="message">
        </vue-typer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "         Hello!\n       I'm Daiki.\nThank you for visiting"
        }
    }
}
</script>




<style lang="scss" scoped>
    .main-text{
        height: inherit;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>