<template>
    <div class="header-inner">
        <h1 class="header-title">Daiki's Profile</h1>
        <nav class="header-nav">
            <router-link to="/" active-class="link--active" exact>Home</router-link>
            <router-link to="/about" active-class="link--active" exact>About</router-link>
            <router-link to="/skills" exact active-class="link--active">Skills</router-link>
            <router-link to="/works" exact active-class="link--active">Works</router-link>
            <router-link to="/contact" exact active-class="link--active">Contact</router-link>
        </nav>
    </div>
</template>



<script>

</script>

<style lang="scss" scoped>
    .header-inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .header-title {
        width: 20%;
    }

    .header-nav {
        width: 20%;
        justify-content: space-between;
        display: inline-flex;
        align-items: center;
        flex-wrap: wrap;
        > a {
            
        }

    }
    .link--active {
        font-size: 2.5rem;
    }

</style>



