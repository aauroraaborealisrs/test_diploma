import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnalysisSelector from './components/AnalysisSelector';
import AnthropometryForm from './components/AnthropometryForm';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Главная страница с выбором анализа */}
                    <Route path="/" element={<AnalysisSelector />} />
                    
                    {/* Маршрут для формы антропометрии */}
                    <Route path="/analysis/anthropometry" element={<AnthropometryForm />} />

                    {/* Можно добавить маршруты для других анализов */}
                    {/* <Route path="/analysis/blood" element={<BloodAnalysisForm />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
