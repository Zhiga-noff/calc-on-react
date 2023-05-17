import { useState } from 'react';
import style from './MyComponent.module.css';

export const MyComponent = () => {
  const [value, setValue] = useState(0);
  const [showText, setShowText] = useState(true);
  const [showRedText, setShowRedText] = useState(true);

  const onCLickFunction = () => {
    setShowText(!showText);
    setShowRedText(!showRedText);
    console.log(showText);
  };

  const text = <div className={showRedText ? style.red : style.white}>Текст</div>;
  return (
    <>
      {text}
      <button onClick={onCLickFunction}>Изменить цвет текста</button>
    </>
  );
};

// Хук useState() принимает в первый аргумент начальное значение состояния и возвращает
// массив из двух элементов: текущее значение состояния и функцию для установки нового значения
