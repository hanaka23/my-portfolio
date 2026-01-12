export const works = [
  {
    id: "head-pose-camera-control",
    title: "頭部方向推定を用いたカメラ操作アルゴリズム（IoT）",
    sections: [
      {
        heading: "【概要】",
        body: "操縦者の顔の向きと遠隔地にあるカメラの向きを同期するシステムPC内蔵カメラで人の頭部方向を推定し、そのデータをカメラに送信する。カメラはPCから送られてきた頭部方向を元に、角度を制し、映像をWebサーバでストリーミングする。",
      },
      {
        heading: "【実施内容】",
        body: "卒業研究として、制作物の思案、年間スケジュール、制作からテストまで一貫して行った。",
      },
      { heading: "【作業人数および担当ポジション】", body: "1人" },
      {
        heading: "【制作期間】",
        body: "202314から計画を初め、202412に学会で発表した。",
      },
      {
        heading: "【成果／他者からのFB】",
        body: "本システムは多様な活用方法の可能性があり、実際に使用できる要件を満たしている点を評価していただいた。",
      },
      {
        heading: "【ポイント・工夫点】",
        body: "膨大な調査量とトライアンドエラーが発生したため、エラーの原因を早期に特定できるよう、研究の経緯を毎日記録し振り返りを行った。また、期限内に完成させるため、年間計画と進捗管理に注力し、タスクの細分化やガントチャートの作成を行うことで、余裕を持ったスケジュール管理を実現した。",
      },
    ],
    tech: [
      "ツール：Visual Studio Code, Arduino IDE",
      "ライブラリ：OpenCV, Dlib",
      "言語：Python, Arduino, HTML",
    ],
    image: [
      {
        src: "graduation-reserch/system.png",
        alt: "頭部方向推定を用いたカメラ操作アルゴリズムのシステム構成図",
        caption: "トップ画像",
      },
      {
        src: "graduation-reserch/system.png",
        alt: "頭部方向推定を用いたカメラ操作アルゴリズムのシステム構成図",
        caption: "システム概要図",
      },
      {
        src: "graduation-reserch/demonstration.mp4",
        alt: "頭部方向推定を用いたカメラ操作の実演映像",
        caption: "実演の様子",
      },
    ],
  },

  {
    id: "inquiry-management-system",
    title: "問い合わせ管理システム",
    sections: [
      {
        heading: "【概要】",
        body: "react,next.jsの学習を目的として問い合わせ管理システムを作成した。",
      },
      {
        heading: "【機能】",
        body: `
ゲストは、公開された問い合わせフォームから、あらかじめ決められた項目を入力し、問い合わせを送信する。スタッフは問い合わせ管理画面で、未対応の問い合わせに回答する。回答に対するやりとりは、問い合わせに対してユニークに割り当てられたURL上のコミュニケーション画面でおこなう。

＜　問い合わせ機能　＞
問い合わせフォームで以下の項目を指定して問い合わせを送信できる。
・氏名（必須 / 16文字以下）
・メールアドレス（必須 / 200文字以下 / @必須）
・電話番号（必須 / 12文字以下）
・製品種別（必須 / A001, A002..., A016の全16種類のプルダウンメニュー）
・問い合わせ内容（必須 / 2000文字以下）
問い合わせを送信すると、問い合わせのコミュニケーションをおこなうURLが個別に割り当てられ、以降のコミュニケーションはそのURL上でおこなえる。

＜　問い合わせ管理画面サインアップ機能　＞
・氏名、メールアドレス、パスワードを使用して、Firebase Authenticationの機能を利用してアカウント登録する。

＜　問い合わせ管理画面ログイン機能　＞
・メールアドレスとパスワードのペアを使用して、Firebase Authenticationの機能を利用してログインする。

＜　問い合わせ管理画面ログアウト機能　＞
・ログアウト機能により、ログアウトできる。

＜　問い合わせ一覧機能　＞
・これまでの問い合わせを一覧できる。
　一覧できる項目は、対応状況・氏名・電話番号・製品種別・問い合わせ内容・問い合わせ日時。
　一覧機能では、問い合わせ内容は先頭の100文字までを表示できる。
・デフォルトでは未対応の問い合わせが古い順に一覧表示される。
・問い合わせを指定して、対応状況の詳細を確認できる。
　一覧の上部で表示を切り替えることで、対応済みの問い合わせや、対応中の問い合わせを一覧できる。

＜　問い合わせ詳細確認機能　＞
・指定した問い合わせの各項目を確認できる。
・これまでの対応履歴（対応者・対応日時・返信メッセージ・スタッフのコメント）を確認できる。
・「対応開始」ボタンを押すことで、ログイン中のスタッフで「対応中」にできる。

＜　問い合わせ対応機能　＞
・自分自身が「対応中」の問い合わせを指定して、以下の操作ができる。
    ー指定した問い合わせについて、問い合わせしてきたゲストに最大4000文字のメッセージを送信できる。
    ー指定した問い合わせに対し、スタッフのコメントを残しておくことができる。
・「対応完了」「未対応に戻す」ボタンを押すことで、それぞれ対応状況を変更できる。
・自分自身が「対応中」にした問い合わせでなければ、スタッフのコメントを残したり、メッセージを送ったりすることはできない。
`,
      },
      {
        heading: "【開発を通して得た成果】",
        body: `・Next.js/React/TypeScriptを用いた実践的なWebアプリケーション開発経験
        ・Firebase AuthenticationおよびFirestoreを活用したユーザー認証とデータ管理の理解
        `,
      },
    ],
    tech: [
      "ツール：Visual Studio Code",
      "言語：TypeScript",
      "フレームワーク：Next.js, React, Tailwind CSS",
      "DB：Firebase Authentication, Firestore",
    ],
    image: [
      {
        src: "inquiry_management_system/inquiry_management_system.png",
        alt: "問い合わせ管理システムのトップ画像",
        caption: "トップ画像",
      },
      {
        src: "inquiry_management_system/inquiry_form.png",
        alt: "問い合わせ管理システムの問い合わせフォーム",
        caption: "問い合わせフォーム画面",
      },
      {
        src: "inquiry_management_system/inquiry_chat.png",
        alt: "問い合わせ管理システムの問い合わせチャットルーム",
        caption: "問い合わせチャットルーム画面",
      },
      {
        src: "inquiry_management_system/inquiry_signup.png",
        alt: "問い合わせ管理システムのスタッフサインアップ",
        caption: "スタッフのアカウント登録画面",
      },
      {
        src: "inquiry_management_system/inquiry_login.png",
        alt: "問い合わせ管理システムのスタッフログイン",
        caption: "スタッフのログイン画面",
      },
      {
        src: "inquiry_management_system/inquiry_list.png",
        alt: "問い合わせ管理システムの問い合わせ一覧",
        caption: "問い合わせ一覧画面",
      },
      {
        src: "inquiry_management_system/inquiry_management.png",
        alt: "問い合わせ管理システムの問い合わせ対応",
        caption: "問い合わせ対応画面",
      },
      {
        src: "inquiry_management_system/inquiry_complete.png",
        alt: "問い合わせ管理システムの問い合わせ完了",
        caption: "問い合わせ完了画面",
      },
    ],
  },
  {
    id: "nuxt-todo-app",
    title: "Nuxtを用いたTodoアプリ",
    sections: [
      {
        heading: "【概要】",
        body: "Nuxtの学習を目的としてTodoアプリを作成した。",
      },
      {
        heading: "【機能】",
        body: `・Todo新規作成
・Todo削除
・完了のチェックボックス
・全て、未完了のタブ切り替え
・FireStoreにデータ保存、取得、同期`,
      },
      {
        heading: "【開発を通して得た成果】",
        body: `・Vue, Nuxtの基本ルールの理解
・リアクティブなデータ管理の理解
・テンプレート構文とディレクティブの理解
・コンポーネント間連携の理解`,
      },
      {
        heading: "【克服した点】",
        body: `・ディレクトリ構成規約の理解
・SSRとクライアントサイド実行の分離
・組み込みコンポーザブルの理解`,
      },
    ],
    tech: [
      "ツール：Visual Studio Code, GitHub",
      "言語：TypeScript",
      "フレームワーク：Vue.js, Nuxt, Tailwind CSS",
    ],
    image: [
      {
        src: "vue_todo/vue_todo.png",
        alt: "Nuxt Todoアプリのトップ画像",
        caption: "トップ画像",
      },
      {
        src: "vue_todo/vue_todo_1.png",
        alt: "Nuxt TodoアプリのTodo一覧画面",
        caption: "Todo一覧画面",
      },
      {
        src: "vue_todo/vue_todo_2.png",
        alt: "Nuxt Todoアプリのフィルタ切り替え画面",
        caption: "完了・未完了切り替え",
      },
    ],
  },

  {
    id: "swift-life-graph",
    title: "Swiftを用いた人生グラフアプリ",
    sections: [
      {
        heading: "【概要】",
        body: "Swift学習の一環として、人生の幸福度を可視化するアプリを作成した。",
      },
      { heading: "【作業人数】", body: "1人" },
      { heading: "【制作期間】", body: "1日" },
      {
        heading: "【ポイント・工夫点】",
        body: `【実装機能】
・年齢入力：自身の年齢をもとに、入力フォームの年齢範囲を動的に決定
・幸福度入力：各年齢ごとにスライダーで幸福度を入力
・コメント機能：年齢ごとに一言コメントを記録
・グラフ表示機能：入力した幸福度をグラフで可視化
・コメント表示機能：グラフの各点をタップすると対応するコメントを表示

【工夫した点】
・状態管理と画面遷移の分離：各画面を別ファイル・構造体に分けることで、可読性と保守性を向上
・幸福度の数値だけでなく、感情や出来事を記録できるコメント機能を追加

【開発を通して得た成果】
・SwiftUIの構造的理解：状態管理、画面遷移、動的なView生成など、SwiftUIの基礎スキルを習得
・データ構造とロジック設計力の向上：ユーザー入力に応じてリストやグラフを動的に構築するロジックを通じて、Swiftにおけるデータ構造への理解が深まった`,
      },
    ],
    tech: ["ツール：Xcode", "言語：Swift", "フレームワーク：SwiftUI"],
    image: [
      {
        src: "swift_life_graph/swift_life_graph.png",
        alt: "人生グラフアプリのトップ画像",
        caption: "トップ画像",
      },
      {
        src: "swift_life_graph/swift_life_graph.png",
        alt: "人生グラフアプリのトップ画像",
        caption: "人生グラフアプリ",
      },
      // {
      //   src: "swift_life_graph/swift_life_graph_1.png",
      //   alt: "人生グラフアプリの入力画面",
      //   caption: "入力画面",
      // },
      // {
      //   src: "swift_life_graph/swift_life_graph_2.png",
      //   alt: "人生グラフアプリのグラフ表示",
      //   caption: "グラフ表示",
      // },
      // {
      //   src: "swift_life_graph/swift_life_graph_3.png",
      //   alt: "人生グラフアプリのコメント表示",
      //   caption: "コメント表示",
      // },
    ],
  },

  {
    id: "swift-quiz-app",
    title: "Swiftを用いたクイズアプリ",
    sections: [
      {
        heading: "【概要】",
        body: "Swift学習の一環としてクイズアプリを作成した。",
      },
      { heading: "【作業人数】", body: "1人" },
      { heading: "【制作期間】", body: "1日" },
      {
        heading: "【ポイント・工夫点】",
        body: `【実装機能】
・クイズの出題：
　各質問の正解を設定し、ユーザーが選択した回答を評価する機能
・スコア管理：
　正解数をカウントし、ユーザーに最終スコアを表示する機能
・結果画面：
　クイズ終了後に結果を表示し、再挑戦や他カテゴリへのリンクを提供

【工夫した点】
・不正解時に正解を表示するUIを実装し、回答表示時もレイアウトが崩れないよう配慮したコーディングを行った

【開発を通して得た成果】
・プログラミングスキルの向上：
　Swift言語やiOS開発の理解が深まり、特にUI設計やデータ管理のスキルが向上した
・問題解決能力の向上：
　開発中の課題解決を通して、論理的思考力が鍛えられた`,
      },
    ],
    tech: ["ツール：Xcode", "言語：Swift", "フレームワーク：SwiftUI"],
    image: [
      {
        src: "swift_quiz/swift_quiz.png",
        alt: "Swiftクイズアプリのトップ画像",
        caption: "トップ画像",
      },
      {
        src: "swift_quiz/swift_quiz.png",
        alt: "Swiftクイズアプリのトップ画像",
        caption: "Swiftクイズアプリ",
      },
      // {
      //   src: "swift_quiz/swift_quiz_1.png",
      //   alt: "Swiftクイズアプリの問題画面",
      //   caption: "問題画面",
      // },
      // {
      //   src: "swift_quiz/swift_quiz_2.png",
      //   alt: "Swiftクイズアプリの正誤表示",
      //   caption: "正誤判定",
      // },
      // {
      //   src: "swift_quiz/swift_quiz_3.png",
      //   alt: "Swiftクイズアプリの結果画面",
      //   caption: "結果画面",
      // },
    ],
  },

  {
    id: "flutter-message-app",
    title: "FlutterとFirebaseを用いたメッセージ投稿アプリ",
    sections: [
      {
        heading: "【概要】",
        body: "FlutterとFirebaseを用いてメッセージ投稿アプリを作成した。",
      },
      { heading: "【作業人数】", body: "1人" },
      { heading: "【制作期間】", body: "1日" },
      {
        heading: "【ポイント・工夫点】",
        body: `- 実装機能
・サインアップ機能
・ログイン機能
・メッセージ一覧表示機能
・メッセージ投稿機能
・メッセージ削除機能

- 工夫した点
・Firebase Authenticationを利用して、サインアップやログインをシンプルに実装した。
・グローバルデザインを学習し、UXを向上できるようなデザインを行った。

- 克服した点
・Flutterの状態管理についての理解が難しかったが、公式ドキュメントやサンプルコードを参考にし、StatefulWidgetを使った状態管理を実装できるようになった。
・Firestoreのデータ構造について知識が不足していたため、サイトや書籍を参考に学習し、適切なデータ設計と最適化を行った。

- 開発を通して得た成果
・FlutterとFirebaseを使用したモバイルアプリ開発の一連の流れを理解し、実装できる力を身につけた。
・UI/UXデザインの重要性を理解し、ユーザーにとって使いやすいアプリケーションを作る意識が身についた。`,
      },
    ],
    tech: [
      "ツール：Visual Studio Code, Android Studio, Firebase",
      "言語：Dart",
      "フレームワーク：Flutter",
    ],
    image: [
      {
        src: "flutter_message/flutter_message.png",
        alt: "Flutterメッセージアプリのトップ画像",
        caption: "トップ画像",
      },
      {
        src: "flutter_message/flutter_message.png",
        alt: "Flutterメッセージアプリのトップ画像",
        caption: "Flutterメッセージアプリ",
      },
      // {
      //   src: "flutter_message/flutter_message_1.png",
      //   alt: "Flutterメッセージアプリの投稿画面",
      //   caption: "投稿画面",
      // },
      // {
      //   src: "flutter_message/flutter_message_2.png",
      //   alt: "Flutterメッセージアプリの一覧画面",
      //   caption: "一覧画面",
      // },
      // {
      //   src: "flutter_message/flutter_message_3.png",
      //   alt: "Flutterメッセージアプリのログイン画面",
      //   caption: "認証画面",
      // },
    ],
  },

  {
    id: "lp-headphone",
    title: "高級ヘッドホンLP制作",
    sections: [
      {
        heading: "【概要】",
        body: "デザインカンプをもとにレスポンシブコーディングを実施した。",
      },
      { heading: "【実施内容】", body: "コーディング" },
      { heading: "【制作期間】", body: "1週間" },
      {
        heading: "【ポイント・工夫点】",
        body: `・動きのあるデザインの実装
JavaScriptを使用して、SP画面のハンバーガーメニューの動的機能を実装した。`,
      },
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
      {
        src: "lp_headphone/lp_headphone.png",
        alt: "高級ヘッドホンLPのトップ画像",
        caption: "トップ画像",
      },
      {
        src: "lp_headphone/lp_headphone_pc.png",
        alt: "高級ヘッドホンLP",
        caption: "高級ヘッドホンLP",
      },
    ],
  },

  {
    id: "lp-vegetable",
    title: "野菜宅配サービスLP制作",
    sections: [
      {
        heading: "【概要】",
        body: "デザインカンプをもとにレスポンシブコーディングを実施した。",
      },
      { heading: "【実施内容】", body: "コーディング" },
      { heading: "【制作期間】", body: "1週間" },
      {
        heading: "【ポイント・工夫点】",
        body: `・動きのあるデザインの実装
JavaScriptを使用して
・ハンバーガーメニュー
・スクロール時にふわっと出てくる
・ホバーするとカタカタ動く
・ホバーすると画像が暗くなり説明文が表示される
・ふわふわと上下に動く
・スライダー
といった動的機能を実装した。`,
      },
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
      {
        src: "lp_vegetable/lp_vegetable.png",
        alt: "野菜宅配サービスLPのトップ画像",
        caption: "トップ画像",
      },
      {
        src: "lp_vegetable/lp_vegetable_pc.png",
        alt: "野菜宅配サービスLP",
        caption: "野菜宅配サービスLP",
      },
    ],
  },

  {
    id: "lp-suncream",
    title: "日焼け止めLP制作",
    sections: [
      {
        heading: "【概要】",
        body: "デザインカンプをもとにレスポンシブコーディングを実施した。",
      },
      { heading: "【実施内容】", body: "コーディング" },
      { heading: "【制作期間】", body: "1週間" },
      {
        heading: "【ポイント・工夫点】",
        body: `・動きのあるデザインの実装
JavaScriptを使用して
・ハンバーガーメニュー
・ホバー時の色の変化
・ループするスライダー
といった動的機能を実装した。`,
      },
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
      {
        src: "lp_suncream/lp_suncream.png",
        alt: "日焼け止めLPのトップ画像",
        caption: "トップ画像",
      },
      {
        src: "lp_suncream/lp_suncream_pc.png",
        alt: "日焼け止めLP",
        caption: "日焼け止めLP",
      },
    ],
  },

  {
    id: "media-site",
    title: "メディアサイト制作",
    sections: [
      {
        heading: "【概要】",
        body: "デザインカンプをもとにレスポンシブコーディングを実施した。",
      },
      { heading: "【実施内容】", body: "コーディング" },
      { heading: "【制作期間】", body: "20時間" },
      {
        heading: "【ポイント・工夫点】",
        body: `・動きのあるデザインの実装
JavaScriptを使用して
・ハンバーガーメニュー
・ホバー時の色の変化
・PC時はスライダー、SPではスクロール
といった動的機能を実装した。`,
      },
      {
        heading: "【講師の方からのFB】",
        body: `・レスポンシブが丁寧に作られていて良い
・画像のアスペクト比が保ったままできている
・htmlのlang="ja"にする
・Hamburgerボタンはbuttonタグで作りましょう
・hrは文脈の区切りで、装飾目的では使わないようにしましょう`,
      },
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
      {
        src: "lp_mediasite/lp_media_site.png",
        alt: "メディアサイトのトップ画像",
        caption: "トップ画像",
      },
      {
        src: "lp_mediasite/lp_mediasite_pc.png",
        alt: "メディアサイト",
        caption: "メディアサイト",
      },
    ],
  },

  {
    id: "js-practice",
    title: "JavaScript機能実装課題",
    sections: [
      { heading: "【概要】", body: "6つ＋αのJavaScript機能を実装した課題。" },
      { heading: "【制作期間】", body: "16時間" },
      {
        heading: "【ポイント・工夫点】",
        body: "JavaScriptを使用して動きのあるデザインの実装\n・スライドショー\n・ドロワーメニュー\n・モーダルウィンドウ\n・タブメニュー\n・ハンバーガーメニュー\n・アコーディオンパネル\n・(+α)自動再生のモーダルウィンドウ\nといった動的機能を実装した。",
      },
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
      {
        src: "lp_js/lp_js.png",
        alt: "JavaScript機能実装課題のトップ画像",
        caption: "トップ画像",
      },
      {
        src: "lp_js/lp_js_pc.png",
        alt: "JavaScript機能実装課題",
        caption: "JS機能実装課題",
      },
    ],
  },
];
