<template>
    <div class="works block-center top-margin bottom-margin">
        <h1 class="works-title">Works</h1>
        <div class="works-section">
            <div class="card">
                <img src="../../assets/works/portfolio2.png" alt="" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">This site</h2>
                    <p class="card-describe">このポートフォリオサイト</p>
                    <p class="card-language">Language: JavaScript(Vue.js), Sass</p>
                    <div class="card-content-link">
                        <a href="" class="link-github">Github</a>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="../../assets/works/talx_world.png" alt="" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">Talx World</h2>
                    <p class="card-describe">言語交換をし学習する目的の掲示板</p>
                    <p class="card-language">Language: PHP(Laravel), MySQL</p>
                    <div class="card-content-link">
                        <a href="" class="link-app">App</a>
                        <a href="" class="link-github">Github</a>
                    </div>
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

        &-content {
            margin-top: 15px;

            &-link {
                display: flex;
                justify-content: space-around;
                padding: 15px 10% 0;
                font-size: 1.4rem;

            }
        }
    }

    .link {
        &-github, &-app {
            border-radius: 5px;
            padding: 5px 10px;

            &:hover {
                transform:scale(1.2,1.2);
                transition: 0.2s all;
                }
        }

        &-github {
            border: 1px solid #1a1a1a;
        }

        &-app {
            border: 1px solid #00bfff;
            color: #00bfff;
        }
    }

    @media screen and (max-width: 1000px) {
        .card {
            height: 400px;

            &-img {
                height: 60%;
            }
        }
    }


</style>