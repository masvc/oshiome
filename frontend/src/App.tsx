import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-oshi">
      <div className="max-w-7xl mx-auto p-8 text-center">
        <div className="flex justify-center gap-8">
          <a
            href="https://vitejs.dev"
            target="_blank"
            className="transition-transform hover:-translate-y-1"
          >
            <img src={viteLogo} className="h-24 p-6" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="transition-transform hover:-translate-y-1"
          >
            <img
              src={reactLogo}
              className="h-24 p-6 animate-[spin_20s_linear_infinite]"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-oshi-indigo mt-8 mb-12">
          推しおめ！
        </h1>

        <div className="bg-white/80 p-8 rounded-3xl border-2 border-oshi-pink shadow-lg shadow-oshi-pink/20 transition-transform hover:-translate-y-1">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-white rounded-lg border border-oshi-purple/30 hover:border-oshi-purple transition-colors"
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit{' '}
            <code className="font-mono bg-gray-100 px-2 py-1 rounded">
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </div>

        <p className="mt-8 text-oshi-pink font-medium">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
