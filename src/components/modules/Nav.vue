<template>
    <div>
        <nav class="nav">
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


<style lang="scss">
    .nav {

        > ul {
            display: flex;
            list-style: none;
            align-items: center;

            > li {
                font-size: 3rem;
                margin: 0 15px 0;
                
                > a {
                    color: #ffffff;
                }
            }
        }
    }

    .link--active {
        font-size: 3.6rem;

    }


    @media screen and (max-width: 768px) {
        .nav {
            background-color: #1a1a1a;

            >ul {
                display: flex;
                
                > li {
                    flex: 1;
                }
            }
        }
    }

</style>