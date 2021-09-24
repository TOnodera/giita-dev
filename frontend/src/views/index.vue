<template>
    <div class="parent">
        <div class="child">
            <div class="p-grid">
                <div class="p-col">
                    <card class="card">
                        <template #subtitle>
                            効率的に学習内容をアウトプット
                        </template>
                        <template #content>
                            <div class="image-icon-wrapper">
                                <i class="pi pi-users"></i>
                            </div>
                            <p class="text-left">
                                giitaはgithubと連携してコミット内容をqiitaに簡単に投稿できるサービスです。
                                コミットした内容をピックアップして学習内容を手軽にみんなとシェアしましょう。
                            </p>
                        </template>
                    </card>
                </div>
                <div class="p-col">
                    <card class="card">
                        <template #subtitle> 利用方法 </template>
                        <template #content>
                            <div class="image-icon-wrapper">
                                <i class="pi pi-chevron-circle-down"></i>
                            </div>
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
                    <card>
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
    width: 100%;
    height: calc(100vh - 50px);
    .child {
        padding: 100px;
        width: 60%;
        text-align: center;
        .image-icon-wrapper {
            i {
                font-size: 100px;
            }
        }
    }
}
.register-button {
    width: 260px;
}
.card {
    height: 400px;
}
</style>
