import style from './App.module.css';
import { Calc } from './Calc';

// императивный
export function App() {
  return (
    //декларативный
    <div className={style.app}>
      <div className={style.header}>
        <Calc />
      </div>
    </div>
  );
}
