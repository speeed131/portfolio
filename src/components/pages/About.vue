<template>
    <div class="about block-center top-margin bottom-margin">
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
                <div class="about-detail-profileText">
                    <h2 class="about-detail-profileTitle">Profile</h2>
                    <p>神奈川県横浜市出身。現在大学３年生です。
                    </p>
                    <p>エンジニアとして日々勉強し、活動中です</p>
                    <p>去年は１年間休学しており、ベトナムとフィリピンに長期間滞在していました。</p>
                    <p>趣味は幅広いのですが、最近の休日はカフェで過ごしていることがほとんどです。</p>
                </div>
                <div class="about-link">
                    <h2 class="about-linkTitle">Link</h2>
                    <div class="about-linkIcon">
                        <a href="https://twitter.com/Daiki72730520" class="icon" target="_blank" rel="noopener noreferrer">
                            <img src="../../assets/about/twitter.png" alt="" class="icon-img">
                        </a>
                        <a href="https://github.com/speeed131" class="icon" target="_blank" rel="noopener noreferrer">
                            <img src="../../assets/about/github.png" alt="" class="icon-img">
                        </a>
                        <a href="https://qiita.com/sd131" class="icon" target="_blank" rel="noopener noreferrer">
                            <img src="../../assets/about/qiita.png" alt="" class="icon-img">
                        </a>
                    </div>
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
            text-align: center;
            margin-top: 5%;

            &-base {
                flex-basis: 60%;
                line-height: 3rem;
                

            }

            &-profile {
                font-size: 1.6rem;
                line-height: 3rem;
                display: flex;
                flex-direction: column;
                

                &Title {
                    padding-bottom: 5%;
                }

                &Text {
                    flex-basis: 70%;
                    padding: 0 5% 0;
                }
            }

        }


        &-img {
            width: 60%;
            height: auto;
            object-fit: cover;

            }
        &-link {

            &Title {
                margin-bottom: 5%;
            }

            &Icon {
                display: flex;
                justify-content: center;

            }
        }

    }
    .text-center {
        text-align: center;

    }

    .icon {
        width: 40px;
        height: 40px;
        margin: 0 5% 0;
        
        &-img {
            width: 100%;
            height: 100%;

            &:hover{
                transform:scale(1.2,1.2);
                transition: 0.2s all;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .about {

            &-img {
                width: 100%;
            }

            &-detail {
                flex-wrap: wrap;

                &-profile {

                    &Title {
                        padding-top: 5%;
                        padding-bottom: 0;
                    }
                }
            }

            &-link {
                margin-top: 5%;
            }
        }
    }


</style>

