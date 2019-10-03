<template>
    <label class="flex_column">
        <span class="label" :class="{ 'label_small': size === 'small', 'label_medium': size === 'medium' }">
            {{ label }}
        </span>
        <select class="input"
                :class="{ 'input_small': size === 'small', 'input_medium': size === 'medium' }"
                v-model.trim="input"
        >
            <option v-for="opt in options" :key="opt" :value="opt" @click="handleInput">
                {{ opt }}
            </option>
        </select>
    </label>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import InputMixin from './InputMixin.vue';

@Component
export default class AppSelect extends mixins(InputMixin) {
    @Prop({ default: () => [] }) private options!: string[];

    private mounted(): void {
        this.input = this.options[0];
    }
}
</script>

<style scoped lang="scss">

</style>
