<template>
    <ul class="report grid list_default">
        <li class="report__item report__id">{{ id }}</li>
        <li class="report__item report__typeId">{{ typeId }}</li>
        <li class="report__item report__date">{{ stringDate }}</li>
        <li class="report__item report__status"><ReportStatus :status="status"></ReportStatus></li>
        <li class="report__item report__trash"><i class="icon-trash" @click="removeReport"></i></li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ReportModule } from '../store/modules/report';

@Component({
    components: {
        ReportStatus: () => import('@/components/ReportStatus.vue'),
    },
})
export default class Report extends Vue {
    @Prop() private id!: string;
    @Prop() private typeId!: string;
    @Prop() private date!: number;
    @Prop() private status!: string;

    private get stringDate(): string {
        return new Date(this.date).toLocaleString('ru-RU');
    }

    private removeReport(): void {
        ReportModule.removeReport(this.id);
    }
}
</script>

<style scoped lang="scss">
@import '../scss/commonStyles.scss';

.report {
    font-size: 14px;
    padding: 15px 0;
    align-items: center;
    border-top: 1px solid $light-grey;
}

.report__id {
    margin-left: 15px;
}

.icon-trash {
    font-size: 20px;
    cursor: pointer;
}

@media only screen and (max-width: $tablet) {
    .report {
        grid-template-columns: 4fr repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .report__date {
        margin-left: 15px;
        grid-row: 2 / 3;
    }

    .report__status {
        grid-row: 2 / 3;
    }
}
</style>
