__NUXT_JSONP__("/", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{posts:[{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F12",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F12\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F12\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F12\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F12",id:730553926,node_id:"MDU6SXNzdWU3MzA1NTM5MjY=",number:12,title:"ブログの紹介",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:"2020-10-27T15:24:17Z",updated_at:"2020-10-27T15:24:39Z",closed_at:b,author_association:w,active_lock_reason:b,body:"最近この技術を応用して作っているブログがどんどんいい感じになってきました。ぜひみてみてね\r\n\r\n[https:\u002F\u002Fblog.utautattaro.com](https:\u002F\u002Fblog.utautattaro.com) ",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F12\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F12\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F11",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F11\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F11\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F11\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F11",id:717875154,node_id:"MDU6SXNzdWU3MTc4NzUxNTQ=",number:11,title:"Githubとnuxt.jsだけでJAMStackを体感してみる",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:y,created_at:"2020-10-09T05:58:21Z",updated_at:"2020-10-09T06:26:31Z",closed_at:b,author_association:w,active_lock_reason:b,body:"---\r\ntitle: Githubとnuxt.jsだけでJAMStackを体感してみる\r\ntags: GitHub GitHubActions nuxt.js\r\nauthor: utautattaro\r\nslide: false\r\n---\r\n# 概要\r\nJAMStackというものがはやっているらしいので入門したいのですが、調べれば調べるほど、microCMSやNetrify, Contentfulなど新しいツールやライブラリを利用した記事が多いため、（自分にとっては）慣れ親しんだGithub(pages,issue,actions)とnuxt.jsだけでJAMStackなページを構築して体系的にJAMStackを学んでみよう！なエントリです\r\n\r\n## 作ったもの\r\nGithubで完結するブログシステムを作りました。\r\nhttps:\u002F\u002Futautattaro.github.io\u002Fghblog\u002F\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002Fe2a5ef58-5461-f76b-7105-6cd431cfe256.png)\r\n\r\n指定のリポジトリでissueを立てると自動的にページにコンテンツが投稿される仕組みです。\r\n※適当にissueを追加して動作を確認してみてください！\r\n\r\n\r\n## そもそもJAMStackとは\r\n\u003EJAMstackとは2016年ごろにNetrifyの創設者Matt Biilmann氏が提唱した新しいフロントエンドスタックです。 リクエストを受けてからサーバー上で処理を行いレスポンスを返す従来のWebサイトの配信方法とは異なり、JAMstackでは事前にビルドされたHTMLをCDN上で配信します。\r\n\r\n[AWSでJAMstackことはじめ（基礎知識編）](https:\u002F\u002Fwww.mitsue.co.jp\u002Fknowledge\u002Fblog\u002Ffrontend\u002F201912\u002F10_0000.html#:~:text=JAMstack%E3%81%A8%E3%81%AF2016%E5%B9%B4,%E4%B8%8A%E3%81%A7%E9%85%8D%E4%BF%A1%E3%81%97%E3%81%BE%E3%81%99%E3%80%82)から参照\r\n\r\nつまるところユーザーが見るコンテンツは従来のようにクライアントサーバー間でアクセス時にやり取りするのではなく、事前にCI\u002FCDでビルドして静的にホストしておこうぜという感じです。静的サイトとしてホストされるのでパフォーマンス的にもSEO的にもばっちりとのこと。\r\n\r\nJAMStackを構成するうえで必要な要素としては以下のようです\r\n\r\n1.Static Site Generator\r\n2.CI\u002FCD\r\n3.静的ホスティング\r\n4.APIs\r\n\r\n最近ではこれらに特化したツールが数多く登場していますが、今回は導入をなるべく低く、無料で可能な範囲で行うためにそれぞれ\r\n\r\n1.nuxt.js\r\n2.Github Actions\r\n3.Github Pages\r\n4.GIthub Issue\r\n\r\nで構築してみました\r\n\r\n\r\n# 開発\r\n\r\n## リポジトリの作成\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F18e7c9de-6c5c-27df-e425-e3c95058c130.png)\r\n\r\n## create-nuxt-app\r\n\r\n```\r\n# npx create-nuxt-app ghblog\r\ncreate-nuxt-app v3.4.0\r\n✨  Generating Nuxt.js project in ghblog\r\n? Project name: ghblog\r\n? Programming language: JavaScript\r\n? Package manager: Npm\r\n? UI framework: Bootstrap Vue\r\n? Nuxt.js modules: Axios\r\n? Linting tools: (Press \u003Cspace\u003E to select, \u003Ca\u003E to toggle all, \u003Ci\u003E to invert selection)\r\n? Testing framework: None\r\n? Rendering mode: Universal (SSR \u002F SSG)\r\n? Deployment target: Static (Static\u002FJAMStack hosting)\r\n? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)\r\n? What is your GitHub username? utautattaro\r\n? Version control system: Git\r\n```\r\n個人的にBootStrapが好きなのでBootStrapを選択しています。\r\nIssueを参照する際にaxiosが必要なのでこの場でインストールします。Rendering mode, Deploy targetはそれぞれSSR、Staticを選択します\r\n\r\nアプリケーションができたらgit initしておきましょう\r\n\r\n```\r\ngit init\r\ngit add .\r\ngit commit -m \"first commit\"\r\ngit branch -M main\r\ngit remote add origin https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog.git\r\ngit push -u origin master\r\n```\r\n\r\n## コンテンツの作成\r\n今回はシンプルにIssueのタイトルとボディのみ使います。markdownが使えますが、いったんplantextのみ対応します。\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002Fb158553e-676c-c104-8384-382e8dcea72f.png)\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F2e6dfc46-b017-bb96-3839-5b388e9c7a9d.png)\r\n\r\nこのように適当なIssueを二つほど立てておきます\r\n\r\n## CI\u002FCDの準備\r\nActionsのタブに飛んでworkflowファイルを作成します\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002Ff144cdbd-2307-971e-ca66-4f02034b4955.png)\r\n\r\n今回はGithub Pagesにデプロイしたいのでgithub-pages-deploy-actionを利用します\r\n\r\n```yml:main.yml\r\n# This is a basic workflow to help you get started with Actions\r\n\r\nname: CI\r\n\r\n# Controls when the action will run. Triggers the workflow on push or pull request\r\n# events but only for the master branch\r\non:\r\n  push:\r\n    branches: [ master ]\r\n\r\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\r\njobs:\r\n  # This workflow contains a single job called \"build\"\r\n  build:\r\n    # The type of runner that the job will run on\r\n    runs-on: ubuntu-latest\r\n\r\n    # Steps represent a sequence of tasks that will be executed as part of the job\r\n    steps:\r\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\r\n      - name: Checkout 🛎️\r\n        uses: actions\u002Fcheckout@v2\r\n        \r\n      - name: setup node\r\n        uses: actions\u002Fsetup-node@v1\r\n        with:\r\n          node-version: '10.x'\r\n\r\n      - name: Cache dependencies\r\n        uses: actions\u002Fcache@v1\r\n        with:\r\n          path: ~\u002F.npm\r\n          key: ${{ runner.os }}-node-${{ hashFiles('**\u002Fpackage-lock.json') }}\r\n          restore-keys: |\r\n            ${{ runner.os }}-node-\r\n\r\n      - name: install\r\n        run: npm ci\r\n\r\n      - name: test\r\n        run: npm test\r\n\r\n      - name: generate\r\n        run: npm run generate\r\n\r\n      - name: Deploy 🚀\r\n        uses: JamesIves\u002Fgithub-pages-deploy-action@3.6.2\r\n        with:\r\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\r\n          BRANCH: gh-pages # The branch the action should deploy to.\r\n          FOLDER: dist # The folder the action should deploy.\r\n          CLEAN: true # Automatically remove deleted files from the deploy branch\r\n```\r\npush後、CIが動いていることが確認できたらOKです\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F26c7b4dc-7b88-6803-4a41-7883cae2d20e.png)\r\n\r\n正しくビルドとデプロイができていれば、Github PagesのURLにこのように表示されているはずです\r\n\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F4a3ace9d-2816-fb41-9dc1-ace167d2ead3.png)\r\n\r\n## 記事ページ作成\r\nIssueから受け取ったデータを表示するための.vueファイルを作成します\r\n\r\n```javascript:pages\u002Fpost\u002F_id.vue\r\n\u003Ctemplate\u003E\r\n    \u003Cdiv\u003E\r\n        \u003Cp\u003Etitle : {{title}}\u003C\u002Fp\u003E\r\n        \u003Cp\u003Econtent : {{body}}\u003C\u002Fp\u003E\r\n        \u003Csmall\u003Eauthor : {{user.login}} createdAt : {{created_at}}\u003C\u002Fsmall\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Ftemplate\u003E \r\n\r\n\u003Cscript\u003E\r\n    export default {\r\n        data () {\r\n            return {\r\n                \u002F\u002F APIで取得してきたデータ群\r\n                title: '',    \u002F\u002F タイトル\r\n                body: '',  \u002F\u002F コンテンツ\r\n                created_at : '', \u002F\u002F 作成日時\r\n                user : '' \u002F\u002Fユーザー情報\r\n            }\r\n        },\r\n        async asyncData ({params, error, payload }) {\r\n            \u002F\u002F payloadでデータを受け取った場合\r\n            if (payload) {\r\n                return {\r\n                    title: payload.title,\r\n                    body: payload.body,\r\n                    created_at: payload.created_at,\r\n                    user : payload.user\r\n                }\r\n            }\r\n        }\r\n    }\r\n\u003C\u002Fscript\u003E\r\n```\r\n\r\nconfigにIssueからのAPIを動的ルーティングに流し込む処理を追加します\r\n\r\n```javascript:nuxt.config.js\r\ngenerate: {\r\n    routes() {\r\n      return axios.get('https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues').then(res =\u003E {\r\n        return res.data.map(post =\u003E {\r\n          return {\r\n            route: '\u002Fpost\u002F' + post.id,\r\n            payload: post\r\n          }\r\n        })\r\n      })\r\n    }\r\n  }\r\n```\r\nプッシュすると記事のページが正しく表示されていることが確認できました\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002Fa656d399-b3a4-e4be-24bc-dc6cd850bf8e.png)\r\n\r\n## トップページ作成\r\nトップページはaxiosでIssueの一覧を持ってきて表示する仕組みにしてしまいました。なので厳密にはJAMStackではないのですがまあトップページだけなので良しとします。\r\n\r\n```javascript:\u002Fpages\u002Findex.vue\r\n\u003Ctemplate\u003E\r\n  \u003Cb-container\u003E\r\n    \u003Ch1 class=\"bg-dark text-light text-center p-3\"\u003Eghblog\u003C\u002Fh1\u003E\r\n    \u003Cb-card v-bind:title=\"post.title\" v-bind:sub-title=\"new Date(post.created_at).toLocaleString()\" class=\"my-4\" v-for=\"(post, index) in posts\" :key=\"index\"\u003E\r\n      \u003Cb-card-text\u003E\r\n        {{post.body.substr(0, 50)}}{{(post.body.length \u003E 50)?\"...\" : \"\"}}\r\n      \u003C\u002Fb-card-text\u003E\r\n      \u003Cspan style=\"position: absolute;top:5px;right:5px;\"\u003E\r\n        {{post.user.login}}\r\n        \u003Cb-avatar v-bind:href=\"post.user.html_url\" target=\"_blank\" v-bind:src=\"post.user.avatar_url\"\u003E\u003C\u002Fb-avatar\u003E\r\n      \u003C\u002Fspan\u003E\r\n      \u003Cb-link v-bind:to=\"'\u002Fghblog\u002Fpost\u002F'+post.id\" class=\"card-link\"\u003Eread more\u003C\u002Fb-link\u003E\r\n    \u003C\u002Fb-card\u003E\r\n  \u003C\u002Fb-container\u003E\r\n\u003C\u002Ftemplate\u003E\r\n\r\n\u003Cscript\u003E\r\nexport default {\r\n  async asyncData({ $axios }) {\r\n\t\t\t\u002F\u002F 取得先のURL\r\n\t\t\tconst url = \"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\";\r\n\t\t\t\u002F\u002F リクエスト（Get）\r\n\t\t\tconst response = await $axios.$get(url);\r\n\t\t\t\u002F\u002F 配列で返ってくるのでJSONにして返却\r\n\t\t\treturn {\r\n\t\t\t\tposts: response\r\n\t\t\t};\r\n\t\t}\r\n}\r\n\u003C\u002Fscript\u003E\r\n\r\n\u003Cstyle\u003E\r\n\u003C\u002Fstyle\u003E\r\n```\r\nいい感じにトップページができました\r\n\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F88cf8f2d-0ca5-73cf-d2a9-20620418230b.png)\r\n\r\n長文のbodyがあった場合は50文字で切られる仕様にしてみました\r\n\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F1fb644ab-e90f-3046-9ac0-9477d04b95fe.png)\r\n\r\n## 記事ページ整形\r\n記事ページをいい感じに整形しました。またトップへ戻るボタンを作成しました。このとき、nuxt.jsのvue-routerではルートがリポジトリのページのさらに上の階層に行ってしまうため、to=\"\u002Fghblog\u002F\"のようにしています\r\n\r\n```javascript:\u002Fpages\u002Fpost\u002F_id.vue\r\n\u003Ctemplate\u003E\r\n    \u003Cb-container\u003E\r\n        \u003Cb-link to=\"\u002Fghblog\u002F\"\u003E\u003C back to top\u003C\u002Fb-link\u003E\r\n        \u003Cb-card v-bind:title=\"title\" v-bind:sub-title=\"new Date(created_at).toLocaleString()\" class=\"my-4\"\u003E\r\n            \u003Cb-card-text\u003E\r\n              {{body}}\r\n            \u003C\u002Fb-card-text\u003E\r\n            \u003Cspan style=\"position: absolute;top:5px;right:5px;\"\u003E\r\n              {{user.login}}\r\n              \u003Cb-avatar v-bind:href=\"user.html_url\" target=\"_blank\" v-bind:src=\"user.avatar_url\"\u003E\u003C\u002Fb-avatar\u003E\r\n            \u003C\u002Fspan\u003E\r\n          \u003C\u002Fb-card\u003E\r\n    \u003C\u002Fb-container\u003E\r\n\u003C\u002Ftemplate\u003E \r\n\r\n\u003Cscript\u003E\r\n    export default {\r\n        data () {\r\n            return {\r\n                \u002F\u002F APIで取得してきたデータ群\r\n                title: 'test',    \u002F\u002F タイトル\r\n                body: 'hogehoghoeghoegoe',  \u002F\u002F コンテンツ\r\n                created_at : 'ghoegoehge', \u002F\u002F 作成日時\r\n                user : '' \u002F\u002Fユーザー情報\r\n            }\r\n        },\r\n        async asyncData ({params, error, payload }) {\r\n            \u002F\u002F payloadでデータを受け取った場合\r\n            if (payload) {\r\n                return {\r\n                    title: payload.title,\r\n                    body: payload.body,\r\n                    created_at: payload.created_at,\r\n                    user : payload.user\r\n                }\r\n            }\r\n        }\r\n    }\r\n\u003C\u002Fscript\u003E\r\n```\r\n\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F367e196a-5b90-2df6-849e-d7e1d95aa84e.png)\r\n\r\n## Issue投稿をトリガにする\r\nここまで出来たらIssueの投稿をトリガにしてCIを走らせるようにすればJAMStackブログとして独り立ちできます。\r\n\r\n```yml:main.yml\r\n# This is a basic workflow to help you get started with Actions\r\n\r\nname: CI\r\n\r\n# Controls when the action will run. Triggers the workflow on push or pull request\r\n# events but only for the master branch\r\non:\r\n  push:\r\n    branches: [ master ]\r\n  issues:\r\n    types: [opened, edited]\r\n\r\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\r\njobs:\r\n  # This workflow contains a single job called \"build\"\r\n  build:\r\n    # The type of runner that the job will run on\r\n    runs-on: ubuntu-latest\r\n\r\n    # Steps represent a sequence of tasks that will be executed as part of the job\r\n    steps:\r\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\r\n      - name: Checkout 🛎️\r\n        uses: actions\u002Fcheckout@v2\r\n        \r\n      - name: setup node\r\n        uses: actions\u002Fsetup-node@v1\r\n        with:\r\n          node-version: '10.x'\r\n\r\n      - name: Cache dependencies\r\n        uses: actions\u002Fcache@v1\r\n        with:\r\n          path: ~\u002F.npm\r\n          key: ${{ runner.os }}-node-${{ hashFiles('**\u002Fpackage-lock.json') }}\r\n          restore-keys: |\r\n            ${{ runner.os }}-node-\r\n\r\n      - name: install\r\n        run: npm ci\r\n\r\n      - name: test\r\n        run: npm test\r\n\r\n      - name: generate\r\n        run: npm run generate\r\n\r\n      - name: Deploy 🚀\r\n        uses: JamesIves\u002Fgithub-pages-deploy-action@3.6.2\r\n        with:\r\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\r\n          BRANCH: gh-pages # The branch the action should deploy to.\r\n          FOLDER: dist # The folder the action should deploy.\r\n          CLEAN: true # Automatically remove deleted files from the deploy branch\r\n```\r\n適当なIssueを追加すると\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F72f2b386-c3cd-4e9e-c3d8-fab70c89c65c.png)\r\nGithub Actionsが動いて\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F3cd5fd32-5561-efbb-e5ca-fcec7d9be5c9.png)\r\n公開されました！\r\n![image.png](https:\u002F\u002Fqiita-image-store.s3.ap-northeast-1.amazonaws.com\u002F0\u002F148084\u002F517aad59-e49f-d642-38a2-b51ee9891ae9.png)\r\n\r\n# まとめ\r\nGithubとnuxt.jsだけで最小構成のJAMStackが実現できました。ひとまず最小の範囲でどんなもんかが理解できました。もっと作りこめば自前のブログシステムとして運用したり、掲示板みたいなものつくれたり、Issueの共有システム作ったり、Github有償の方はprivateリポジトリでこれをやればプライベートブログとして使えたりしそうでなかなか汎用的なんじゃないかと思います。\r\n\r\nまた、gatsbyなんかを使うと様々なデータソースに対応できたり、contentfulを使うとRESTじゃなくてGraphQLでコンテンツデリバリーできたりといろいろ便利になるそうです。ひとまず概要は理解できたので、一つずつ挑戦していきたいと思います。\r\n",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F11\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F11\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F10",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F10\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F10\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F10\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F10",id:716481680,node_id:"MDU6SXNzdWU3MTY0ODE2ODA=",number:10,title:"スマホアプリから投稿してみる",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:z,created_at:"2020-10-07T12:23:55Z",updated_at:"2020-10-08T03:27:25Z",closed_at:b,author_association:w,active_lock_reason:b,body:"**スマホアプリから行けるのかテスト**\r\n\r\n_斜体とか入れてみる_\r\n\r\n- リストはどうかな\r\n- リスト\r\n- リストリスト\r\n\r\n\r\n![IMG20200927164301.jpg](https:\u002F\u002Fuser-images.githubusercontent.com\u002F7885830\u002F95330325-59ac6200-08e3-11eb-9ad2-f5cf4cacc26d.jpg)\r\n羽田はガラガラです\r\n\r\n# 以上！ \r\n\r\n#コメント対応してみました\r\nGithub Actionsではコメントのトリガーできないんだなー",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F10\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F10\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F9",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F9\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F9\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F9\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F9",id:716401450,node_id:"MDU6SXNzdWU3MTY0MDE0NTA=",number:9,title:"自己紹介",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:"2020-10-07T10:24:01Z",updated_at:"2020-10-07T12:25:53Z",closed_at:b,author_association:w,active_lock_reason:b,body:"### 津田良太郎 \u002F Ryotaro Tsuda\r\n\r\n## description\r\n_Game Developer \u002F Web Developer \u002F Tool Developer \u002F Bussiness Developer \u002F Developer Relation \u002F NewsPicks Expert \u002F GGtools President_\r\n\r\nもともと工業高校で機械・電気電子・金属加工とかいろいろやってました。ITは大学からです。エンジニアリングよりもデベロップメントやアートに興味があります。技術の根幹やコアも重要ですが、それで何を実現\u002F表現するか？を考えていることの方が多いです。 \r\n\r\n## link\r\n[twitter](https:\u002F\u002Ftwitter.com\u002Futautattaro)\r\n[qiita](https:\u002F\u002Fqiita.com\u002Futautattaro)\r\n[github](https:\u002F\u002Fgithub.com\u002Futautattaro)\r\n[wantedly](https:\u002F\u002Fwww.wantedly.com\u002Fusers\u002F17875641)\r\n\r\n## portfolio\r\n[portal](https:\u002F\u002Futautattaro.com)\r\n[VOXELCANVAS](https:\u002F\u002Fvoxelcanvas.me)\r\n[ゆるふわバドミントン](https:\u002F\u002Ffluffy.utautattaro.com)\r\n\r\n## img\r\n\r\n![img](https:\u002F\u002Favatars1.githubusercontent.com\u002Fu\u002F7885830?s=460&u=bdadd287eb206299a0ec0d9d8457d3d61bec747b&v=4)\r\n![img](https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F939515152554123268\u002F2RnRHsCQ_400x400.jpg)",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F9\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F9\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F8",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F8\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F8\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F8\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F8",id:716365930,node_id:"MDU6SXNzdWU3MTYzNjU5MzA=",number:8,title:"@nuxtjs\u002Fmarkdownitを入れるとおかしくなる",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:"2020-10-07T09:36:08Z",updated_at:"2020-10-07T10:16:27Z",closed_at:b,author_association:w,active_lock_reason:b,body:"@nuxtjs\u002Fmarkdownitを利用してmarkdownのレンダリングをしようとすると\r\nルーティングがおかしくなる問題が起きている\r\n\r\n何はともあれnuxt.jsでアプリを作るときは\r\nドメインを取得した方がいいと思う\r\n\r\n→　解決\r\nmarkdownitではなく**b-link**が悪さをしていました\r\n\r\nb-link to=をa href=みたいなノリで使うとvue-routerに入れられてしまいルーティングが存在しない場合おかしくなってしまうので注意が必要です\r\n特にsample.com\u002Fhoge\u002Fみたいなとこにnuxtアプリを入れるときは要注意",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F8\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F8\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F7",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F7\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F7\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F7\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F7",id:716354656,node_id:"MDU6SXNzdWU3MTYzNTQ2NTY=",number:7,title:x,user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:A,updated_at:A,closed_at:b,author_association:w,active_lock_reason:b,body:x,reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F7\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F7\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F6",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F6\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F6\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F6\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F6",id:716337625,node_id:"MDU6SXNzdWU3MTYzMzc2MjU=",number:6,title:"markdownをレンダリングしたい",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:B,updated_at:B,closed_at:b,author_association:w,active_lock_reason:b,body:"# 見出し1\r\n\r\n## 見出し2\r\n\r\n### 見出し3\r\n\r\n#### 見出し4\r\n\r\nmarkdownサンプル文章です。ここは地の文です。\r\n\r\nmarkdownでは、箇条書きは*や-などの記号を文頭に置くことで記述します。箇条書きの階層は行頭スペース4つを足します。\r\n\r\n- これはひとつめの箇条書き\r\n- ふたつめの箇条書き\r\n    - 一つ階層が深い箇条書き\r\n- みっつめの箇条書き\r\n\r\n### コード\r\n\r\n3つのバッククォート記号でくくることで、コード例を示します\r\n\r\n```\r\n[ozuma@vpscon ~]$ cp a\r\ncp: missing destination file operand after `a'\r\nTry `cp --help' for more information.\r\n```\r\n\r\nmarkdown形式については、Wikipediaなども参照ください\r\n- http:\u002F\u002Fja.wikipedia.org\u002Fwiki\u002FMarkdown",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F6\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F6\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F5",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F5\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F5\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F5\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F5",id:716325291,node_id:"MDU6SXNzdWU3MTYzMjUyOTE=",number:5,title:"Qiitaに投稿しました",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:C,updated_at:C,closed_at:b,author_association:w,active_lock_reason:b,body:"Qiitaに投稿しました\r\n\r\nhttps:\u002F\u002Fqiita.com\u002Futautattaro\u002Fitems\u002F6a8ad2408656329abd2d\r\n\r\nTwitterやってるのでフォローよろしくお願いいたします。\r\n\r\nhttps:\u002F\u002Ftwitter.com\u002Futautattaro",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F5\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F5\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F4",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F4\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F4\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F4\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F4",id:716283649,node_id:"MDU6SXNzdWU3MTYyODM2NDk=",number:4,title:"aaaaa",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:D,updated_at:D,closed_at:b,author_association:w,active_lock_reason:b,body:"hohohohoho",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F4\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F4\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F3",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F3\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F3\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F3\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F3",id:716273665,node_id:"MDU6SXNzdWU3MTYyNzM2NjU=",number:3,title:"徒然草",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:"2020-10-07T07:27:55Z",updated_at:"2020-10-07T07:28:17Z",closed_at:b,author_association:w,active_lock_reason:b,body:"つれづれなるままに、日暮らし、硯（すずり）に向かひて、心にうつりゆくよしなしごとを、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。\r\nよろづにいみじくとも、色好まざらん男は、いとさうざうしく、玉の巵（さかづき）の底なき心地ぞすべき。\r\n露霜にしほたれて、所さだめずまどひ歩（あり）き、親のいさめ、世のそしりをつつむに心のいとまなく、あふさきるさに思ひ乱れ、さるはひとり寢がちに、まどろむ夜なきこそをかしけれ。\r\nさりとて、ひたすらたはれたる方にはあらで、女にたやすからず思はれんこそ、あらまほしかるべき業（わざ）なれ。\r\nあだし野の露消ゆる時なく、鳥部山の煙立ちさらでのみ住み果つる習ひならば、いかに物の哀れもなからん。\r\n世は定めなきこそいみじけれ。\r\n命あるものを見るに、人ばかり久しきはなし。\r\n\r\nかげろふの夕を待ち、夏の蝉の春秋を知らぬもあるぞかし。\r\nつくづくと一年（ひととせ）を暮らす程だにも、こよなうのどけしや。飽かず、惜しと思はば、千年（ちとせ）を過すとも、一夜の夢の心地こそせめ。\r\n住みはてぬ世に、醜きすがたを待ちえて、何かはせん。命長ければ辱（はじ）多し。\r\n長くとも四十（よそぢ）に足らぬほどにて死なんこそ、目安かるべけれ。\r\n\r\nそのほど過ぎぬれば、かたちを恥づる心もなく、人に出（い）でまじらはん事を思ひ、夕（ゆふべ）の日に子孫を愛して、榮行（さかゆ）く末を見んまでの命をあらまし、ひたすら世を貪る心のみ深く、物のあはれも知らずなりゆくなん、あさましき。",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F3\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F3\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F2",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F2\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F2\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F2\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F2",id:716236600,node_id:"MDU6SXNzdWU3MTYyMzY2MDA=",number:z,title:"hello",user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:E,updated_at:E,closed_at:b,author_association:w,active_lock_reason:b,body:"this is test",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F2\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F2\u002Ftimeline",performed_via_github_app:b,state_reason:b},{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F1",repository_url:s,labels_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F1\u002Flabels{\u002Fname}",comments_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F1\u002Fcomments",events_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F1\u002Fevents",html_url:"https:\u002F\u002Fgithub.com\u002Futautattaro\u002Fghblog\u002Fissues\u002F1",id:716236413,node_id:"MDU6SXNzdWU3MTYyMzY0MTM=",number:y,title:x,user:{login:q,id:u,node_id:v,avatar_url:e,gravatar_id:f,url:g,html_url:h,followers_url:i,following_url:j,gists_url:k,starred_url:l,subscriptions_url:m,organizations_url:n,repos_url:o,events_url:p,received_events_url:d,type:r,site_admin:c},labels:[],state:t,locked:c,assignee:b,assignees:[],milestone:b,comments:a,created_at:F,updated_at:F,closed_at:b,author_association:w,active_lock_reason:b,body:"testtesttest",reactions:{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F1\u002Freactions",total_count:a,"+1":a,"-1":a,laugh:a,hooray:a,confused:a,heart:a,rocket:a,eyes:a},timeline_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog\u002Fissues\u002F1\u002Ftimeline",performed_via_github_app:b,state_reason:b}]}],fetch:[],mutations:void 0}}(0,null,false,"https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro\u002Freceived_events","https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7885830?v=4","","https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro","https:\u002F\u002Fgithub.com\u002Futautattaro","https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro\u002Ffollowers","https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro\u002Ffollowing{\u002Fother_user}","https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro\u002Fgists{\u002Fgist_id}","https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro\u002Fstarred{\u002Fowner}{\u002Frepo}","https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro\u002Fsubscriptions","https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro\u002Forgs","https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro\u002Frepos","https:\u002F\u002Fapi.github.com\u002Fusers\u002Futautattaro\u002Fevents{\u002Fprivacy}","utautattaro","User","https:\u002F\u002Fapi.github.com\u002Frepos\u002Futautattaro\u002Fghblog","open",7885830,"MDQ6VXNlcjc4ODU4MzA=","OWNER","test",1,2,"2020-10-07T09:20:40Z","2020-10-07T08:59:35Z","2020-10-07T08:43:04Z","2020-10-07T07:42:34Z","2020-10-07T06:25:05Z","2020-10-07T06:24:48Z")));