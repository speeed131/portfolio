<template>
    <div class="about block-center top-margin bottom-margin">
        <h1 class="about-title">About</h1>
        <div class="about-detail">
            <div class="about-detail-base">
                <img src="../../assets/about/Daiki.jpg" alt="" class="about-img">
                <div class="about-name padding-bottom">
                    <h2>Name</h2>
                    <p>Daiki Hirose</p>
                    <p></p>
                </div>
                <div class="about-school padding-bottom">
                    <h2>School </h2>
                    <p>AOYAMA GAKUIN UNIVERSITY SSI</p>
                </div>
                <div class="about-birthday padding-bottom">
                    <h2>Birthday</h2>
                    <p>1997-5-30</p>
                </div>
            </div>
            <div class="about-detail-profile">
                <div class="about-detail-profileText padding-bottom">
                    <h2 class="about-detail-profileTitle">Profile</h2>
                    <p>
                        1997年生まれ。神奈川県出身。
                    </p>
                    <p>
                        経営学や経済学を学びたいと思い、文系で大学に入る。
                        しかし、2019年2月のフィリピンへのIT留学をきっかけに、プロダクトとして成果物が作れるエンジニアに興味が湧く。休学を決意し、2019年6月ベトナムでのプログラミング合宿を通し、初学者に向けてメンター業務を行う。その後、「終活ねっと」 にて、Web開発業務に約半年間、主にフロントエンドエンジニアとして携わる。そして、直近の半年間はスタートアップの会社でフルスタックに開発業務に携わる。
                    </p>
                    <p>2022年大学卒業予定。</p>
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
        background-color: #FFFFFE;
        padding: 1%;

        &-title {
            text-align: center;

        }

        &-detail {
            text-align: center;
            margin-top: 3%;

            &-base {
                line-height: 3rem;
            }

            &-profile {
                font-size: 1.6rem;
                line-height: 3rem;
                display: flex;
                width: 100%;
                flex-direction: column;

                &Title {
                    padding-bottom: 1%;
                }

                &Text {
                    flex-basis: 70%;
                    padding: 0 15% 0;
                }
            }

        }


        &-img {
            width: 400px;
            height: auto;
            object-fit: cover;

            }
        &-link {

            &Title {
                margin-bottom: 3%;
            }

            &Icon {
                display: flex;
                justify-content: center;

            }
        }

    }
    .padding-bottom {
        padding-bottom: 1%;
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

    @media screen and (max-width: 768px) {
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

