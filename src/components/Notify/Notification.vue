<template>
    <transition name="slide-fade" @after-leave="doDestroy">
        <div v-if="isShow"
             @click="handleClose"
             class="notification"
        >
            <p class="notification__msg">{{ msg }}</p>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Notification extends Vue {
    private msg: string = '';
    private duration: number = 4000;
    private isShow: boolean = false;
    private timer: any = null;

    private startTimer(): void {
        this.timer = setTimeout(() => {
            this.clearTimer();
            this.handleClose();
        }, this.duration);
    }

    private handleClose(): void {
        this.isShow = false;
    }

    private clearTimer() {
        clearTimeout(this.timer);
    }

    private mounted() {
        this.isShow = true;
        this.startTimer();
    }

    private doDestroy() {
        this.$destroy();
    }
}
</script>

<style scoped lang="scss">
.notification {
    position: fixed;
    top: 40px;
    right: 40px;
    background-color: $blue;
    color: $white;
    width: 200px;
    display: flex;
    padding: 13px 15px;
    align-items: center;
    opacity: 1;
    border-radius: 8px;
    z-index: 999;
    text-align: left;
    user-select: none;
}

.notification__msg {
    margin: 0;
    font-size: 14px;
}

.icon {
    margin-right: 15px;
    font-size: 18px;
}

.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>