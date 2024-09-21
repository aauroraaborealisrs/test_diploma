import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnalysisSelector: React.FC = () => {
    const [selectedAnalysis, setSelectedAnalysis] = useState<string>('');
    const navigate = useNavigate();

    const handleAnalysisChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const analysisType = event.target.value;
        setSelectedAnalysis(analysisType);
        if (analysisType) {
            navigate(`/analysis/${analysisType}`);
        }
    };

    return (
        <div>
            <h2>Выберите анализ</h2>
            <select value={selectedAnalysis} onChange={handleAnalysisChange}>
                <option value="">-- Выберите анализ --</option>
                <option value="anthropometry">Антропометрия</option>
                {/* Добавьте другие анализы */}
                {/* <option value="blood">Анализ крови</option> */}
            </select>
        </div>
    );
};

export default AnalysisSelector;
