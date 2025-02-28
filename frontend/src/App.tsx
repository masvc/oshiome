import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  return (
    <Router
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
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
            <button className="px-6 py-3 text-oshi-purple border border-oshi-purple rounded-full hover:bg-oshi-pink transition-colors">
              企画を始める
            </button>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
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
    </Router>
  );
}

export default App;
