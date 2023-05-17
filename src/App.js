// import './App.css';
import style from './App.module.css';
import { MyComponent } from './MyComponent';

// императивный
export function App() {
  return (
    //декларативный
    <div className={style.app}>
      <header className={style.header}>
        <MyComponent />
      </header>
    </div>
  );
}
