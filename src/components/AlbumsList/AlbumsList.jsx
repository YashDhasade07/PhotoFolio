import { useState } from 'react'
import Album from './Album/Album'
import AlbumForm from './AlbumForm/AlbumForm'
import './albumsList.css'

export default function AlbumsList({albums, createAlbums, setAlbumId}){
    // console.log(albums)
    // const [albums, setAlbums] = useState([{id: 1, name: 'Test Album' },{id: 2, name: 'Test Album' },{id: 3, name: 'Test Album' },{id: 4, name: 'Test Album' },{id: 5, name: 'Test Album' },{id: 6, name: 'Test Album' },])
    const [showForm , setShowForm] = useState(false)
    const [formValue, setFormValue] =useState('')
    const clearForm = ()=>{
        setFormValue('')
    }
    const createAlbum = ()=>{
        if(formValue.trim()){
            let id = new Date().getTime();
            let name = formValue
            createAlbums(id, name)
            clearForm()
            setShowForm(false)
        }
    }


    return (

        <div className='album-list'>
            {showForm && <AlbumForm formValue={formValue} setFormValue={setFormValue} clearForm={clearForm} createAlbum={createAlbum} />}

            <div className='title'>
                <h2>Your Albums</h2>
                <button className={showForm ? 'cancel' :'add-album'} onClick={()=>setShowForm(!showForm)}>{showForm ? 'Cancel' :'Add album'}</button>
            </div>
            <Album albums={albums} setAlbumId={setAlbumId}/>
        </div>  
    )
}