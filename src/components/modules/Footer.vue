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
                margin-bottom: calc(50px + env(safe-area-inset-bottom));
            }
            &SP-nav {
                width: 100%;
                display: block;
                position: fixed;
                padding: 10px 0;;                
                bottom: 0;
                margin-bottom: env(safe-area-inset-bottom);
                background-color: #1a1a1a;
                align-items: center;
            }
        }
    }
</style>