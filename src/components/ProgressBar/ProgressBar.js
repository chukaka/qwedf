import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ duration }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress > 0) {
          return prevProgress - (1000 / duration);
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 10); // Интервал обновления состояния (мс)

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
