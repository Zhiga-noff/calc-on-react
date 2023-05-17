import style from '../CalcStyle.module.css';

export function changeFieldResult(action, result, setter, flag, setFlag, setStyle) {
  if (flag) {
    setFlag(!flag);
    setStyle(style.fieldResult);
    return setter(Number(action));
  }

  const number = `${result}` + action;
  return setter(Number(number));
}

export function actionResult(flag, setFlag) {
  if (flag) {
    return;
  }
  setFlag(!flag);
}

export function getResult(count, result, setter, flag) {
  if (flag === '+') {
    return setter(count + result);
  }
  if (flag === '-') {
    return setter(count - result);
  }
}
