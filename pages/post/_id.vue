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
            <b-container class="m-0">
                <b-row v-for="comment in comments">
                    <b-col sm="1" class="p-0 text-right"><b-avatar v-bind:href="comment.user.html_url" target="_blank" v-bind:src="comment.user.avatar_url"></b-avatar></b-col>
                    <b-col sm="11">
                        <b-card                        >
                            <div class="txt" v-html="$md.render(comment.body)">
                            </div>
                        </b-card>
                    </b-col>
                  </b-row>
                  <p>
                    <a v-bind:href="html_url">comment</a>
                  </p>
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
                comments_url:'',
                comments : '',
                html_url : ''
            }
        },
        async asyncData ({params, error, payload }) { 
            // payloadでデータを受け取った場合
            if (payload) {
                return {
                    title: payload.title,
                    body: payload.body,
                    comments_url : payload.comments_url,
                    created_at: payload.created_at,
                    user : payload.user,
                    html_url : payload.html_url
                }
            }
        },
        mounted : function(){
            let self = this;
            fetch(self.comments_url + "?client_id=d2270c16840601882549&client_secret=90d1f65568f007af3c8b398b39ad1379d3a45d30")
            .then(response => response.json())
            .then(data => {
            self.comments  = data;
            })
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