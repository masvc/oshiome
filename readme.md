# 推しおめ（OshiOme）

推し（Vtuber、アイドル等）の誕生日を祝うためのクラウドファンディングプラットフォーム

## 現在の構成

```
oshiome/
├── frontend/           # フロントエンドアプリケーション
│   ├── public/        # 静的ファイル
│   ├── src/           # ソースコード
│   ├── package.json   # 依存関係
│   └── vite.config.ts # Vite設定
├── docs/              # ドキュメント
│   └── plan.md        # プロジェクト企画書
├── list/              # アセット
│   ├── *.png         # 画像ファイル
│   └── list.md       # リスト
├── icon.png           # プロジェクトアイコン
└── readme.md          # 本ドキュメント
```

## 技術スタック

- フロントエンド

  - React + TypeScript
  - Vite (ビルドツール)
  - TailwindCSS (スタイリング)

- バックエンド

  - Supabase
    - PostgreSQL (データベース)
    - Auth (認証)
    - Storage (ファイルストレージ)

- デプロイ
  - Vercel (フロントエンド)
    - https://oshiome.vercel.app/

詳細な計画は [plan.md](./docs/plan.md) を参照してください。
