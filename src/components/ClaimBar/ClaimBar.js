import React, { useState, useEffect } from 'react';
import './ClaimBar.css'

const ClaimBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const startDate = new Date('2024-04-02'); // Дата начала
      const currentDate = new Date(); // Текущая дата
      const totalDays = 100; // Общее количество дней для прогрессбара

      // Вычисляем количество пройденных дней с начала
      const elapsedDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

      // Вычисляем процент выполнения
      const progress = Math.min((elapsedDays / totalDays) * 100, 100);

      return progress;
    };

    setProgress(calculateProgress());
  }, []);

  return (
    <div className="claim-bar">
      <div className="progress" style={{ width: `${progress}%`, backgroundColor: '#172A3A' }}></div>
    </div>
  );
};

export default ClaimBar;
