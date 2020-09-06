<template>
    <div class="about block-center">
        <h1 class="about-title">About</h1>
        <div class="about-detail">
            <div class="about-detail-base">
                <img src="../../assets/about/Daiki.jpg" alt="" class="about-img">
                <div class="about-name">
                    <h2 class="text-center">Name</h2>
                    <h3>Daiki Hirose</h3>
                    <p></p>
               
                </div>
                <div class="about-school">
                    <h2 class="text-center">School </h2>
                    <h3>AOYAMA GAKUIN UNIVERSITY SSI</h3>
                    <p></p>
                </div>
                <div class="about-birthday">
                    <h2 class="text-center">Birthday</h2>
                    <h3>1997-5-30</h3>
                </div>
            </div>
            <div class="about-detail-profile">
                    <h2>Profile</h2>
                    <p>現在大学３年生です。エンジニアとして日々勉強し、活動をしております。
                    <p>去年は１年間休学しており、ベトナムとフィリピンに長期間滞在しておりました。</p>
                    <p>多趣味だとは思うのですが、最近の休日はほとんどカフェにいます。</p>
                <div class="about-icon">
                    <a href="https://twitter.com/Daiki72730520" class="icon">
                        <img src="../../assets/about/twitter.png" alt="" class="icon-img">
                    </a>
                    <a href="https://github.com/speeed131" class="icon">
                        <img src="../../assets/about/github.png" alt="" class="icon-img">
                    </a>
                    <a href="https://qiita.com/sd131" class="icon">
                        <img src="../../assets/about/qiita.png" alt="" class="icon-img">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .about {

        &-title {
            text-align: center;

        }

        &-detail {
            display: flex;
            justify-content: space-around;
            // align-items: center;
            text-align: center;

            &-base {
                flex-basis: 60%;
                line-height: 3rem;

            }

            &-profile {
                // letter-spacing: 0.1rem;
                // flex-basis: 40%;
                font-size: 1.6rem;
                line-height: 3rem;

            }
        }

        &-img {
            width: 60%;
            height: auto;
            object-fit: cover;

            }

        &-icon {
            display: flex;
            justify-content: center;

        }

    }
    .text-center {
        text-align: center;

    }

    .icon {
        width: 40px;
        height: 40px;
        margin: 0 5% 0;


    }

    .icon-img {
        width: 100%;
        height: 100%;

    }

</style>

