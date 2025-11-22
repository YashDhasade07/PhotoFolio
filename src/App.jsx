import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
// import './App.css'
import AlbumsList from './components/AlbumsList/AlbumsList'
import ImagesList from './components/ImagesList/ImagesList'

function App() {
  const [albums, setAlbums] = useState([{ id: 1, name: 'Test Album' }, { id: 2, name: 'Test Album' }, { id: 3, name: 'Test Album' }, { id: 4, name: 'Test Album' }, { id: 5, name: 'Test Album' }, { id: 6, name: 'Test Album' },])
  const [images, setImages] = useState([{ id: 1, albumId: 2, title: 'Test Image yash', url: 'https://images.pexels.com/photos/1533483/pexels-photo-1533483.jpeg?cs=srgb&dl=light-dawn-landscape-1533483.jpg&fm=jpg' },
                                        { id: 2, albumId: 2, title: ' Image', url: 'https://jooinn.com/images/beautiful-waterfall-5.jpg' },
                                        { id: 3, albumId: 2, title: 'Test Image', url: 'https://th.bing.com/th/id/R.829843c130c948d4fbb835dae965a5da?rik=LCpFbdcAeWDZ8w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffAwVCh3.jpg&ehk=lGN4CaEuFMjMiZTZ2nF9id7MRRJ3e1tiWELDbLGorPE%3d&risl=&pid=ImgRaw&r=0' },
                                        { id: 4, albumId: 2, title: ' Image', url: 'https://images.pexels.com/photos/1533483/pexels-photo-1533483.jpeg?cs=srgb&dl=light-dawn-landscape-1533483.jpg&fm=jpg' },
                                        { id: 5, albumId: 2, title: ' Image', url: 'https://jooinn.com/images/beautiful-waterfall-5.jpg' },
                                        { id: 6, albumId: 2, title: ' Image', url: 'https://th.bing.com/th/id/R.829843c130c948d4fbb835dae965a5da?rik=LCpFbdcAeWDZ8w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffAwVCh3.jpg&ehk=lGN4CaEuFMjMiZTZ2nF9id7MRRJ3e1tiWELDbLGorPE%3d&risl=&pid=ImgRaw&r=0' },
                                      ])
  const [albumId, setAlbumId] = useState(null)
  
  const createAlbum = (id, name) => {
    setAlbums((prev) => (
      [{ id, name }, ...prev]
    ))
  }
  const deleteImage = (id) => {
    setImages((prev) => (
      prev.filter((img)=> img.id !== id)
    ))
  }

  // useEffect(()=>console.log(image),[image])

  const uploadImages = (data,id) => {
    if(id){
      setImages((prev) => (
        prev.map((img)=>{
          if(img.id == id){
            return { id, ...data }
          }
          return img
        })
      ))
    }else{
      setImages((prev) => (
        [...prev, { id: new Date().getTime(), ...data }]
      ))
    }
  }

  return (
    <>
      <Navbar />
      {albumId
        ? <ImagesList images={images.filter((image) => image.albumId === albumId)} uploadImages={uploadImages} albumId={albumId} setAlbumId={setAlbumId} deleteImage={deleteImage} />
        : <AlbumsList albums={albums} createAlbums={createAlbum} setAlbumId={setAlbumId} />
      }

    </>
  )
}

export default App
