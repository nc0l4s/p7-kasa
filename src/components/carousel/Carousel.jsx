import { useState} from 'react'
import nextIcon from '../../assets/arrow_forward_ios-24px 1.svg'
import previousIcon from '../../assets/arrow_back_ios-24px 2.svg'
import css from './carousel.module.scss'

export default function Carousel ({img}){
  
    const numberPicture = img.length
    const firstPicture = img[0]
    const lastPicture = img[numberPicture-1]
    const [pictureActual, setPictureActual ] = useState(firstPicture)
    const pictureIndex = img.indexOf(pictureActual)
    
    const next = () => {
        if(pictureActual === lastPicture){
            setPictureActual(firstPicture)
        } else {
            
            setPictureActual(img[pictureIndex+1])
        }
    }

    const previous = () => {
        if(pictureActual === firstPicture){
            setPictureActual(lastPicture)
        } else {
            
            setPictureActual(img[pictureIndex-1])
        }
    }

    return (
        <div className={css.carousel}>
            <div className={css.carousel_container} >
            <img src={pictureActual}  alt={pictureActual.title} className={css.carousel_img} />
            </div>
            {numberPicture !== 1 &&
            <div className={css.carousel_controls}>
                <img src={previousIcon} className={css.chevronLeft} alt="previous" onClick={() => previous(pictureActual)} />
                <img src={nextIcon} className={css.chevronRight} alt="next" onClick={() => next(pictureActual)}/>
                <div className={css.carousel_Index}>{img.indexOf(pictureActual)+1} / {numberPicture}</div>

            </div>}
        </div>
    );}


    