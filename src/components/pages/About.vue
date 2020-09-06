<template>
    <div class="about block-center">
        <h1 class="about-title">About</h1>
        <div class="about-detail">
            <div class="about-base">
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
            <div class="about-profile">
                    <h2>Profile</h2>
                    <p>gawip:jgggggggggggggggggggggggggggggggggggggggggg</p>
                
            </div>
        </div>
    
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
</template>


<style lang="scss" scoped>
    .about {

        &-title {
            text-align: center;
        }

        &-detail {
            display: flex;
            justify-content: space-between;
            text-align: center;

        }

        &-icon {
            display: flex;
            justify-content: space-between;

        }

    }
    .text-center {
        text-align: center;
    }

    .icon {
        width: 40px;
        height: 40px;

    }

    .icon-img {
        width: 100%;
        height: 100%;
    }

</style>

