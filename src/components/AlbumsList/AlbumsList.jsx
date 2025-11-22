import { useState } from 'react'
import Album from './Album/Album'
import AlbumForm from './AlbumForm/AlbumForm'
import './albumsList.css'

export default function AlbumsList({albums, createAlbums, setAlbumId}){
    const [showForm , setShowForm] = useState(false)
    const [formValue, setFormValue] =useState('')
    const clearForm = ()=>{
        setFormValue('')
    }

// Validate and create album
    const createAlbum = ()=>{
        let name = formValue.trim()
        if(name){
            createAlbums(name)
            clearForm()
            setShowForm(false)
        }
    }


    return (

        <div className='album-list'>
            {showForm && <AlbumForm formValue={formValue} setFormValue={setFormValue} clearForm={clearForm} createAlbum={createAlbum} />}

            <div className='title'>
                <h2>Your Albums</h2>
                <button className={showForm ? 'cancel' :'add-album'} 
                onClick={()=>{setShowForm(!showForm)
                    setFormValue('')
                }}>{showForm ? 'Cancel' :'Add album'}</button>
            </div>
            <Album albums={albums} setAlbumId={setAlbumId}/>
        </div>  
    )
}