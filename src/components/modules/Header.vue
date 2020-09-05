<template>
    <div class="header-inner">
        <h1 class="header-title">
            <a href="/">
                Daiki's Profile
            </a>
        </h1>
        <nav class="header-nav">
            <ul>
                <li>
                    <router-link to="/" active-class="link--active" exact>Home</router-link>
                </li>
                <li>
                    <router-link to="/about" active-class="link--active" exact>About</router-link>
                </li>
                <li>
                    <router-link to="/skills" exact active-class="link--active">Skills</router-link>
                </li>
                <li>
                    <router-link to="/works" exact active-class="link--active">Works</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>



<script>

</script>

<style lang="scss" scoped>
    .header-inner{
        width: 100%;
        height: 100%;
        display: flex;
        padding: 0 5% 0;
        align-items: center;
        justify-content: space-between;

        a {
            color: white;
            text-decoration: none;

        }
    }

    .header-title {
        // width: 20%;

    }

    .header-nav {
        

        > ul {
            display: flex;
            list-style: none;
            align-items: center;


            > li {
                font-size: 3rem;
                margin: 0 15px 0;
            }
        }

    }

    .link--active {
        font-size: 3.6rem;

    }

</style>



