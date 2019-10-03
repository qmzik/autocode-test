<template>
    <ul class="report grid list_default">
        <li>{{ id }}</li>
        <li>{{ typeId }}</li>
        <li>{{ stringDate }}</li>
        <li><ReportStatus :status="status"></ReportStatus></li>
        <li><i class="icon-trash" @click="removeReport"></i></li>
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
}

.icon-trash {
    font-size: 20px;
    cursor: pointer;
}
</style>
