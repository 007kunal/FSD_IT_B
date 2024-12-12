import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/counter" element={<h2>Counter App</h2>} />
          <Route path="/stopwatch" element={<h2>Stop Watch</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
