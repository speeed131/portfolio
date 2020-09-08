<template>
    <div class="footer">
        <p class="footer-text">©2020 Daiki Hirose</p>
        <div class="footerSP-nav">
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
    .footer {
        text-align: center;

        &-text {
        padding: 10px;
        color: white;
        }

        &SP-nav {
            display: none;
        }

    }


    @media screen and (max-width: 768px) {
        .footer {
            &-text {
                padding: 5px;
                margin-bottom: 30px;
            }
            &SP-nav {
                width: 100%;
                display: block;
                position: fixed;
                bottom: 0;
            }
        }
    }
</style>