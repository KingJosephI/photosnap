import { Route, Routes } from 'react-router-dom';
import Features from './pages/Features';
import Homepage from './pages/Homepage/Homepage';
import Pricing from './pages/Pricing';
import Stories from './pages/Stories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="stories" element={<Stories />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
