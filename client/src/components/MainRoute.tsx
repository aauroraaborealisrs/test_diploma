import React from 'react';
import { useNavigate } from 'react-router-dom';

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
