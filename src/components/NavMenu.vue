<template>
    <nav class="navMenu">
        <h1 class="navMenu__title">Demo application</h1>
        <NavMenuButton class="navMenu__btn" routeName="Home" icon="list">Список отчётов</NavMenuButton>
        <NavMenuButton @click.native="logout" class="navMenu__btn" routeName="Login" icon="power">Выход</NavMenuButton>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AuthModule } from '../store/modules/auth';

@Component({
    components: {
        NavMenuButton: () => import('@/components/controls/NavMenuButton.vue'),
    },
})
export default class NavMenu extends Vue {
    private logout(): void {
        AuthModule.logout();
    }
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

@media only screen and (max-width: $tablet) {
    .navMenu__title {
        display: none;
    }
    .navMenu {
        width: 35px;
    }
}
</style>
