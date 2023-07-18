import css from './accomodation.module.scss'

import Header from '../../components/header/Header.jsx'
import Collapse from '../../components/collapse/Collapse.jsx'
//import Carousel from '../../components/carousel/Carousel.jsx'
import { useParams } from "react-router-dom";
import datas from '../../data/data'


function Accomadation(){
    

  
    
    return (
        <>
       
        <Header />
        {/* <Carousel /> */}
        <Collapse />
        <main>
        
        </main>
        {/* <Footer/> */}
        </>
        
    )
}

export default Accomadation;


