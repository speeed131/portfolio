<template>
    <div class="header-inner">
        <h1 class="header-title">
            <a href="/">
                Daiki's Profile
            </a>
        </h1>
        <div class="headerPC-nav">
            <Nav></Nav>
        </div>
    </div>
</template>



<script>
import Nav  from './Nav.vue'

export default {
  components: {
    Nav,
  }
}

</script>

<style lang="scss" scoped>

    .header {

        &-inner{
            width: 100%;
            height: 100%;
            display: flex;
            padding: 0 5% 0;
            align-items: center;
            justify-content: space-between;

            a {
                color: #ffffff;
                text-decoration: none;
            }
        }
    }
    
    @media screen and (max-width: 768px) {
        .header-title {
            margin: auto;
        }
        .headerPC-nav {
            display: none;
        }
    }

</style>



