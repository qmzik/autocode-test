<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator';

@Component
export default class InputMixin extends Vue {
    @Prop({ default: '' }) protected label!: string;
    @Prop({ default: '' }) protected placeholder!: string;
    @Prop({ default: 'medium' }) protected size!: 'small' | 'medium';

    @Model('input') protected readonly value!: string;

    protected input: string = '';

    protected handleInput(e: InputEvent): void {
        this.$emit('input', (e.target as HTMLInputElement).value);
    }
}
</script>

<style lang="scss">
@import '../../scss/inputStyles.scss';
</style>
