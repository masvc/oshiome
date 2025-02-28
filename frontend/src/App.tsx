import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SessionProvider } from './SessionProvider';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';

function App() {
  return (
    <SessionProvider>
      <Router future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </SessionProvider >
  );
}

export default App;
