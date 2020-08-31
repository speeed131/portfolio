<template>
    <div class="skills">
        <h1 class="skills-title">Skills</h1>
        <div class="skills-section">
            <div class="skills-block">
                <img src="../../assets/skills/html-5.svg" alt="">
                <h2>HTML</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/css.svg" alt="">
                <h2>CSS</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/javascript.svg" alt="">
                <h2>JavaScript</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/php.svg" alt="">
                <h2>PHP</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/laravel-1.svg" alt="">
                <h2>Laravel</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/python-5.svg" alt="">
                <h2>Python</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/aws-2.svg" alt="">
                <h2>AWS</h2>
            </div>
            <div class="skills-block">
                <img src="../../assets/skills/logo.svg" alt="">
                <h2>Github</h2>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .skills {
        
        &-section {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
    img {
        width: 50px;
    }
</style>