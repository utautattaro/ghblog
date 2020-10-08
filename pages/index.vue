<template>
  <b-container>
    <div class="bg-dark text-light text-center p-3">
      <h1>ghblog</h1>
      <a href="https://github.com/utautattaro/ghblog/issues">issueを立てると記事ができます</a>
    </div>
    <b-card v-bind:title="post.title" v-bind:sub-title="new Date(post.created_at).toLocaleString()" class="my-4" v-for="(post, index) in posts" :key="index">
      <b-card-text>
        {{post.body.substr(0, 50)}}{{(post.body.length > 50)?"..." : ""}}
      </b-card-text>
      <span style="position: absolute;bottom:5px;right:5px;">
        {{post.user.login}}
        <b-avatar v-bind:href="post.user.html_url" target="_blank" v-bind:src="post.user.avatar_url"></b-avatar>
      </span>
      <a v-bind:href="'./post/'+post.id + '/'" class="card-link">read more</a>
    </b-card>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
			// 取得先のURL
			const url = "https://api.github.com/repos/utautattaro/ghblog/issues";
			// リクエスト（Get）
			const response = await $axios.$get(url);
			// 配列で返ってくるのでJSONにして返却
			return {
				posts: response
			};
		}
}
</script>

<style>
</style>
