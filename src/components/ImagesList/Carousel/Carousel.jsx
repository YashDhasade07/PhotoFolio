import Cross from '../../../assets/Cross.png'
import Forward from '../../../assets/Forward.png'
import Backword from '../../../assets/Backword.png'

export default function Carousel({images, carousalCurrentIndex, prevImage, nextImage, setShowCarousal}) {
    return(
    <div className="carousel-overlay">
        <div className="carousel-container">
            <div className="close">
                <img onClick={()=>setShowCarousal(false)} src={Cross} className='carousel-btn'/>
            </div>
            <div className='carousel'>
                <img src={Backword} className='carousel-btn' onClick={()=>prevImage()}/>
                <img src={images[carousalCurrentIndex].url} className='carousal-image' alt={images[carousalCurrentIndex].title}/>
                <img src={Forward} className='carousel-btn' onClick={()=>nextImage()}/>
            </div>
        </div>
    </div>
    )
};
