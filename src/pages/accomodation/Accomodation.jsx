import css from './accomodation.module.scss'
import Rating from '../../components/Rating/rating.jsx'
import Header from '../../components/header/Header.jsx'
import Collapse from '../../components/collapse/Collapse.jsx'
import Carousel from '../../components/carousel/Carousel.jsx'
import { useParams } from "react-router-dom";
import datas from '../../data/data'




function Accomadation(){
     
    const {id} = useParams()
    const accomodation = datas.find(appart => appart.id === id)
    console.log(accomodation)
   
   

    return (
        <>
        <Header />

         <div className='carousel_location'> 
           <Carousel img={accomodation.pictures} />  
         </div> 

        <div className={css.location}>
          <div className={css.location_header}>
               <h2 className={css.location_header_title}key={"title"+accomodation.id}>{accomodation.title}</h2>
               <div className={css.location_header_city}key={"location"+accomodation.id}>{accomodation.location}</div>
               <ul className={css.location_header_tags}>{accomodation.tags.map((tag)=>
                 <li className={css.location_header_tags_tag} key={tag}>{tag}</li>)}
                </ul>
          </div>
        

        <div className={css.location_host}>
            <div id="host" className={css.location_host_info}>
              <div className={css.host_name}>{accomodation.host.name}</div> 
              <img className={css.host_picture} src={accomodation.host.picture} alt="" />
            </div>
             <div className='host_rating'>  
                 <Rating rating={accomodation.rating} /> 
             </div> 
        </div>
        </div>

        <div className={css.location_info}>
            <div className={css.collapse_container}>
                <Collapse 
                title= "Description"
                content= {accomodation.description}
                />
            </div>
            <div className={css.collapse_container}>
                <Collapse 
                title="Equipement"
                content={
                  <ul>{accomodation.equipments.map((equipment) => 
                    <li key={equipment}>{equipment}</li>)}
                  </ul>}
                />
            </div>
            
        </div>
            

        
        
        <main>
        </main>
        {/* <Footer/>  */}
        </>
        
    )
}

export default Accomadation;


