<template>
    <section class="section">
        <h2 class="section__title">Создать отчёт</h2>
        <form class="createReport__form">
            <AppInput v-model="id" label="Идентификатор" placeholder="A007AA197" size="small"></AppInput>
            <AppSelect v-model="typeId" label="Тип идентификатора" :options="reportIdTypes" size="small"></AppSelect>
            <AppButton :click="addReport" class="form__btn">Создать</AppButton>
        </form>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import reportIdTypes from '@/consts/reportIdType';
import { ReportModule } from '@/store/modules/report';
import { chooseStatus } from '../utils/reportUtil';

@Component({
    components: {
        AppInput: () => import('@/components/controls/AppInput.vue'),
        AppSelect: () => import('@/components/controls/AppSelect.vue'),
        AppButton: () => import('@/components/controls/AppButton.vue'),
    },
})
export default class CreateReport extends Vue {
    private readonly reportIdTypes: string[] = reportIdTypes;

    private id: string = '';
    private typeId: string = this.reportIdTypes[0];

    private addReport(): void {
        const { id, typeId } = this;
        const date = +new Date();
        const status = chooseStatus();
        ReportModule.addReport({ id, typeId, date, status });
    }
}
</script>

<style scoped lang="scss">
@import '../scss/commonStyles.scss';

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
