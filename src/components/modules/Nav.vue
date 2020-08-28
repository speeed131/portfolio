<template>
    <nav class="nav">
        <router-link to="/" active-class="link--active" exact class="nav__home">Home</router-link>
        <transition name="fade" mode="out-in">
            <router-link to="/about" active-class="link--active" exact>About</router-link>
        </transition>
        
        <router-link to="/skills">Skills</router-link>
        <router-link to="/works">Works</router-link>
        <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script>

</script>

<style lang="scss">
    .nav{
        margin-right: 10px;

        &__home{
            font-size: 30px;
        }
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 0.5s;
    }
    .link--active{
        font-size:20px;
    }
</style>

