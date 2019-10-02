<template>
    <div @click="changeRoute" class="navMenuButton" :class="{ 'navMenuButton_active': isSelected }">
        <span><slot></slot></span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavMenuButton extends Vue {
    @Prop({ default: '' }) private routeName!: string;

    private get isSelected(): boolean {
        // @ts-ignore
        return this.$router.history.current.name === this.routeName;
    }

    private changeRoute(): void {
        this.$router.push({ name: this.routeName });
    }
}
</script>

<style scoped lang="scss">
.navMenuButton {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: inherit;
    color: $white;
    height: 56px;
    padding-left: 30px;
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
}

.navMenuButton_active {
    background-color: $yellow;
    border-left: 3px solid $black;
    color: $black;
}
</style>
