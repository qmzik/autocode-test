<template>
    <section class="createReport">
        <h2 class="createReport__title">Создать отчёт</h2>
        <form class="createReport__form">
            <AppInput v-model="id" label="Идентификатор" placeholder="A007AA197" size="small"></AppInput>
            <AppSelect v-model="typeId" label="Тип идентификатора" :options="reportIdTypes" size="small"></AppSelect>
            <AppButton class="form__btn">Создать</AppButton>
        </form>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
        AppInput: () => import('@/components/controls/AppInput.vue'),
        AppSelect: () => import('@/components/controls/AppSelect.vue'),
        AppButton: () => import('@/components/controls/AppButton.vue'),
    },
})
export default class CreateReport extends Vue {
    private readonly reportIdTypes: string[] = ['ГРЗ', 'BODY', 'VIN'];

    private id: string = '';
    private typeId: string = this.reportIdTypes[0];
}
</script>

<style scoped lang="scss">
.createReport {
    padding: 23px 15px;
    border-radius: 8px;
    border: 1px solid $light-grey;
}

.createReport__title {
    font-size: 24px;
    margin: 0;
}

.createReport__form {
    margin-top: 21px;
    display: flex;
    align-items: flex-end;
}

.createReport__form > *:not(:first-child) {
    margin-left: 34px;
}

.form__btn {
    width: 169px;
    height: 40px;
}
</style>
