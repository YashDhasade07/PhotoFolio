import { useState } from "react"
import './ImagesList.css'
import BackLogo from '../../assets/back.png'
import SearchLogo from '../../assets/search.png'
import Image from "./Image/Image"

export default function ImagesList({images, uploadImages , albumId, setAlbumId}) {
    // const [image, setAlbums] = useState([{id: 1, title: 'Test Album' },])
    const [showForm , setShowForm] = useState(false)
    const [formValue, setFormValue] =useState({title: '', url: ''})
    const clearForm = ()=>{
        setFormValue({title: '', url: ''})
    }

    const updateFormValue = (value,field)=>{
        setFormValue((prevVal)=>({...prevVal,[field]:value}))
    }
    const createImage = ()=>{
        if(formValue.title.trim() && formValue.url.trim()){
            uploadImages({albumId, ...formValue})
            clearForm()
            setShowForm(false)
        }
    }
    return(
        <div className="image-list">
            {showForm && (
                <div className = 'image-form'>
                    <div>
                        <h1>Add image</h1>
                    </div>
                    <div className='input'>
                        <input type='text' value={formValue.title} onChange={(e)=>updateFormValue(e.target.value,'title')} placeholder='title' />
                        <input type='text' value={formValue.url} onChange={(e)=>updateFormValue(e.target.value,'url')} placeholder='URL' />
                        <button className='red' onClick={clearForm}>Clear</button>
                        <button className='blue' onClick={createImage}>ADD</button>
                    </div>
                </div>
            )}

            <div className='image-title'>
                <div className="left">
                    <img src={BackLogo} className="back" alt="Back" onClick={()=>setAlbumId(null)}/>
                    <h2>Images in Albums</h2>
                </div>
                <div className="right">
                    <img src={SearchLogo} className="search" alt="Search" onClick={()=>setAlbumId(null)}/>
                    <button className={showForm ? 'cancel' : 'add-image'} onClick={()=>setShowForm(!showForm)}>{showForm ? 'Cancel' : 'Add image'}</button>
                </div>
            </div>
            <Image images={images.filter((image)=>image.albumId === albumId)}  />

        </div>
    )
};
