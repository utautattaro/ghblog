<template>
    <b-container>
        <a href="https://utautattaro.github.io/ghblog/">< back to top</a>
        <b-container>
            <div class="text-center m-0 p-0">
                <b-avatar v-bind:href="user.html_url" target="_blank" v-bind:src="user.avatar_url" size="4rem"></b-avatar>
                <p>{{user.login}}</p>
            </div>
            <b-card v-bind:title="title" v-bind:sub-title="new Date(created_at).toLocaleString()" class="my-4">
                <div class="txt" v-html="$md.render(body)">
                </div>
            </b-card>
            <b-container class="p-0">
                <div v-for="comment in comments">
                    <b-row class="my-2">
                        <b-col cols="1" class="text-center p-0">
                            <b-avatar v-bind:href="comment.user.html_url" target="_blank" v-bind:src="comment.user.avatar_url" size="2rem"></b-avatar>
                        </b-col>
                        <b-col cols="11">
                            <b-card>
                                <div class="txt" v-html="$md.render(comment.body)">
                                </div>
                            </b-card>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </b-container>
    </b-container>
</template> 

<script>
    export default {
        data () {
            return {
                // APIで取得してきたデータ群
                title: '',    // タイトル
                body: '',  // コンテンツ
                created_at : '', // 作成日時
                user : '', //ユーザー情報
                comments : ''
            }
        },
        async asyncData ({params, error, payload , $axios}) { 
            // payloadでデータを受け取った場合
            if (payload) {
                // 取得先のURL
                const url = payload.comments_url;
                // リクエスト（Get）
                const response = await $axios.$get(url);
                return {
                    title: payload.title,
                    body: payload.body,
                    created_at: payload.created_at,
                    user : payload.user,
                    comments : response
                }
            }
        }
    }
</script>

<style>
    .txt {
  white-space: pre-wrap;
}

img {
    width : 100%
}
</style>