// import AlbumLogo from '../../../assets/image.png'

export default function AlbumForm({ formValue, setFormValue, clearForm, createAlbum }) {
    return (
        <div className='album-form'>
            <div>
                <h1>Create an Album</h1>
            </div>
            <div className='input'>
                <input type='text' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder='Album Name' />
                <button className='red' onClick={clearForm}>Clear</button>
                <button className='blue' onClick={createAlbum}>Create</button>
            </div>
        </div>
    )
};