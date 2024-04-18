import React, { useEffect } from 'react';
import './Stars.css';

function Stars() {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');

      // Размер и начальная позиция звезды
      const starSize = Math.random() * 3 + 1; // От 1 до 4 пикселей
      star.style.width = `${starSize}px`;
      star.style.height = `${starSize}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;

      // Случайные конечные координаты и масштаб для анимации
      const xEnd = 1000 * (Math.random() - 0.5); // От -1000 до 1000 пикселей по X
      const yEnd = 1000 * (Math.random() - 0.5); // От -1000 до 1000 пикселей по Y
      const scaleEnd = Math.random() * 1.5 + 0.5; // Масштаб от 0.5 до 2

      // Применяем переменные к анимации
      star.style.setProperty('--x-end', `${xEnd}px`);
      star.style.setProperty('--y-end', `${yEnd}px`);
      star.style.setProperty('--scale-end', scaleEnd);

      // Назначаем анимацию
      star.style.animation = `fly ${Math.random() * 3 + 2}s linear forwards`;

      // Добавляем звезду на страницу и удаляем ее после завершения анимации
      document.body.appendChild(star);
      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    // Создаем звезды каждые 100 миллисекунд
    const interval = setInterval(createStar, 100);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, []); // Зависимость useEffect пустая, чтобы компонент выполнился только один раз при монтировании

  return null; // Компонент не отображает ничего, так как все звезды добавляются непосредственно на страницу
}

export default Stars;
