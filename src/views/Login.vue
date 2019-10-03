<template>
    <div class="login">
        <form class="login__form">
            <h1 class="login__title">Авторизация</h1>
            <AppInput class="form__input" v-model="login" placeholder="username" label="Логин"></AppInput>
            <AppInput type="password" class="form__input" v-model="password" label="Пароль"></AppInput>
            <AppButton :disabled="!isInputsFilled"
                       :click="handleSubmit"
                       class="login__submit"
            >Войти</AppButton>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AuthModule } from '../store/modules/auth';

@Component({
    components: {
        AppInput: () => import('@/components/controls/AppInput.vue'),
        AppButton: () => import('@/components/controls/AppButton.vue'),
    },
})
export default class Login extends Vue {
    private login: string = '';
    private password: string = '';

    private get isInputsFilled(): boolean {
        return Boolean(this.login) && Boolean(this.password);
    }

    private handleSubmit(): void {
        const { login } = this;
        AuthModule.authenticate({ login, date: +new Date() });
        this.$router.push({ name: 'Home' });
    }
}
</script>

<style scoped lang="scss">
.login {
    background-color: $blue;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 33px;
}

.login__form {
    min-width: 292px;
    width: 460px;
    height: 400px;
    background-color: $white;
    border-radius: 8px;
    padding: 30px 76px;
    box-sizing: border-box;
}

.form__input {
    font-size: 24px;
}

.form__input:not(:first-child) {
    margin-top: 28px;
}

.login__submit {
    height: 49px;
    width: 192px;
    margin-top: 46px;
}

.login__title {
    color: $blue;
    font-size: 24px;
    margin: 0;
}

@media only screen and (max-width: $tablet) {
    .login__form {
        padding: 30px 35px;
    }
}
</style>
