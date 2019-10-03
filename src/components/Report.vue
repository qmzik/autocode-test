<template>
    <ul class="grid list_default">
        <li>{{ id }}</li>
        <li>{{ typeId }}</li>
        <li>{{ stringDate }}</li>
        <li>{{ status }}</li>
        <li><i class="icon-trash" @click="removeReport"></i></li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Report extends Vue {
    @Prop() private id!: string;
    @Prop() private typeId!: string;
    @Prop() private date!: number;
    @Prop() private status!: string;

    private get stringDate(): string {
        return new Date(this.date).toLocaleString('ru-RU');
    }
}
</script>

<style scoped lang="scss">
@import '../scss/commonStyles.scss';
</style>
