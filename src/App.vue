<template>
    <router-view id="app"></router-view>
</template>

<style lang="scss">
@import '/fonts/IconFont/icon-font.css';

body, html {
    margin: 0;
    height: 100%;
    width: 100%;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    overflow: hidden;
}

@font-face {
    font-family: 'icon-font';
    font-weight: normal;
    font-style: normal;
    src: url('/fonts/IconFont/icon-font.woff') format('woff'),
}
</style>
