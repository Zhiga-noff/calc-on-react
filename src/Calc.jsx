import style from './CalcStyle.module.css';
import { useState } from 'react';
import * as func from './modules/changeFunc';
import { getResult } from './modules/changeFunc';

const calculatorButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const Calc = () => {
  const [result, setResult] = useState(0);
  const [symbolFlag, setSymbolFlag] = useState('');
  const [actionFlag, setActionFlag] = useState('');
  const [count, setCount] = useState(0);
  const [styleResult, setStyleResult] = useState(style.fieldResult);

  return (
    <>
      <div className={`${style.container}`}>
        <div className={styleResult}>{result}</div>
        <div className={style.calcContainer}>
          {calculatorButtons.map((button) => (
            <button
              className={style.buttonCalc}
              key={button}
              onClick={() => {
                func.changeFieldResult(
                  button,
                  result,
                  setResult,
                  actionFlag,
                  setActionFlag,
                  setStyleResult,
                );
              }}
            >
              {button}
            </button>
          ))}
          <button
            className={style.resultNow}
            onClick={() => {
              getResult(count, result, setResult, symbolFlag);
              setCount(0);
              setSymbolFlag('');
              func.actionResult(actionFlag, setActionFlag);
              setStyleResult(`${style.fieldResult} ${style.active}`);
            }}
          >
            =
          </button>
        </div>
        <div className={style.actionButton}>
          <button
            onClick={() => {
              if (symbolFlag === '') {
                setSymbolFlag('+');
                func.actionResult(actionFlag, setActionFlag);
                setCount(count + result);
              }
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (symbolFlag === '') {
                setSymbolFlag('-');
                func.actionResult(actionFlag, setActionFlag);
                setCount(count + result);
              }
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setSymbolFlag('');
              setResult(0);
              setCount(0);
              setStyleResult(style.fieldResult);
            }}
          >
            C
          </button>
        </div>
      </div>
    </>
  );
};

// Хук useState() принимает в первый аргумент начальное значение состояния и возвращает
// массив из двух элементов: текущее значение состояния и функцию для установки нового значения
