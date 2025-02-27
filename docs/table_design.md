# テーブル設計

## 1. ユーザーテーブル（Users）

Supabase Auth で認証するユーザーの追加情報を保存するテーブルです。

| 項目名      | データ型                     | 桁数・備考             | 制約                     |
|-------------|------------------------------|------------------------|--------------------------|
| id          | UUID                         | 例: auto-generated     | PRIMARY KEY              |
| name        | VARCHAR(100)                 | 最大100文字            | NOT NULL                 |
| email       | VARCHAR(255)                 | 最大255文字、ユニーク  | NOT NULL, UNIQUE         |
| created_at  | TIMESTAMP WITH TIME ZONE     | デフォルト: now()      | DEFAULT now()            |
| updated_at  | TIMESTAMP WITH TIME ZONE     | デフォルト: now()      | DEFAULT now()            |

## 2. 企画テーブル（Campaigns）

企画者が作成する誕生日企画の情報を管理します。

| 項目名      | データ型                     | 桁数・備考             | 制約                     |
|-------------|------------------------------|------------------------|--------------------------|
| id          | UUID                         | 例: auto-generated     | PRIMARY KEY              |
| title       | VARCHAR(255)                 | 最大255文字            | NOT NULL                 |
| description | TEXT                         |                        |                          |
| goal_amount | NUMERIC(10,2)                | 例: 12345678.90        | NOT NULL (目標金額)      |
| creator_id  | UUID                         | Usersテーブルのid      | NOT NULL, FOREIGN KEY → Users(id) |
| start_date  | DATE                         | 支援募集開始日         | NOT NULL                 |
| end_date    | DATE                         | 支援募集終了日         | NOT NULL                 |
| status      | VARCHAR(50)                  | 例: “draft”, “active”, “completed” | NOT NULL |
| created_at  | TIMESTAMP WITH TIME ZONE     | デフォルト: now()      | DEFAULT now()            |
| updated_at  | TIMESTAMP WITH TIME ZONE     | デフォルト: now()      | DEFAULT now()            |

## 3. 支援テーブル（Contributions）

どのユーザーがどの企画に対して、いくら支援したかを記録します。

| 項目名          | データ型                     | 桁数・備考             | 制約                     |
|-----------------|------------------------------|------------------------|--------------------------|
| id              | UUID                         | 例: auto-generated     | PRIMARY KEY              |
| campaign_id     | UUID                         | Campaignsテーブルのid  | NOT NULL, FOREIGN KEY → Campaigns(id) |
| supporter_id    | UUID                         | Usersテーブルのid      | NOT NULL, FOREIGN KEY → Users(id) |
| amount          | NUMERIC(10,2)                | 支援金額               | NOT NULL                 |
| payment_status  | VARCHAR(50)                  | 例: “pending”, “succeeded”, “failed” | NOT NULL |
| created_at      | TIMESTAMP WITH TIME ZONE     | デフォルト: now()      | DEFAULT now()            |

## 4. 決済テーブル（Payments）

Stripe（またはテスト用決済）の決済情報を個別に記録します。

| 項目名              | データ型                     | 桁数・備考             | 制約                     |
|---------------------|------------------------------|------------------------|--------------------------|
| id                  | UUID                         | 例: auto-generated     | PRIMARY KEY              |
| contribution_id     | UUID                         | Contributionsテーブルのid | NOT NULL, FOREIGN KEY → Contributions(id) |
| payment_method      | VARCHAR(50)                  | 例: “stripe”, “test”   | NOT NULL                 |
| payment_gateway_id  | VARCHAR(255)                 | Stripe側などの決済ゲートウェイのID | NOT NULL |
| status              | VARCHAR(50)                  | 例: “pending”, “succeeded”, “failed” | NOT NULL |
| created_at          | TIMESTAMP WITH TIME ZONE     | デフォルト: now()      | DEFAULT now()            |
