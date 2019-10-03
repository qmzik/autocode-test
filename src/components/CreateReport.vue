<template>
    <section class="section">
        <h2 class="section__title">Создать отчёт</h2>
        <form class="createReport__form">
            <AppInput v-model="id" label="Идентификатор" placeholder="A007AA197" size="small"></AppInput>
            <AppSelect v-model="typeId" label="Тип идентификатора" :options="reportIdTypes" size="small"></AppSelect>
            <AppButton :click="addReport" class="form__btn" :disabled="!isIdValid">Создать</AppButton>
        </form>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import reportIdTypes from '@/consts/reportIdType';
import { ReportModule } from '@/store/modules/report';
import { chooseStatus } from '../utils/reportUtil';
import { VIN_REGEXP, GRZ_REGEXP, BODY_REGEXP } from '../consts/regExps';
import Notify from '@/components/Notify/notify';

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

    private get isIdValid(): boolean {
        if (this.typeId === 'VIN') {
            return VIN_REGEXP.test(this.id);
        }

        if (this.typeId === 'ГРЗ') {
            return GRZ_REGEXP.test(this.id);
        }

        if (this.typeId === 'BODY') {
            return BODY_REGEXP.test(this.id);
        }

        return true;
    }

    private addReport(): void {
        const { id, typeId } = this;
        const founded = ReportModule.reports.find((item) => item.id === id);
        if (!founded) {
            const date = +new Date();
            const status = chooseStatus();
            Notify({ msg: 'Отчёт добавлен' });
            ReportModule.addReport({ id, typeId, date, status });
        } else {
            Notify({ msg: 'Такой индентификатор уже добавлен' });
        }
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

@media only screen and (max-width: $tablet) {
    .createReport__form {
        flex-direction: column;
        align-items: flex-start;
    }

    .createReport__form > *:not(:first-child) {
        margin-left: 0;
        margin-top: 12px;
    }
}
</style>
