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

//#--Fontのインポート--#
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap');



  #app {
    // TODO: fontの意思決定を最後に行う。
    font-family: 'Montserrat', sans-serif;
    // font-family: 'Noto Sans JP', sans-serif;

    font-style: italic;
    font-size: 1rem;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh; 
    display: grid;
    grid-template:
    "header" 60px
    "main"   auto
    "footer" 20px
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



