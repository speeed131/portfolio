<template>
    <div class="header-inner">
        <h1 class="header-title">
            <a href="/">
                Daiki's Profile
            </a>
        </h1>
        <Nav></Nav>
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

</style>



