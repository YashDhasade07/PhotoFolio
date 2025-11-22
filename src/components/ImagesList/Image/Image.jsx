import EditLogo from '../../../assets/edit.png'
import BinLogo from '../../../assets/trash-bin.png'

export default function Image({ images, setShowCarousal, setCarousalCurrentIndex, setEdit, deleteImage }) {

    const gallaryClick = (index) => {
        setShowCarousal(true)
        setCarousalCurrentIndex(index)
    }
    return (
        <>
            <div className='image-container'>
                {images.map((image, index) => (
                    <div onClick={() => gallaryClick(index)} className='galary' key={image.id} >
                        <div className='galary-btn'>
                            <img src={EditLogo}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setEdit(image.id)
                                }}
                                alt='Edit' />
                            <img src={BinLogo} alt='Remove'
                                onClick={(e) => {
                                    e.stopPropagation()
                                    deleteImage(image.id)
                                }} />
                        </div>
                        <img className='image' src={image.url} alt={image.title} />
                        <h3>{image.title}</h3>
                    </div>
                ))}
            </div>
        </>
    )
};
