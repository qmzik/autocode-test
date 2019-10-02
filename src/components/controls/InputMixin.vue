<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator';

@Component
export default class InputMixin extends Vue {
    @Prop({ default: '' }) protected label!: string;
    @Prop({ default: '' }) protected placeholder!: string;

    @Model('input') protected readonly value!: string;

    protected input: string = '';
}
</script>

<style lang="scss">
@import '../../scss/inputStyles.scss';
</style>
