import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import Layout from './components/Layout'
import Story from './Pages/Story';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          <Route path="/story/:id" element={<Story />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
