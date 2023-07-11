import { Routes, Route, } from "react-router-dom";
import Home from './pages/Home/Home'
import css from './App.module.scss'

function App() {
  return (
    <main className={css.app}>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      
    </main>
  );
}

export default App;
