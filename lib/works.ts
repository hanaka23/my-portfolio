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
    id: "nuxt-todo-app",
    title: "Nuxtを用いたTodoアプリ",
    sections: [
      {
        heading: "【概要】",
        body: "Nuxtの学習を目的としてTodoアプリを作成した。",
      },
      {
        heading: "【機能】",
        body: "Todo新規作成、削除、完了チェック、全て／未完了のタブ切り替え、Firestoreによるデータ保存・取得・同期。",
      },
      {
        heading: "【開発を通して得た成果】",
        body: "Vue / Nuxtの基本ルール、リアクティブなデータ管理、テンプレート構文・ディレクティブ、コンポーネント間連携への理解が深まった。",
      },
      {
        heading: "【克服した点】",
        body: "Nuxtのディレクトリ構成規約、SSRとクライアントサイド実行の分離、組み込みコンポーザブルの理解。",
      },
    ],
    tech: [
      "ツール：Visual Studio Code, GitHub",
      "言語：TypeScript",
      "フレームワーク：Vue.js, Nuxt, Tailwind CSS",
    ],
    image: [
      {
        src: "nuxt_todo/nuxt_todo.png",
        alt: "Nuxt TodoアプリのTodo一覧画面",
        caption: "Todo一覧画面",
      },
      {
        src: "nuxt_todo/nuxt_todo2.png",
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
        body: "年齢入力に応じた動的フォーム生成、幸福度スライダー、コメント機能、グラフ表示、タップ時のコメント表示を実装。",
      },
    ],
    tech: ["ツール：Xcode", "言語：Swift", "フレームワーク：SwiftUI"],
    image: [
      {
        src: "swift_lifeGraph/swift_lifeGraph_1.png",
        alt: "人生グラフアプリの入力画面",
        caption: "入力画面",
      },
      {
        src: "swift_lifeGraph/swift_lifeGraph_2.png",
        alt: "人生グラフアプリのグラフ表示",
        caption: "グラフ表示",
      },
      {
        src: "swift_lifeGraph/swift_lifeGraph_3.png",
        alt: "人生グラフアプリのコメント表示",
        caption: "コメント表示",
      },
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
    ],
    tech: ["ツール：Xcode", "言語：Swift", "フレームワーク：SwiftUI"],
    image: [
      {
        src: "swift_quiz/swift_quiz_1.png",
        alt: "Swiftクイズアプリの問題画面",
        caption: "問題画面",
      },
      {
        src: "swift_quiz/swift_quiz_2.png",
        alt: "Swiftクイズアプリの正誤表示",
        caption: "正誤判定",
      },
      {
        src: "swift_quiz/swift_quiz_3.png",
        alt: "Swiftクイズアプリの結果画面",
        caption: "結果画面",
      },
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
    ],
    tech: [
      "ツール：Visual Studio Code, Android Studio, Firebase",
      "言語：Dart",
      "フレームワーク：Flutter",
    ],
    image: [
      {
        src: "flutter_message/flutter_message_1.png",
        alt: "Flutterメッセージアプリの投稿画面",
        caption: "投稿画面",
      },
      {
        src: "flutter_message/flutter_message_2.png",
        alt: "Flutterメッセージアプリの一覧画面",
        caption: "一覧画面",
      },
      {
        src: "flutter_message/flutter_message_3.png",
        alt: "Flutterメッセージアプリのログイン画面",
        caption: "認証画面",
      },
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
        body: "JavaScriptを使用し、SP画面のハンバーガーメニューなど動きのあるデザインを実装した。",
      },
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
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
        body: `JavaScriptを使用し、各種アニメーション・スライダーなど複数の動的UIを実装した。`,
      },
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
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
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
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
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
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
    ],
    tech: ["ツール：Visual Studio Code", "言語：HTML, CSS, JavaScript"],
    image: [
      {
        src: "lp_js/lp_js_pc.png",
        alt: "JavaScript機能実装課題",
        caption: "JS機能実装課題",
      },
    ],
  },
];
