<template>
    <div class="works block-center">
        <h1 class="works-title">Works</h1>
        <div class="works-section">
            <div class="card">
                <img src="" alt="" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">This site</h2>
                    <p class="card-describe">このポートフォリオサイト</p>
                    <p class="card-language">Language: JavaScript(Vue.js), Sass</p>
                    <a href="" class="card-link">Github</a>
                </div>
            </div>
            <div class="card">
                <img src="../../assets/works/talx_world.png" alt="" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">Talx World</h2>
                    <p class="card-describe">言語交換をし学習する目的の掲示板</p>
                    <p class="card-language">Language: PHP(Laravel), MySQL</p>
                    <a href="" class="card-link">App</a>
                    <a href="" class="card-link">Github</a>
                </div>
            </div>
            <div class="card">
                <img src="../../assets/works/login.jpg" alt="" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">自動ログインのプログラム</h2>
                    <p class="card-describe">PythonのライブラリSeleniumを使い作ったもの</p>
                    <p class="card-language">Language: Python</p>
                    <a href="" class="card-link"></a>
                </div>
            </div>
            <div class="card">
                <img src="../../assets/works/trade.jpg" alt="" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">仮想通貨自動売買Bot</h2>
                    <p class="card-describe">取引所のAPIを使用して作ったもの</p>
                    <p class="card-language">Language: Python</p>
                    <a href="" class="card-link"></a>
                </div>
            </div>
            <div class="card">
                <img src="../../assets/works/top_cocktail.png" alt="" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">Cocktail LP</h2>
                    <p class="card-describe">カクテル紹介のLP １番最初の成果物</p>
                    <p class="card-language">Language: HTML, CSS</p>
                    <a href="" class="card-link"></a>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .works {
        text-align: center;

        &-section {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: center;
        }
    }


    .card {
        background-color: #f5f5f5;
        width: 450px;
        height: 500px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 3px 6px #ccc;
        margin: 30px 0;

        &-img {
            width: 100%;
            height: 70%;
            object-fit: cover;
            filter: grayscale(100%);

            &:hover {
                filter: grayscale(0);
            }
        }
    }

</style>