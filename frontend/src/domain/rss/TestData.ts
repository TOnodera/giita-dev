const testData = `
<?xml version="1.0" encoding="utf-8" ?>
<rss version="2.0">
<channel>
<title>CodeZine:新着一覧</title>
<link>https://codezine.jp/</link>
<copyright>Copyright 2007-2018 CodeZine, Shoeisha Co., Ltd. All rights reserved.</copyright>
<language>ja-jp</language>
<pubDate>Wed, 29 Sep 2021 14:05:20 +0900</pubDate>
<description>プログラミングに役立つソースコードが満載な開発者のための実装系Webマガジン</description>
<image>
<url>https://codezine.jp/lib/img/cmn/cmn-header-logo.png</url>
<title>CodeZine</title>
<link>https://codezine.jp/</link>
</image>
<item>
<title>最近よく聞くSREって何？ 定義から実践に向けたロードマップまで解説【デブサミ2021夏】</title>
<link>http://codezine.jp/article/detail/14742</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14742</guid>
<pubDate>Wed, 29 Sep 2021 12:00:00 +0900</pubDate>
<description>　近年、注目を集めているGoogleが提唱したシステム運用の方法論「SRE（Site Reliability Engineering）」。だが、実践しようとしても、なかなか難しい。それはSREがリスクの受容やSLOの定義、分散システムモニタリング、Toilの削減、自動化の推進、適切なリリースエンジニアリングというような、運用保守が求める理想的な原則をソフトウェアエンジニアリングというアプローチを通じて実現させていくことを担っているからだ。ではどうやって実践していけば成功するのか。そのコツについて、スリーシェイクでSREのコンサルティング、および導入、定着化支援を行っている手塚卓也氏が明かした。
</description>
</item>
<item>
<title>カオスエンジニアリングで急なVMの停止に備えよう～Azure 仮想マシン スケール セット（VMSS）にカオス挿入</title>
<link>http://codezine.jp/article/detail/14858</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14858</guid>
<pubDate>Wed, 29 Sep 2021 11:00:00 +0900</pubDate>
<description>　この回では、Azure 仮想マシン スケール セット（VMSS）を構成したシステムに対するカオス挿入について説明します。VMSSを利用することで、負荷や障害に応じたオートヒーリングを実現することが可能です。クラウドで起きうる事象である急なVMの再起動などを、Chaos Toolkitを活用し実験としてカオス挿入する方法や、それらに耐えるためのVMSSの設定について説明します。
</description>
</item>
<item>
<title>Microsoft、NuGet.orgのパッケージ詳細ページをリニューアル</title>
<link>http://codezine.jp/article/detail/14935</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14935</guid>
<pubDate>Wed, 29 Sep 2021 09:00:00 +0900</pubDate>
<description>　米Microsoftは、NuGet.orgのパッケージ詳細ページを大きくリニューアルしたことを、9月23日（現地時間）に発表した。
</description>
</item>
<item>
<title>Google、高速で軽量なWebコンポーネントを構築できる「Lit 2」の安定版をリリース</title>
<link>http://codezine.jp/article/detail/14938</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14938</guid>
<pubDate>Wed, 29 Sep 2021 09:00:00 +0900</pubDate>
<description>　米Googleは、高速で軽量なWebコンポーネントを構築するためのライブラリである「Lit 2」の安定版を、9月21日（現地時間）にリリースした。
</description>
</item>
<item>
<title>Tara、ワークフローに合わせて統合をカスタムできるAPIの提供を開始</title>
<link>http://codezine.jp/article/detail/14934</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14934</guid>
<pubDate>Wed, 29 Sep 2021 08:00:00 +0900</pubDate>
<description>　米Taraは、カスタムワークフローに合わせてカスタム統合を構築可能な「Tara API」を、9月23日（現地時間）に発表した。
</description>
</item>
<item>
<title>Kotlinのシリアル化ライブラリ「kotlinx.serialization 1.3.0」がリリース、</title>
<link>http://codezine.jp/article/detail/14937</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14937</guid>
<pubDate>Wed, 29 Sep 2021 08:00:00 +0900</pubDate>
<description>　チェコのJetBrainsは、Kotlinのシリアル化ライブラリの最新版「kotlinx.serialization 1.3.0」を、9月27日（現地時間）にリリースした。
</description>
</item>
<item>
<title>JFrog、米国防総省のセキュリティ認証を獲得</title>
<link>http://codezine.jp/article/detail/14933</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14933</guid>
<pubDate>Tue, 28 Sep 2021 17:00:00 +0900</pubDate>
<description>　JFrog Japanは、親会社であるJFrogの「JFrog Artifactory」および「JFrog Xray」ソリューションが米国防総省のアイアン・バンクに認定され、国防総省のDevSecOpsソフトウェア・イニシアチブであるPlatform One経由で利用できるようになったことを9月27日に発表した。
</description>
</item>
<item>
<title>バルテスがInternet Explorerサポート終了に関するアンケート調査結果を発表、移行準備完了しているのは16％</title>
<link>http://codezine.jp/article/detail/14936</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14936</guid>
<pubDate>Tue, 28 Sep 2021 15:40:00 +0900</pubDate>
<description>　バルテスは、同社の運営するソフトウェア品質向上プラットフォーム「Qbook」の会員を対象に実施した「Internet Explorerサポート終了に関するアンケート調査」の結果を、9月28日に発表した。
</description>
</item>
<item>
<title>Flutterでのレイアウトの組み合わせ方を学ぼう～実際の画面例を使用</title>
<link>http://codezine.jp/article/detail/14820</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14820</guid>
<pubDate>Tue, 28 Sep 2021 11:00:00 +0900</pubDate>
<description>　前回は、基本的な各レイアウトウィジェットについて説明しました。画面レイアウトはさまざまな組み合わせ方法があり、その組み合わせ方法によって気を付けるポイントなどが変わってしまいます。そこで、今回は実際の画面サンプルを例にどのようにレイアウトを使っていくかを紹介します。基本的なレイアウトは前回紹介したレイアウトを使いつつも、前回紹介出来なかったレイアウトもいくつか含まれています。それらはソースコードとして説明していきますが、足りない部分はリファレンスなどを参照してください。
</description>
</item>
<item>
<title>Web業界におけるあるある満載のWebコンテンツ「わかりみかるた」が公開</title>
<link>http://codezine.jp/article/detail/14926</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14926</guid>
<pubDate>Tue, 28 Sep 2021 10:00:00 +0900</pubDate>
<description>　カヤックは、プレイドが運営するサイト運用・改善ツール「KARTE Blocks」の正式リリースおよび無料プラン提供を機に、Webコンテンツ「わかりみかるた」を企画し、特設サイト上で公開した。
</description>
</item>
<item>
<title>Google、GKEへの継続的デリバリにおける課題を解決するマネージドサービス「Google Cloud Deploy」を発表</title>
<link>http://codezine.jp/article/detail/14928</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14928</guid>
<pubDate>Tue, 28 Sep 2021 09:00:00 +0900</pubDate>
<description>　米Googleは、Google Kubernetes Engine（GKE）への継続的デリバリをより簡単に、より速く、より信頼性の高いものにする、マネージド継続的デリバリサービス「Google Cloud Deploy」を、9月23日（現地時間）に発表した。
</description>
</item>
<item>
<title>OpenJDKディストリビューション「Eclipse Temurin 17」がリリース</title>
<link>http://codezine.jp/article/detail/14930</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14930</guid>
<pubDate>Tue, 28 Sep 2021 09:00:00 +0900</pubDate>
<description>　Eclipse Adoptiumプロジェクトは、独自OpenJDKディストリビューションの最新版となる「Eclipse Temurin 17」の提供を、9月23日（現地時間）に開始した。
</description>
</item>
<item>
<title>Google CloudのAPI管理プラットフォーム「Apigee」、GraphQL APIをネイティブサポート</title>
<link>http://codezine.jp/article/detail/14927</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14927</guid>
<pubDate>Tue, 28 Sep 2021 08:00:00 +0900</pubDate>
<description>　米Googleは、Google CloudのAPI管理プラットフォームである「Apigee」が、GraphQL APIをサポートしたことを9月24日（現地時間）に発表した。
</description>
</item>
<item>
<title>オープンソースのデスクトップ環境「GNOME 41」がリリース</title>
<link>http://codezine.jp/article/detail/14929</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14929</guid>
<pubDate>Tue, 28 Sep 2021 08:00:00 +0900</pubDate>
<description>　GNOME Foundaionは、X Windows System上で動作するオープンソースのデスクトップ環境であるGNOMEの最新バージョンとなる「GNOME 41」を9月22日（現地時間）にリリースした。
</description>
</item>
<item>
<title>決済業界を牽引するGMOペイメントゲートウェイ CTOに訊く、多様な決済システムを創るエンジニア組織と開発の実態とは？</title>
<link>http://codezine.jp/article/detail/14785</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14785</guid>
<pubDate>Mon, 27 Sep 2021 12:00:00 +0900</pubDate>
<description>　数あるFinTech企業の中でも決済サービスを主力に幅広い事業を展開し、決済業界のリーディングカンパニーとして名高いGMOペイメントゲートウェイ。公共料金の支払いやEC決済の裏側を支える決済代行業として長い歴史を持ち、業界における高い経験値を得ているが、今後も新しいことに挑戦をし続けるべく、直近ではキャッシュレス決済やBNPL（後払い決済）などの決済システム5種類リリースするほど破竹の勢いだ。ここで常務執行役員CTOを務めているのが三谷隆氏。「事業会社の内製化やグローバル展開にチャレンジしたい」と5年前にGMOペイメントゲートウェイに入社した三谷氏に、同社の開発スタイルや社風について語ってもらった。
</description>
</item>
<item>
<title>ファインディ、エンジニアの技術力を定量的に振り返ることができる新機能「スキル偏差値の月別推移」をリリース</title>
<link>http://codezine.jp/article/detail/14922</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14922</guid>
<pubDate>Mon, 27 Sep 2021 10:00:00 +0900</pubDate>
<description>　ファインディは、同社が運営するエンジニア採用プラットフォーム「Findy」において、エンジニアが自身の技術力を定量的に振り返ることができる新機能「スキル偏差値の月別推移」をリリースしたことを、9月22日に発表した。
</description>
</item>
<item>
<title>Gitリポジトリマネージャ「GitLab 14.3」がリリース</title>
<link>http://codezine.jp/article/detail/14924</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14924</guid>
<pubDate>Mon, 27 Sep 2021 09:00:00 +0900</pubDate>
<description>　米GitLabは、Web型GitリポジトリマネージャGitLabの最新版となる「GitLab 14.3」を、9月22日（現地時間）にリリースした。
</description>
</item>
<item>
<title>Azure Web Appsにて、1ステップでのデプロイタスクを可能にするGradleプラグインが提供開始</title>
<link>http://codezine.jp/article/detail/14923</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14923</guid>
<pubDate>Mon, 27 Sep 2021 08:00:00 +0900</pubDate>
<description>　米Microsoftは、Azure Web Apps用の新たなプラグインとして、ビルド自動化システムGradleプラグインの提供を、9月22日（現地時間）に開始した。
</description>
</item>
<item>
<title>システム開発や環境構築で使われる用語、ちゃんと意味を理解できてる？【IT用語クイズ】</title>
<link>http://codezine.jp/article/detail/14830</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14830</guid>
<pubDate>Mon, 27 Sep 2021 07:00:00 +0900</pubDate>
<description>『IT用語図鑑［エンジニア編］』（翔泳社、増井敏克）から、「システム開発や実行環境の構築で使われるIT用語」をクイズ形式で紹介（第3回）。自分の業務で使わない用語でも、知っておけば意思疎通が楽になるでしょう。
</description>
</item>
<item>
<title>ファインディ、IT/Webエンジニアの技術力を定量的に振り返ることができる新機能をリリース</title>
<link>http://codezine.jp/article/detail/14920</link>
<guid isPermaLink="true">http://codezine.jp/article/detail/14920</guid>
<pubDate>Fri, 24 Sep 2021 13:00:00 +0900</pubDate>
<description>　ファインディは、IT/Webエンジニア（以下、エンジニア）が自身の技術力を定量的に振り返ることができる新機能「スキル偏差値の月別推移」をリリースしたことを、9月22日に発表した。　
</description>
</item>
</channel>
</rss>
`;

export { testData };
