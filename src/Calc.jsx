import style from './CalcStyle.module.css';
import { useState } from 'react';
import * as func from './modules/changeFunc';
import { getResult } from './modules/changeFunc';

const calculatorButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+','-','C','='];

export const Calc = () => {
  const [result, setResult] = useState(0);
  const [symbolFlag, setSymbolFlag] = useState('');
  const [actionFlag, setActionFlag] = useState('');
  const [count, setCount] = useState(0);
  const [styleResult, setStyleResult] = useState(style.fieldResult);

  function clickToResultButton() {
      getResult(count, result, setResult, symbolFlag);
      setCount(0);
      setSymbolFlag('');
      func.actionResult(actionFlag, setActionFlag);
      setStyleResult(`${style.fieldResult} ${style.active}`);
    }

    function clickToResetButton() {
        setSymbolFlag('');
        setResult(0);
        setCount(0);
        setStyleResult(style.fieldResult);
    }

  return (
    <>
      <div className={`${style.container}`}>
        <div className={styleResult}>{result}</div>
        <div className={style.calcContainer}>
          {calculatorButtons.map((button) => {
              if(!isNaN(button)) {
                  console.log( Number(button));
                  return <button
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
              }
              if (button === '=') {
                  return <button
                      className={style.resultNow}
                      onClick={clickToResultButton}
                  >
                      {button}
                  </button>
              }
          })}

        </div>
        <div className={style.actionButton}>
            {calculatorButtons.map((button) => {
                if(button === '+' || button === '-') {
                    return <button
                        className={style.buttonCalc}
                        key={button}
                        onClick={() => {
                            if (symbolFlag === '') {
                                setSymbolFlag(button);
                                func.actionResult(actionFlag, setActionFlag);
                                setCount(count + result);
                            }
                        }}
                    >
                        {button}
                    </button>
                }
                if (button === 'C') {
                    return <button
                        className={style.resultNow}
                        onClick={clickToResetButton}
                    >
                        {button}
                    </button>
                }
            })}
        </div>
      </div>
    </>
  );
};

// Хук useState() принимает в первый аргумент начальное значение состояния и возвращает
// массив из двух элементов: текущее значение состояния и функцию для установки нового значения
