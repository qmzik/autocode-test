<template>
    <div class="reportStatus" :class="status.toLowerCase()">
        {{ status }}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ReportStatus extends Vue {
    @Prop() private status!: string;
}
</script>

<style scoped lang="scss">
.reportStatus {
    width: 90px;
    height: 24px;
    border-radius: 100px;
    color: $white;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progress {
    background-color: $progress;
}

.error {
    background-color: $error;
}

.done {
    background-color: $done;
}
</style>
