import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
// import './App.css'
import AlbumsList from './components/AlbumsList/AlbumsList'
import ImagesList from './components/ImagesList/ImagesList'

function App() {
  const [albums, setAlbums] = useState([{ id: 1, name: 'Test Album' }, { id: 2, name: 'Test Album' }, { id: 3, name: 'Test Album' }, { id: 4, name: 'Test Album' }, { id: 5, name: 'Test Album' }, { id: 6, name: 'Test Album' },])
  const [images, setImages] = useState([{ id: 1, albumId: 2, title: 'Test Image', url: 'https://images.pexels.com/photos/1533483/pexels-photo-1533483.jpeg?cs=srgb&dl=light-dawn-landscape-1533483.jpg&fm=jpg' },{ id: 1, albumId: 2, title: 'Test Image', url: 'https://images.pexels.com/photos/1533483/pexels-photo-1533483.jpeg?cs=srgb&dl=light-dawn-landscape-1533483.jpg&fm=jpg' },{ id: 1, albumId: 2, title: 'Test Image', url: 'https://images.pexels.com/photos/1533483/pexels-photo-1533483.jpeg?cs=srgb&dl=light-dawn-landscape-1533483.jpg&fm=jpg' },])
  const [ albumId, setAlbumId] = useState(null)
  const createAlbum = (id, name) => {
    setAlbums((prev) => (
      [{ id, name }, ...prev]
    ))
  }

  // useEffect(()=>console.log(image),[image])

  const uploadImages = (data) =>{
    setImages((prev)=>(
      [...prev, {id:new Date().getTime(), ...data} ]
    ))
  }

  return (
    <>
      <Navbar />
      {albumId 
       ? <ImagesList images={images} uploadImages={uploadImages} albumId={albumId} setAlbumId={setAlbumId}/>
       :<AlbumsList albums={albums} createAlbums={createAlbum} setAlbumId={setAlbumId} />
      } 
      
    </>
  )
}

export default App
