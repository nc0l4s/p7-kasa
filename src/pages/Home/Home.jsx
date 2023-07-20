import css from './Home.module.scss'
import Header from '../../components/header/Header.jsx'
import Banner from '../../components/banner/Banner.jsx'
import Gallery from '../../components/gallery/Gallery.jsx'
import Footer from '../../components/footer/Footer.jsx'

function Home(){
    return (
        <>
        <Header />  
        <Banner />
        <Gallery />
        <Footer />
        </>
        
    )
}

export default Home;