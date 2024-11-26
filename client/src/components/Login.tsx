import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Очистка ошибок перед отправкой

    try {
      const response = await fetch("https://test1-tvxg.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ошибка входа");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token); // Сохраняем токен в localStorage
      alert("Вы успешно вошли в систему!");
      navigate("/"); // Перенаправление на другую страницу
    } catch (err: any) {
      setError(err.message || "Неизвестная ошибка");
    }
  };

  return (
    <div className="login-form">
      <h2>Вход</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="column">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="column">
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
