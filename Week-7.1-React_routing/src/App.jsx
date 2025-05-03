import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// Lazy loaded components
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {

  //Suspense API
  return (
      <div>
    <BrowserRouter>
        <Appbar />
          <Routes>
            <Route path="/dashboard" element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>} />
            <Route path="/" element={<Suspense fallback={'loading...'}><Landing /></Suspense>} />
          </Routes>
    </BrowserRouter>
      </div>
  );
}

// Fixed Appbar inside BrowserRouter context
function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Landing Page</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  );
}

export default App;
