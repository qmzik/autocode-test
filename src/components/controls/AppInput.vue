<template>
    <label class="appInput">
        <span class="appInput__label label"
              :class="{ 'label_small': size === 'small', 'label_medium': size === 'medium' }"
        >{{ label }}</span>
        <input class="input"
               :type="type"
               :placeholder="placeholder"
               v-model.trim="input"
               @input="handleInput"
               :class="[size, { 'input_small': size === 'small', 'input_medium': size === 'medium' }]"
        >
    </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import InputMixin from './InputMixin.vue';
import { mixins } from 'vue-class-component';

@Component
export default class AppInput extends mixins(InputMixin) {
    @Prop({ default: 'medium' }) private size!: 'small' | 'medium';
    @Prop({ default: 'text' }) private type!: string;

    private handleInput(e: InputEvent): void {
        this.$emit('input', (e.target as HTMLInputElement).value);
    }
}
</script>

<style scoped lang="scss">
.appInput {
    display: flex;
    flex-direction: column;
}
</style>
