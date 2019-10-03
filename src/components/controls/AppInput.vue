<template>
    <label class="appInput flex_column">
        <span class="appInput__label label"
              :class="{ 'label_small': size === 'small', 'label_medium': size === 'medium' }"
        >{{ label }}</span>
        <input class="input"
               :type="type"
               :placeholder="placeholder"
               v-model.trim="input"
               @input="handleInput"
               :class="{ 'input_small': size === 'small', 'input_medium': size === 'medium' }"
        >
    </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import InputMixin from './InputMixin.vue';
import { mixins } from 'vue-class-component';

@Component
export default class AppInput extends mixins(InputMixin) {
    @Prop({ default: 'text' }) private type!: string;
}
</script>

<style scoped lang="scss">

</style>
