<template>
  <div id="app">
    <header class="header">
      <Header></Header>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <Footer></Footer>
    </footer>
  </div>
</template>


<script>
//reset css
import 'ress'
//global css

import Header  from './components/modules/Header.vue'
import Footer  from './components/modules/Footer.vue'


export default {
  components: {
    Header,
    Footer,
  }
}
</script>


<style lang="scss" scoped>
 //#--ここで全体のレイアウトを作る--#

  #app {
    font-size: 2rem;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh; 
    display: grid;
    grid-template:
    "header" 150px
    "main"   1fr
    "footer" 300px
    ;

  }
  .header {
    grid-area: header;
    background-color: rgba(254, 215, 215, 1);
  }
  .main {
    grid-area: main;
    background-color: rgba(215, 215, 254, 1);
  }
  .footer {
    grid-area: footer;
    background-color: rgba(219, 254, 215, 1);
  }
  // @media screen and (max-width: 1000px) {
  //   #app {
  //     grid-template:
  //     "header" 150px
  //     "main  " 1fr
  //     "footer" 300px;
  //   }
  // }
  



</style>>



