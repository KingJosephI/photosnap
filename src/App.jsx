import { Route, Routes } from 'react-router-dom';
import { Homepage, StoriesPage, FeaturesPage, PricingPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="stories" element={<StoriesPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="pricing" element={<PricingPage />} />
      </Routes>
    </div>
  );
}

export default App;
