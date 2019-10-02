<template>
    <div class="home">
        <NavMenu></NavMenu>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        NavMenu: () => import('@/components/NavMenu.vue'),
    },
})
export default class Home extends Vue {

}
</script>

<style scoped lang="scss">
.home {
    
}
</style>
