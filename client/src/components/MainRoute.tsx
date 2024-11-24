import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AnalysisSelector from './AnalysisSelector';
import AnthropometryForm from './AnthropometryForm';
import Register from './Register';

const MainRoute: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Главная страница</h1>
      <button onClick={() => navigate('/register')}>Регистрация</button>
      <button onClick={() => navigate('/analysis')}>Выбор анализа</button>
    </div>
  );
};

export default MainRoute;
