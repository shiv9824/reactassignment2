import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AppRoutes from './Routes';

// Home component
function Home() {
  return <h2>Home Page</h2>;
}

// About component
function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
    
            <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </BrowserRouter> */}

      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
