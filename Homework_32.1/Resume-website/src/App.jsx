import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoPage from './pages/TodoPage.jsx';
import SwapiPage from './pages/SwapiPage.jsx';
import MainPage from "./pages/MainPage.jsx";

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Router>
                <Header />
                <div style={{ flex: 1 }}>
                    <Routes >
                        <Route path="/" element={<MainPage />} />
                        <Route path="/todo" element={<TodoPage />} />
                        <Route path="/swapi" element={<SwapiPage />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;