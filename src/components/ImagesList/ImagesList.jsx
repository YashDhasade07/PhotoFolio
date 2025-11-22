import { useEffect, useState } from "react"
import './ImagesList.css'
import BackLogo from '../../assets/back.png'
import SearchLogo from '../../assets/search.png'
import ClearLogo from '../../assets/clear.png'
import Image from "./Image/Image"
import Carousel from "./Carousel/Carousel"
import ImageForm from "./imageForm/ImageForm"
import Spinner from 'react-spinner-material';

export default function ImagesList({ images, uploadImages, albumId, setAlbumId, deleteImage }) {
    // const [image, setAlbums] = useState([{id: 1, title: 'Test Album' },])
    const [showForm, setShowForm] = useState(false)
    const [isEdit, setIsEdit] = useState(null)
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [formValue, setFormValue] = useState({ title: '', url: '' })
    const [showCarousal, setShowCarousal] = useState(false);
    const [carousalCurrentIndex, setCarousalCurrentIndex] = useState(0);
    const [filteredImages, setFilteredImages] = useState(images);
    const [isLoading, setIsLoading] = useState(false);

//  Prevent body scroll when carousel is open
    useEffect(() => {
        if (showCarousal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showCarousal]);

    const clearForm = () => {
        setFormValue({ title: '', url: '' })
    }


// Prefill form for editing existing image
    const setEdit = (id) => {
        let image = images.find((img) => img.id === id)
        setShowForm(true)
        setIsEdit(id)
        setFormValue({ title: image.title, url: image.url })
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const updateFormValue = (value, field) => {
        setFormValue((prevVal) => ({ ...prevVal, [field]: value }))
    }
    const createImage = async () => {
        if (formValue.title.trim() && formValue.url.trim()) {
            setIsLoading(true);
            try {
                if (isEdit !== null) {
                    await uploadImages({ albumId, ...formValue }, isEdit);
                } else {
                    await uploadImages({ albumId, ...formValue });
                }
                clearForm();
                setShowForm(false);
                setIsEdit(null);
            } finally {
                setIsLoading(false);
            }
        }
    };

    // Carousel navigation with wrap-around using modulo
    const prevImage = () => {
        setCarousalCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
    }
    const nextImage = () => {
        setCarousalCurrentIndex((prev) => (prev + 1) % filteredImages.length)
    }

    // Filter images based on search query
    useEffect(() => {
        searchValue
            ? setFilteredImages(images.filter((img) => img.title.toLowerCase().includes(searchValue.toLowerCase())))
            : setFilteredImages(images)
    }, [searchValue, images])



    return (
        <div className="image-list">
            {showForm && <ImageForm isEdit={isEdit} formValue={formValue} updateFormValue={updateFormValue} clearForm={clearForm} createImage={createImage} isLoading={isLoading} />}

            <div className='image-title'>
                <div className="left">
                    <img src={BackLogo} className="back" alt="Back" onClick={() => setAlbumId(null)} />
                    <h2>Images in Albums</h2>
                </div>
                <div className="right">
                    {showSearch && <input onChange={handleSearch} type="text" name="search" />}
                    <img src={showSearch ? ClearLogo : SearchLogo} className="search" alt="Search"
                        onClick={() => {
                            setShowSearch(!showSearch)
                            setSearchValue('')
                        }} />
                    <button className={showForm ? 'cancel' : 'add-image'}
                        onClick={() => {
                            setShowForm(!showForm)
                            clearForm()
                            setIsEdit(null)
                        }}>{showForm ? 'Cancel' : 'Add image'}</button>
                </div>
            </div>
            {filteredImages.length === 0 ? (
                <div className="empty-state">
                    <h3 style={{ color: 'red' }}>No images found. {searchValue ? 'Try a different search.' : 'Add some images!'}</h3>
                </div>
            ) : <Image setShowCarousal={setShowCarousal} setCarousalCurrentIndex={setCarousalCurrentIndex} images={filteredImages} setEdit={setEdit} deleteImage={deleteImage} />}

            {showCarousal
                && <Carousel
                    images={filteredImages}
                    carousalCurrentIndex={carousalCurrentIndex}
                    setShowCarousal={setShowCarousal}
                    prevImage={prevImage}
                    nextImage={nextImage}
                />}
        </div>
    )
};
