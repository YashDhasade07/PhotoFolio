import { useState } from 'react'
import AlbumLogo from '../../assets/image.png'
import './albumsList.css'

export default function AlbumsList(){

    let [albums, setAlbums] = useState([{id: 1, name: 'Test Album' }])
    return (
        <div className='album-list'>
            <div className='title'>
                <h2>Your Albums</h2>
                <button>Add album</button>
            </div>
            <div className='albums'>
                <div className='album'>
                    <img className='album-img' src={AlbumLogo} alt='album image' />
                    <h3>Test album</h3>
                </div>
                <div className='album'>
                    <img className='album-img' src={AlbumLogo} alt='album image' />
                    <h3>Test album</h3>
                </div>
                <div className='album'>
                    <img className='album-img' src={AlbumLogo} alt='album image' />
                    <h3>Test album</h3>
                </div>
                <div className='album'>
                    <img className='album-img' src={AlbumLogo} alt='album image' />
                    <h3>Test album</h3>
                </div>
                <div className='album'>
                    <img className='album-img' src={AlbumLogo} alt='album image' />
                    <h3>Test album</h3>
                </div>
            </div>
        </div>
    )
}