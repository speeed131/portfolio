<template>
    <div class="skills block-center">
        <h1 class="skills-title top-margin">Skills</h1>
        <div class="skills-section">
            <div class="skills-block">
                <img src="../../assets/skills/html-5.svg" alt="">
                <h2 class="skills-block-title">HTML</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/css.svg" alt="">
                <h2 class="skills-block-title">CSS</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/sass.svg" alt="">
                <h2 class="skills-block-title">Sass</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/javascript.svg" alt="">
                <h2 class="skills-block-title">JavaScript</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/vue.svg" alt="">
                <h2 class="skills-block-title">Vue.js</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/php.svg" alt="">
                <h2 class="skills-block-title">PHP</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/laravel-1.svg" alt="">
                <h2 class="skills-block-title">Laravel</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/python-5.svg" alt="">
                <h2 class="skills-block-title">Python</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/aws-2.svg" alt="">
                <h2 class="skills-block-title">AWS</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/logo.svg" alt="">
                <h2 class="skills-block-title">Github</h2>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .skills {
        &-title {
            text-align: center;

        }

        &-section {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            text-align: center;

        }

        &-block {
            padding: 50px 50px;

            &-title{
                padding-top: 15px;

            }
        }
    }

    img {
        width: 150px;
        height: 150px;

    }
</style>