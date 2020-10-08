__NUXT_JSONP__("/post/689818227", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{title:"【過去質問】mBaaSを用いたアプリのプッシュ通知利用のセキュリティ設定について",body:"mBaaSを用いたアプリのセキュリティに関して、以下ご教示いただけないでしょうか。\r\n\r\n前提としまして、\r\n- Monacaを利用したAndroid、iOS向けのアプリを開発しております\r\n- プッシュ通知機能を利用し、installationクラスに、絞り込み配信のためのユーザ情報を格納します。\r\n上記のinstallationクラスに格納する情報の保護に関して、3点確認したいことがあります。\r\n\r\n(1) データストアのinstallationクラスのパーミッション(ACL)の設定について、\r\n仮にAPIキーが漏洩した場合に、情報流出を防ぐ上で推奨される設定等\r\n教えていただけないでしょうか。\r\n\r\n（クライアントキーの隠蔽に関する記事については承知しております。\r\nhttps:\u002F\u002Fblog.mbaas.nifcloud.com\u002Fentry\u002F2018\u002F10\u002F01\u002F115907　）\r\n\r\n(2) mBaaSのアプリを作成する際、管理画面の設定等で、セキュリティ上検討すべき\r\n項目のリストや記事等、まとまった情報がありましたら、教えていただけないでしょうか。\r\n\r\n(3) 管理画面の「アプリ設定」＞「プッシュ通知」＞「プッシュクラス パーミッション」\r\n＞「SDKからの操作」について、具体的にはどの範囲の操作に対する設定となるのでしょうか？\r\n\r\nREST APIリファレンス(https:\u002F\u002Fmbaas.nifcloud.com\u002Fdoc\u002Fcurrent\u002Frest\u002Fcommon\u002Fformat.html)に\r\n当てはめた場合に、以下のAPIに対する操作という意味でしょうか？\r\n\r\n- プッシュ通知登録\r\n- プッシュ通知取得\r\n- プッシュ通知更新\r\n- プッシュ通知削除\r\n- プッシュ通知検索\r\n- プッシュ通知開封登録（こちらはクライアントからの操作想定のため対象外でしょうか）\r\n\r\n以上、どうぞよろしくお願いいたします。",created_at:"2020-09-01T05:15:41Z",user:{login:b,id:j,node_id:c,avatar_url:d,gravatar_id:e,url:f,html_url:g,followers_url:h,following_url:i,gists_url:a,starred_url:k,subscriptions_url:l,organizations_url:m,repos_url:n,events_url:o,received_events_url:p,type:q,site_admin:r},comments:[{url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002FNIFCLOUD-mbaas\u002FUserCommunity\u002Fissues\u002Fcomments\u002F684298392",html_url:"https:\u002F\u002Fgithub.com\u002FNIFCLOUD-mbaas\u002FUserCommunity\u002Fissues\u002F1177#issuecomment-684298392",issue_url:"https:\u002F\u002Fapi.github.com\u002Frepos\u002FNIFCLOUD-mbaas\u002FUserCommunity\u002Fissues\u002F1177",id:684298392,node_id:"MDEyOklzc3VlQ29tbWVudDY4NDI5ODM5Mg==",user:{login:b,id:j,node_id:c,avatar_url:d,gravatar_id:e,url:f,html_url:g,followers_url:h,following_url:i,gists_url:a,starred_url:k,subscriptions_url:l,organizations_url:m,repos_url:n,events_url:o,received_events_url:p,type:q,site_admin:r},created_at:s,updated_at:s,author_association:"NONE",body:"お問い合わせいただきありがとうございます。\r\n\r\n```\r\n--------------------------------------\r\n(1) データストアのinstallationクラスのパーミッション(ACL)の設定について、\r\n仮にAPIキーが漏洩した場合に、情報流出を防ぐ上で推奨される設定等\r\n教えていただけないでしょうか。\r\n--------------------------------------\r\n```\r\n\r\nmonaca push pluginの設定も変更せずとも\r\n以下のようにinstallationクラスパーミッションを設定することで、\r\nエラーなくデバイス登録・更新が実施できることを確認しました。\r\n\r\n- 対象：全員を選択\r\n- 更新、作成：チェックを有り\r\n- 読込、検索、削除、フィールド追加：チェック無し\r\n\r\n例：\r\n![installation_class_permission](https:\u002F\u002Fuser-images.githubusercontent.com\u002F12031055\u002F91797735-42cc7d00-ec5e-11ea-8134-bf2c93cfc87a.PNG)\r\n\r\n\r\nなお、こちらの設定により、\r\nSDKやAPIからのinstallationの情報は検索不可能のため、\r\n情報漏れなどは心配する必要がございません。\r\nまた、対象を「全員」としたうえで「検索」権限を設定しない場合でも、\r\nプッシュ通知機能に問題は生じません。\r\n\r\n```\r\n--------------------------------------\r\n(2) mBaaSのアプリを作成する際、管理画面の設定等で、セキュリティ上検討すべき\r\n項目のリストや記事等、まとまった情報がありましたら、教えていただけないでしょうか。\r\n--------------------------------------\r\n```\r\n\r\n開発ガイドラインをご用意しておりますため、ご参照ください。\r\n\r\n▼開発ガイドライン\r\nhttps:\u002F\u002Fmbaas.nifcloud.com\u002Fdoc\u002Fcurrent\u002Fcommon\u002Fdev_guide.html\r\n\r\nなお、アプリ開発における権限設定などのセキュリティ項目は、\r\n各ドキュメントに記載がございます。\r\nお客様のアプリの実装状況に応じてご確認いただければ幸いです。\r\n\r\n▼ドキュメント:開発者向けドキュメント\r\nhttps:\u002F\u002Fmbaas.nifcloud.com\u002Fdoc\u002Fcurrent\u002Findex.html\r\n\r\n```\r\n--------------------------------------\r\n(3) 管理画面の「アプリ設定」＞「プッシュ通知」＞「プッシュクラス パーミッション」\r\n「SDKからの操作」について、具体的にはどの範囲の操作に対する設定となるのでしょうか？\r\nREST APIリファレンス(https:\u002F\u002Fmbaas.nifcloud.com\u002Fdoc\u002Fcurrent\u002Frest\u002Fcommon\u002Fformat.html)に\r\n当てはめた場合に、以下のAPIに対する操作という意味でしょうか？\r\n・プッシュ通知登録\r\n・プッシュ通知取得\r\n・プッシュ通知更新\r\n・プッシュ通知削除\r\n・プッシュ通知検索\r\n・プッシュ通知開封登録（こちらはクライアントからの操作想定のため対象外でしょうか）\r\n--------------------------------------\r\n```\r\n\r\n管理画面の該当設定を「SDKからの操作：許可しない」と設定した場合、\r\nget（取得）処理は可能ですが、その他の処理はできなくなります。\r\n　※push クラスのACLは `{\"acl\":{\"*\":{\"get\":true}}}` と設定されます。\r\n　※クラス関連のACLについては以下のドキュメントをご参照ください\r\n    ◇REST API リファレンス:共通フォーマット ＞「パーミッション（ACL）について」＞「クラスのACL」\r\n    https:\u002F\u002Fmbaas.nifcloud.com\u002Fdoc\u002Fcurrent\u002Frest\u002Fcommon\u002Fformat.html#%E3%83%91%E3%83%BC%E3%83%9F%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%EF%BC%88ACL%EF%BC%89%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6\r\n\r\n▼SDKからの操作：許可しないの場合\r\n- プッシュ通知登録　→　NG\r\n- プッシュ通知取得　→　OK\r\n- プッシュ通知更新　→　NG\r\n- プッシュ通知削除　→　NG\r\n- プッシュ通知検索　→　NG\r\n- プッシュ通知開封登録　→　プッシュ通知クラスではないので影響がありません。\r\n\r\nしたがいまして、操作範囲は以下となります。\r\n- プッシュ通知登録\r\n- プッシュ通知更新\r\n- プッシュ通知削除\r\n- プッシュ通知検索\r\n\r\n以上、よろしくお願いいたします。\r\n",performed_via_github_app:null}]}],fetch:[],mutations:void 0}}("https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport\u002Fgists{\u002Fgist_id}","ncmbsupport","MDQ6VXNlcjEyMDMxMDU1","https:\u002F\u002Favatars2.githubusercontent.com\u002Fu\u002F12031055?v=4","","https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport","https:\u002F\u002Fgithub.com\u002Fncmbsupport","https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport\u002Ffollowers","https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport\u002Ffollowing{\u002Fother_user}",12031055,"https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport\u002Fstarred{\u002Fowner}{\u002Frepo}","https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport\u002Fsubscriptions","https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport\u002Forgs","https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport\u002Frepos","https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport\u002Fevents{\u002Fprivacy}","https:\u002F\u002Fapi.github.com\u002Fusers\u002Fncmbsupport\u002Freceived_events","User",false,"2020-09-01T05:22:15Z")));