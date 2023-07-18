import { Routes, Route, } from "react-router-dom";
//import Home from './pages/Home/Home'
import Accomadation from "./pages/accomodation/Accomodation";
//import NotFound from "./pages/notFound/NotFound";
//import About from "./pages/about/about.jsx";
import css from './App.module.scss'

function App() {
  return (
    <main className={css.app}>
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />}/> */}
      {/* </Routes> */}
      <Routes> 
       <Route path="/" element={<Accomadation/>}/> 
      </Routes> 
      {/* <Routes> */}
        {/* <Route path="/" element={<NotFound />}/> */}
      {/* </Routes> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<About />}/> */}
      {/* </Routes> */}
    </main>
  );
}

export default App;


