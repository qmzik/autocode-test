<template>
    <nav class="navMenu">
        <h1 class="navMenu__title">Demo application</h1>
        <NavMenuButton class="navMenu__btn" routeName="Home">Список отчётов</NavMenuButton>
        <NavMenuButton class="navMenu__btn" routeName="Login">Выход</NavMenuButton>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
        NavMenuButton: () => import('@/components/controls/NavMenuButton.vue'),
    },
})
export default class NavMenu extends Vue {

}
</script>

<style scoped lang="scss">
.navMenu {
    background-color: $blue;
    height: 100%;
    width: 215px;
    padding-top: 41px;
}

.navMenu__title {
    color: $white;
    font-size: 19px;
    text-align: center;
    margin: 0;
}

.navMenu__btn:first-of-type {
    margin-top: 63px;
}
</style>
