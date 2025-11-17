import AlbumLogo from '../../../assets/image.png'

export default function Album({ albums }) {
    return (
        <>
            <div className='albums-container'>
                {albums.map((album) => (
                    <div className='album' key={album.id}>
                        <img className='album-img' src={AlbumLogo} alt='album image' />
                        <h3>{album.name}</h3>
                    </div>
                ))}
            </div>
        </>
    )
};
