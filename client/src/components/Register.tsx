import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = { email, password, name, surname, middlename, birth_date: birthDate };
        console.log(user)
        
        // Отправляем запрос на сервер для регистрации пользователя
        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            const result = await response.json();
            console.log(result);
            alert('Регистрация успешна!');
            navigate('/'); // Используем navigate вместо history.push
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            alert('Ошибка регистрации');
        }
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Фамилия" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                <input type="text" placeholder="Отчество (необязательно)" value={middlename} onChange={(e) => setMiddlename(e.target.value)} />
                <input type="date" placeholder="Дата рождения" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Register;
