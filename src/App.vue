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

//component
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');



  #app {
    // TODO: fontの意思決定を最後に行う。
    font-family: 'Montserrat', sans-serif;
    // font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Raleway', sans-serif;
    background-color: #f5f5f5;
    color: #000000;
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
    /100%;

  }

  .header {
    grid-area: header;
    // background-color: #333333;
    background-color: #1a1a1a;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .main {
    grid-area: main;
    // background-color: rgba(215, 215, 254, 1);

  }

  .footer {
    grid-area: footer;
    background-color: #1a1a1a;
  }


  //全体に使う共通のクラスは以下に配置する
  .block-center {
      margin: 0 15%;
  }

  .top-margin {
    margin-top: 30px;
  }

  .bottom-margin {
    margin-bottom: 5%;
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



