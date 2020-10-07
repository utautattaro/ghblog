<template>
    <b-container>
        <b-link to="/">< back to top</b-link>
        <b-card v-bind:title="title" v-bind:sub-title="new Date(created_at).toLocaleString()" class="my-4">
            <b-card-text>
              {{body}}
            </b-card-text>
            <span style="position: absolute;top:5px;right:5px;">
              {{user.login}}
              <b-avatar v-bind:href="user.html_url" target="_blank" v-bind:src="user.avatar_url"></b-avatar>
            </span>
          </b-card>
    </b-container>
</template> 

<script>
    export default {
        data () {
            return {
                // APIで取得してきたデータ群
                title: 'test',    // タイトル
                body: 'hogehoghoeghoegoe',  // コンテンツ
                created_at : 'ghoegoehge', // 作成日時
                user : '' //ユーザー情報
            }
        },
        async asyncData ({params, error, payload }) {
            // payloadでデータを受け取った場合
            if (payload) {
                return {
                    title: payload.title,
                    body: payload.body,
                    created_at: payload.created_at,
                    user : payload.user
                }
            }
        }
    }
</script>