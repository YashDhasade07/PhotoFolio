
export default function ImageForm({ isEdit,formValue, updateFormValue, clearForm, createImage }) {
    return (
        <div className='image-form'>
            <div>
                <h1>{isEdit ? "Edit image" : "Add image"}</h1>
            </div>
            <div className='input'>
                <input type='text' value={formValue.title} onChange={(e) => updateFormValue(e.target.value, 'title')} placeholder='title' />
                <input type='text' value={formValue.url} onChange={(e) => updateFormValue(e.target.value, 'url')} placeholder='URL' />
                <button className='red' onClick={clearForm}>Clear</button>
                <button className='blue' onClick={createImage}>{isEdit ? "Edit" : "ADD"}</button>
            </div>
        </div>
    )
};