<template>
    <section class="section reportsTable">
        <h2 class="section__title reportsTable__title">Все отчёты</h2>
        <div class="reportsTable__table">
            <ul class="reportsTable__values list_default grid">
                <li>Индентификатор</li>
                <li>Тип индентификатора</li>
                <li>Дата</li>
                <li>Статус</li>
            </ul>
            <Report v-for="r in reports" :key="r.id"
                    :id="r.id"
                    :typeId="r.typeId"
                    :date="r.date"
                    :status="r.status"
            ></Report>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { chooseStatus } from '@/utils/reportUtil';
import { IReport } from '../store/types';
import { ReportModule } from '../store/modules/report';

@Component({
    components: {
        Report: () => import('@/components/Report.vue'),
    },
})
export default class ReportsTable extends Vue {
    private get reports(): IReport[] {
        return ReportModule.reports;
    }

    private mounted(): void {
        ReportModule.parseStore();
    }
}
</script>

<style scoped lang="scss">
@import '../scss/commonStyles.scss';

.reportsTable__values {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 12px;
}

.reportsTable {
    padding-left: 0;
    padding-right: 0;
}

.reportsTable__title,
.reportsTable__values {
    margin-left: 15px;
}

.reportsTable__title {
    margin-bottom: 19px;
}

.reportsTable__table {
    border-bottom: 1px solid $light-grey;
}

@media only screen and (max-width: $tablet) {
    .reportsTable__values {
        display: none;
    }
}
</style>
