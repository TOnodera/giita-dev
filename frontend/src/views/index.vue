<template>
    <div class="parent">
        <div class="child">
            <div class="p-grid">
                <div class="p-md-6 p-sm-12">
                    <card class="card card-height">
                        <template #subtitle>
                            効率的に学習内容をアウトプット
                            <div class="image-icon-wrapper">
                                <i class="pi pi-users"></i>
                            </div>
                        </template>

                        <template #content>
                            <p class="text-left">
                                giitaはgithubと連携してコミット内容をqiitaに簡単に投稿できるサービスです。
                                コミットした内容をピックアップして学習内容を手軽にみんなとシェアしましょう。
                            </p>
                        </template>
                    </card>
                </div>
                <div class="p-md-6 p-sm-12">
                    <card class="card card-height">
                        <template #subtitle>
                            利用方法
                            <div class="image-icon-wrapper">
                                <i class="pi pi-chevron-circle-down"></i>
                            </div>
                        </template>
                        <template #content>
                            <p class="text-left">
                                利用にあたってgithubとqiitaのアカウントが必要になります。予め準備して下さい。
                            </p>
                            <p>
                                <Button
                                    label="githubアカウントを取得する。"
                                    class="register-button"
                                    @click="toGithubAccountRegisterPage"
                                ></Button>
                            </p>
                            <p>
                                <Button
                                    label="qiitaアカウントを取得する。"
                                    class="register-button"
                                    @click="toQiitaAccountRegisterPage"
                                ></Button>
                            </p>
                        </template>
                    </card>
                </div>
            </div>
            <div class="p-grid">
                <div class="p-col-12">
                    <card class="card">
                        <template #content>
                            <p>
                                githubとqiitaのアカウントをお持ちの場合はすぐにサービスをご利用いただけます。
                            </p>
                            <p>
                                <Button
                                    label="サービスを利用する。"
                                    class="register-button"
                                    @click="toQiitaAccountRegisterPage"
                                ></Button>
                            </p>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
export default defineComponent({
    components: {
        Button,
        Card,
    },
    data() {
        return {
            githubAccountRegisterUrl: 'https://github.com/signup?source=login',
            qiitaAccountRegisterUrl: 'https://qiita.com/signup?redirect_to=%2F',
        };
    },
    methods: {
        toGithubAccountRegisterPage() {
            window.open(this.githubAccountRegisterUrl, '_blank');
        },
        toQiitaAccountRegisterPage() {
            window.open(this.qiitaAccountRegisterUrl, '_blank');
        },
    },
});
</script>

<style lang="scss" scoped>
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: calc(100vh - 50px);
    margin: 0 auto;
    .child {
        padding: 10px;
        text-align: center;
        .image-icon-wrapper {
            margin-top: 5px;
            i {
                font-size: 100px;
            }
        }
    }
}
.register-button {
    margin-top: 5px;
    width: 260px;
}
.card {
    min-width: 300px;
}
.card-height {
    height: 300px;
}
</style>
