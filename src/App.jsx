import { Route, Routes } from 'react-router-dom';
import { HomePage, StoriesPage, FeaturesPage, PricingPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="stories" element={<StoriesPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="pricing" element={<PricingPage />} />
      </Routes>
    </div>
  );
}

export default App;
