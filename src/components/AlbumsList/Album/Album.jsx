import AlbumLogo from '../../../assets/image.png'

export default function Album({ albums }) {

    let seperatedAlbums = [];
    let innerSet = []

    for (let i = 0; i < albums.length; i++) {
        if (i % 5 == 0) {
            innerSet.length ? seperatedAlbums.push(innerSet) : null
            innerSet = [albums[i]]
        } else {
            innerSet.push(albums[i])
        }
    }
    innerSet.length ? seperatedAlbums.push(innerSet) : null
    return (
        <>

            {seperatedAlbums.map((innerSet, index) => (
                <div className='albums' key={index}>
                    {innerSet.map((album) => (
                        <div className='album' key={album.id}>
                            <img className='album-img' src={AlbumLogo} alt='album image' />
                            <h3>{album.name}</h3>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
};
