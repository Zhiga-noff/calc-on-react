import style from './CalcStyle.module.css';

export const Calc = () => {
  const calculatorButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <>
      <div className={style.container}>
        <div className={style.fieldResult}>100</div>
        <div className={style.calcContainer}>
          {calculatorButtons.map((button) => (
            <button className={style.buttonCalc} key={button}>
              {button}
            </button>
          ))}
          <button className={style.resultNow}>=</button>
        </div>
        <div className={style.actionButton}>
          <button>+</button>
          <button>-</button>
          <button>C</button>
        </div>
      </div>
    </>
  );
};

// Хук useState() принимает в первый аргумент начальное значение состояния и возвращает
// массив из двух элементов: текущее значение состояния и функцию для установки нового значения
