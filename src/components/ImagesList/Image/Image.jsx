// import AlbumLogo from '../../../assets/image.png'

export default function Image({ images, setAlbumId }) {
    return (
        <>
            <div className='image-container'>
                {images.map((image) => (
                    <div className='galary' key={image.id} /* onClick={()=>setAlbumId(image.id)}*/>
                        <img className='image' src={image.url} alt={image.title} />
                        <h3>{image.title}</h3>
                    </div>
                ))}
            </div>
        </>
    )
};
