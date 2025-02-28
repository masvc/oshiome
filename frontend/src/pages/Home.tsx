import { useContext } from 'react';
import { SessionContext } from '../SessionProvider';
import { authRepository } from '../repositories/auth';
import { Navigate } from 'react-router-dom';

function Home() {
    const [currentUser, setCurrentUser] = useContext(SessionContext);

    const signout = async () => {
        await authRepository.signout();
        setCurrentUser(null);
    }

    // 現状はログインしていない場合はログインページにリダイレクトしてます。
    // 恐らく本画面は未ログインでも閲覧可能のページだと思うのでログイン用のボタン表示をどこかに追加が必要だと思います。
    if (currentUser == null) return <Navigate replace to={"/signin"} />

    return (
        <div className="min-h-screen">
            {/* ヘッダー */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-oshi-purple">
                        <a href="/" className="flex items-center gap-2">
                            推しおめ
                            <span className="text-sm font-normal text-gray-500">JAPAN</span>
                        </a>
                    </h1>
                    <button
                        onClick={signout}
                        className="px-6 py-3 text-oshi-purple border border-oshi-purple rounded-full hover:bg-oshi-pink transition-colors">
                        ログアウト
                    </button>
                    <button className="px-6 py-3 text-oshi-purple border border-oshi-purple rounded-full hover:bg-oshi-pink transition-colors">
                        企画を始める
                    </button>
                </div>
            </header>

            {/* メインコンテンツ */}
            <main>
                <div>
                    {/* ヒーローセクション */}
                    <section className="bg-gradient-to-b from-oshi-pink to-white py-20">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-bold text-gray-800 mb-6">
                                    <span className="bg-gradient-to-r from-oshi-purple to-oshi-pink bg-clip-text text-transparent">
                                        推しの誕生日を、
                                    </span>
                                    <br />
                                    <span>みんなで祝おう！</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    クラウドファンディングで
                                    <br />
                                    誕生日企画を実現しませんか？
                                </p>
                                <button className="bg-oshi-purple text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                                    企画を見る
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* 応援広告とは？セクション */}
                    <section className="py-24" id="whats">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="text-center mb-16">
                                <p className="text-oshi-purple font-medium mb-2 text-lg">
                                    WHAT IS BIRTHDAY ADS
                                </p>
                                <h2 className="text-4xl font-bold text-gray-800">
                                    応援広告とは？
                                </h2>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="max-w-3xl mx-auto">
                                    <p className="text-gray-700 leading-relaxed text-center text-lg">
                                        推しの誕生日を、ファンみんなでお祝いする新しい形。
                                        <br />
                                        駅や街頭ビジョンなどに広告を出して、
                                        <br />
                                        大切な推しの特別な日を盛り上げましょう！
                                    </p>
                                </div>
                                <img
                                    src="src/assets/img/sample.jpg"
                                    alt="サンプル画像"
                                    className="ml-4 w-1/3 rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* 注目の企画セクション */}
                    <section className="bg-gray-50 py-20">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex justify-between items-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-800">
                                    進行中の企画
                                </h2>
                                <a
                                    href="#"
                                    className="text-oshi-purple hover:underline"
                                >
                                    もっと見る
                                </a>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* 企画カード */}
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                                    >
                                        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                                            <img
                                                src={`https://picsum.photos/seed/oshiome-${i}/800/450`}
                                                alt="企画のサムネイル"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <div className="text-sm text-oshi-purple font-medium mb-2">
                                                残り3日
                                            </div>
                                            <h4 className="font-bold mb-2 line-clamp-2">
                                                ○○さんの誕生日を渋谷の大型ビジョンでお祝い！
                                            </h4>
                                            <div className="h-1 bg-gray-200 rounded-full mb-2">
                                                <div
                                                    className="h-1 bg-oshi-purple rounded-full"
                                                    style={{ width: '70%' }}
                                                ></div>
                                            </div>
                                            <div className="flex justify-between text-sm text-gray-600">
                                                <span>達成率 70%</span>
                                                <span>支援者 123人</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 使い方セクション */}
                    <section className="bg-oshi-pink bg-opacity-30 rounded-2xl p-8 mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
                            推しおめの使い方
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: '企画を作成',
                                    desc: '推しの誕生日企画を立ち上げて、目標金額を設定します',
                                },
                                {
                                    title: 'みんなで支援',
                                    desc: '同じ推しのファンから支援を募って目標達成を目指します',
                                },
                                {
                                    title: '企画実現',
                                    desc: '目標達成後、広告の掲載やイベントを実施します',
                                },
                            ].map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-12 h-12 bg-oshi-purple text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                        {i + 1}
                                    </div>
                                    <h4 className="font-bold mb-2">{step.title}</h4>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* お問い合わせセクション */}
                    <section className="bg-gradient-to-br from-oshi-pink via-white to-oshi-purple/10 py-20">
                        <div className="max-w-7xl mx-auto px-4 text-center">
                            <h2 className="text-4xl font-bold text-gray-800 mb-8">
                                CONTACT US
                            </h2>
                            <p className="text-gray-600 mb-12">
                                推しの誕生日企画について、お気軽にご相談ください
                            </p>
                            <button className="bg-oshi-purple text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg font-medium">
                                お問い合わせフォーム
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            {/* フッター */}
            <footer className="bg-white border-t">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="text-center">
                        <h3 className="text-xl font-medium mb-4">Stay tuned</h3>
                        <p className="text-gray-600 mb-6">
                            Follow our story on Twitter and Instagram
                        </p>
                        <div className="flex justify-center gap-4 mb-8">
                            {/* SNSアイコン */}
                        </div>
                        <small className="text-gray-500">&copy; 2024 推しおめ</small>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
