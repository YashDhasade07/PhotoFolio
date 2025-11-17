import { useState } from 'react'
import Album from './Album/Album'
import './albumsList.css'

export default function AlbumsList(){

    const [albums, setAlbums] = useState([{id: 1, name: 'Test Album' },{id: 2, name: 'Test Album' },{id: 3, name: 'Test Album' },{id: 4, name: 'Test Album' },{id: 5, name: 'Test Album' },{id: 6, name: 'Test Album' },])
    const [showForm , setShowForm] = useState(false)
    const [formValue, setFormValue] =useState('')
    const clearForm = ()=>{
        setFormValue('')
    }
    const createAlbum = ()=>{
        if(formValue.trim()){
            setAlbums((prev)=>(
                [{id: new Date().getTime(), name: formValue}, ...prev]
            ))
            clearForm()
            setShowForm(false)
        }
    }


    return (

        <div className='album-list'>
            {showForm && (
            <div className = 'album-form'>
                <div>
                    <h1>Create an Album</h1>
                </div>
                <div className='input'>
                    <input type='text' value={formValue} onChange={(e)=>setFormValue(e.target.value)} placeholder='Album Name' />
                    <button className='red' onClick={clearForm}>Clear</button>
                    <button className='blue' onClick={createAlbum}>Create</button>
                </div>
            </div>) 
            }

            <div className='title'>
                <h2>Your Albums</h2>
                <button className={showForm ? 'cancel' :'add-album'} onClick={()=>setShowForm(!showForm)}>{showForm ? 'Cancel' :'Add album'}</button>
            </div>
            <Album albums={albums} />
        </div>  
    )
}