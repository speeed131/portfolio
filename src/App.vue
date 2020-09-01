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


<style lang="scss">
 //#--ここで全体のスタイルを定義--#
@import './scss/global';


  #app {
    font-size: 1rem;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh; 
    display: grid;
    grid-template:
    "header" auto
    "main"   100vh
    "footer" auto
    ;
  }
  .header {
    grid-area: header;
    background-color: black;
  }
  
  .main {
    grid-area: main;
    // background-color: rgba(215, 215, 254, 1);
  }
  .footer {
    grid-area: footer;
    background-color: rgba(219, 254, 215, 1);
  }


  //全体に使う共通のクラスは以下に配置する
  .block-center {
      margin: 0 15%;
  }

  // @media screen and (max-width: 1000px) {
  //   #app {
  //     grid-template:
  //     "header" 150px
  //     "main  " 1fr
  //     "footer" 300px;
  //   }
  // }
  
    .vue-typer .custom.char{
        color: aliceblue;
    }



</style>>



