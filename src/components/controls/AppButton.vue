<template>
    <button class="btn" :class="{ 'btn_disabled': disabled }" @click="onClick">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppButton extends Vue {
    @Prop() private click!: (...args: any[]) => void;
    @Prop({ default: false }) private disabled!: boolean;

    private onClick(e: Event): void {
        e.preventDefault();
        if (!this.disabled) {
            this.click();
        }
    }

}
</script>

<style scoped lang="scss">
.btn {
    color: $black;
    background-color: $yellow;
    border-radius: 50px;
    cursor: pointer;
    border: none;
    font-size: 18px;
    font-weight: bold;
}

.btn:focus {
    outline: none;
}

.btn_disabled {
    opacity: .5;
    cursor: not-allowed;
}
</style>
