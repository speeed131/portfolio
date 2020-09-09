<template>
    <div>
        <nav class="nav">
            <ul>
                <li>
                    <router-link to="/" active-class="link--active" exact>
                        <font-awesome-icon icon="home" class="nav-icon"/>
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/about" active-class="link--active" exact>
                        <font-awesome-icon icon="user-circle" class="nav-icon"/>
                        About
                    </router-link>
                </li>
                <li>
                    <router-link to="/skills" exact active-class="link--active">
                        <font-awesome-icon icon="code" class="nav-icon"/>
                        Skills
                    </router-link>
                </li>
                <li>
                    <router-link to="/works" exact active-class="link--active">
                        <font-awesome-icon icon="archive" class="nav-icon"/>
                        Works
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

</script>


<style lang="scss">
    .nav {

        &-icon {
            display: none;
        }

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
                    font-size: 1rem;
                }
            }

            &-icon {
                display: inline-block;
                font-size: 3rem;
            }
        }

        .link--active {
                font-size: 2em;
        }
    }

</style>