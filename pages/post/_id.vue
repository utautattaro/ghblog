<template>
    <div>
        <p>title : {{title}}</p>
        <p>content : {{body}}</p>
        <small>author : {{user.login}} createdAt : {{created_at}}</small>
    </div>
</template> 

<script>
    export default {
        data () {
            return {
                // APIで取得してきたデータ群
                title: '',    // タイトル
                body: '',  // コンテンツ
                created_at : '', // 作成日時
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