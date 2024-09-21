import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AnalysisForm: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const [data, setData] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Данные анализа:', data);
        alert('Данные отправлены!');
    };

    return (
        <div>
            <h2>Антропометрия и биоимпедансометрия</h2>
            <form onSubmit={handleSubmit} className='column'>
                {type === 'blood' && (
                    <>
                        <input type="number" name="hemoglobin" placeholder="Гемоглобин" onChange={handleChange} required />
                        <input type="number" name="leukocytes" placeholder="Лейкоциты" onChange={handleChange} required />
                    </>
                )}
                {type === 'anthropometry' && (
                    <>
                        <input type="number" name="height" placeholder="Рост (см)" onChange={handleChange} required />
                        <input type="number" name="weight" placeholder="Вес (кг)" onChange={handleChange} required />
                        <input type="number" name="waist" placeholder="Окружность талии (см)" onChange={handleChange} />
                        <input type="number" name="hip" placeholder="Окружность бедер (см)" onChange={handleChange} />
                    </>
                )}
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default AnalysisForm;
