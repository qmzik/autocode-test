<template>
    <div class="home">
        <NavMenu></NavMenu>
        <main class="home__main">
            <CreateReport></CreateReport>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        NavMenu: () => import('@/components/NavMenu.vue'),
        CreateReport: () => import('@/components/CreateReport.vue'),
    },
})
export default class Home extends Vue {

}
</script>

<style scoped lang="scss">
.home {
    display: flex;
}

.home__main {
    width: 100%;
    padding: 25px 15px;
    background-color: $dark-white;
}
</style>
