
import React from 'react';
import './Load.css'; // Подключаем стили для Desktop

const Load = () => {
  return (
    <div className="load-container">
      <div className="load-ring"></div> {/* Загрузочное кольцо */}
      <div className="load-text">Loading...</div> {/* Текст "Loading..." */}
    </div>
  );
};

export default Load;
