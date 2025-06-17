import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateFunnel from './pages/CreateFunnel';
import FunnelDetails from './pages/FunnelDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateFunnel />} />
        <Route path="/funnel/:id" element={<FunnelDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
